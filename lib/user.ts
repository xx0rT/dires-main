import { createClient } from "@/lib/supabase/server";

export const getUserByEmail = async (email: string) => {
  try {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user || user.email !== email) {
      return null;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    return {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || null,
      image: user.user_metadata?.avatar_url || null,
      role: profile?.role || 'USER',
      stripeCustomerId: profile?.stripe_customer_id || null,
      stripeSubscriptionId: profile?.stripe_subscription_id || null,
      stripePriceId: profile?.stripe_price_id || null,
      stripeCurrentPeriodEnd: profile?.stripe_current_period_end || null,
    };
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user || user.id !== id) {
      return null;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    return {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || null,
      image: user.user_metadata?.avatar_url || null,
      role: profile?.role || 'USER',
      stripeCustomerId: profile?.stripe_customer_id || null,
      stripeSubscriptionId: profile?.stripe_subscription_id || null,
      stripePriceId: profile?.stripe_price_id || null,
      stripeCurrentPeriodEnd: profile?.stripe_current_period_end || null,
      createdAt: profile?.created_at || null,
      updatedAt: profile?.updated_at || null,
    };
  } catch {
    return null;
  }
};