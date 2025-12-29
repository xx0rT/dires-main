"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { userRoleSchema } from "@/lib/validations/user";

export type UserRole = "USER" | "ADMIN";

export type FormData = {
  role: UserRole;
};

export async function updateUserRole(userId: string, data: FormData) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || user.id !== userId) {
      throw new Error("Unauthorized");
    }

    const { role } = userRoleSchema.parse(data);

    await supabase
      .from('profiles')
      .update({ role })
      .eq('id', userId);

    revalidatePath("/dashboard/settings");
    return { status: "success" };
  } catch (error) {
    return { status: "error" };
  }
}
