import * as React from "react";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

import { NewsletterForm } from "../forms/newsletter-form";
import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container grid max-w-6xl gap-8 py-14 md:grid-cols-2 lg:grid-cols-6 lg:gap-10">
        <div className="col-span-full lg:col-span-2">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="size-6" />
            <span className="font-urban text-xl font-bold">
              {siteConfig.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Moderní fyzioterapie s individuálním přístupem. Pomůžeme vám s rehabilitací,
            bolestmi a sportovními úrazy.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icons.gitHub className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ModeToggle />
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-full flex flex-col space-y-4 lg:col-span-2">
          <h3 className="text-sm font-semibold text-foreground">
            Odebírejte novinky
          </h3>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t">
        <div className="container flex max-w-6xl flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground hover:underline"
            >
              Ochrana osobních údajů
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground hover:underline"
            >
              Podmínky použití
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
