"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Icons } from "@/components/shared/icons";
import { createClient } from "@/lib/supabase/client";

const authSchema = z.object({
  email: z.string().email("Zadejte platnou emailovou adresu"),
  password: z.string().min(8, "Heslo musí mít alespoň 8 znaků"),
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
}

type FormData = z.infer<typeof authSchema>;

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(authSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const supabase = createClient();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    try {
      if (type === "register") {
        const { error } = await supabase.auth.signUp({
          email: data.email.toLowerCase(),
          password: data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });

        if (error) {
          return toast.error("Registrace se nezdařila", {
            description: error.message,
          });
        }

        toast.success("Účet vytvořen!", {
          description: "Nyní se můžete přihlásit pomocí svých přihlašovacích údajů.",
        });

        router.push("/login");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: data.email.toLowerCase(),
          password: data.password,
        });

        if (error) {
          return toast.error("Přihlášení se nezdařilo", {
            description: error.message === "Invalid login credentials"
              ? "Neplatné přihlašovací údaje"
              : error.message,
          });
        }

        toast.success("Úspěšně přihlášen!");
        router.push(searchParams?.get("from") || "/dashboard");
        router.refresh();
      }
    } catch (error) {
      toast.error("Něco se pokazilo", {
        description: "Zkuste to prosím znovu později.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="vas@email.cz"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className={cn(errors?.email && "border-red-500")}
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">
                Heslo
              </Label>
              {type !== "register" && (
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  Zapomněli jste heslo?
                </a>
              )}
            </div>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              autoCapitalize="none"
              autoComplete={type === "register" ? "new-password" : "current-password"}
              autoCorrect="off"
              disabled={isLoading}
              className={cn(errors?.password && "border-red-500")}
              {...register("password")}
            />
            {errors?.password && (
              <p className="text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            className="w-full"
            disabled={isLoading}
            size="lg"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            {type === "register" ? "Vytvořit účet" : "Přihlásit se"}
          </Button>
        </div>
      </form>
    </div>
  );
}
