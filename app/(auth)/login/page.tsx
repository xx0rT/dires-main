import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Icons } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Přihlášení",
  description: "Přihlaste se ke svému účtu",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "absolute left-4 top-4 z-10 md:left-8 md:top-8",
        )}
      >
        <Icons.chevronLeft className="mr-2 size-4" />
        Zpět
      </Link>

      <div className="relative hidden w-1/2 flex-col bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-10 text-white lg:flex">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Icons.logo className="mr-2 size-6" />
          Fyzioterapie Praha
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Profesionální péče s individuálním přístupem. Skvělé vybavení a příjemné prostředí. Doporučuji každému, kdo hledá kvalitní fyzioterapii v Praze.&rdquo;
            </p>
            <footer className="text-sm">Jana Nováková</footer>
          </blockquote>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      <div className="flex flex-1 items-center justify-center bg-background p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Vítejte zpět
            </h1>
            <p className="text-sm text-muted-foreground">
              Přihlaste se ke svému účtu pro rezervaci termínů
            </p>
          </div>

          <Suspense>
            <UserAuthForm />
          </Suspense>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Nemáte účet?
              </span>
            </div>
          </div>

          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full"
            )}
          >
            Vytvořit účet
          </Link>

          <p className="px-8 text-center text-xs text-muted-foreground">
            Přihlášením souhlasíte s našimi{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              podmínkami použití
            </Link>{" "}
            a{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              zásadami ochrany osobních údajů
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
