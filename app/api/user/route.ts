import { createClient } from "@/lib/supabase/server";

export async function DELETE() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Not authenticated", { status: 401 });
  }

  try {
    const { error } = await supabase.auth.admin.deleteUser(user.id);

    if (error) {
      throw error;
    }
  } catch (error) {
    return new Response("Internal server error", { status: 500 });
  }

  return new Response("User deleted successfully!", { status: 200 });
}
