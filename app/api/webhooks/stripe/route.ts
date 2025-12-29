import { headers } from "next/headers";
import Stripe from "stripe";

import { env } from "@/env.mjs";
import { stripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const supabase = await createClient();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );

    await supabase
      .from('profiles')
      .update({
        stripe_subscription_id: subscription.id,
        stripe_customer_id: subscription.customer as string,
        stripe_price_id: subscription.items.data[0].price.id,
        stripe_current_period_end: new Date(
          subscription.current_period_end * 1000,
        ).toISOString(),
      })
      .eq('id', session?.metadata?.userId);
  }

  if (event.type === "invoice.payment_succeeded") {
    const session = event.data.object as Stripe.Invoice;

    if (session.billing_reason != "subscription_create") {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string,
      );

      await supabase
        .from('profiles')
        .update({
          stripe_price_id: subscription.items.data[0].price.id,
          stripe_current_period_end: new Date(
            subscription.current_period_end * 1000,
          ).toISOString(),
        })
        .eq('stripe_subscription_id', subscription.id);
    }
  }

  return new Response(null, { status: 200 });
}
