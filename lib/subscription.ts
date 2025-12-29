import { pricingData } from "@/config/subscriptions";
import { stripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";
import { UserSubscriptionPlan } from "types";

export async function getUserSubscriptionPlan(
  userId: string
): Promise<UserSubscriptionPlan> {
  if(!userId) throw new Error("Missing parameters");

  const supabase = await createClient();

  const { data: profile } = await supabase
    .from('profiles')
    .select('stripe_subscription_id, stripe_current_period_end, stripe_customer_id, stripe_price_id')
    .eq('id', userId)
    .single();

  if (!profile) {
    throw new Error("User not found")
  }

  const user = {
    stripeSubscriptionId: profile.stripe_subscription_id,
    stripeCurrentPeriodEnd: profile.stripe_current_period_end ? new Date(profile.stripe_current_period_end) : null,
    stripeCustomerId: profile.stripe_customer_id,
    stripePriceId: profile.stripe_price_id,
  };

  const isPaid =
    user.stripePriceId &&
    user.stripeCurrentPeriodEnd &&
    user.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now() ? true : false;

  const userPlan =
    pricingData.find((plan) => plan.stripeIds.monthly === user.stripePriceId) ||
    pricingData.find((plan) => plan.stripeIds.yearly === user.stripePriceId);

  const plan = isPaid && userPlan ? userPlan : pricingData[0]

  const interval = isPaid
    ? userPlan?.stripeIds.monthly === user.stripePriceId
      ? "month"
      : userPlan?.stripeIds.yearly === user.stripePriceId
      ? "year"
      : null
    : null;

  let isCanceled = false;
  if (isPaid && user.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      user.stripeSubscriptionId
    )
    isCanceled = stripePlan.cancel_at_period_end
  }

  return {
    ...plan,
    ...user,
    stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime(),
    isPaid,
    interval,
    isCanceled
  }
}
