"use server";

import { createClient } from "@/lib/supabase/server";
import { userNameSchema } from "@/lib/validations/user";
import { revalidatePath } from "next/cache";

export type FormData = {
  name: string;
};

export async function updateUserName(userId: string, data: FormData) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user || user.id !== userId) {
      throw new Error("Unauthorized");
    }

    const { name } = userNameSchema.parse(data);

    await supabase.auth.updateUser({
      data: { name }
    });

    revalidatePath('/dashboard/settings');
    return { status: "success" };
  } catch (error) {
    return { status: "error" }
  }
}