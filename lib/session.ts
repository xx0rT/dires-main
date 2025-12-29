import "server-only";

import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export const getCurrentUser = cache(async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return undefined;
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return {
    id: user.id,
    email: user.email!,
    name: user.user_metadata?.name || null,
    image: user.user_metadata?.avatar_url || null,
    role: profile?.role || 'USER',
  };
});