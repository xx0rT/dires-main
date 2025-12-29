import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "FyzioTerapie",
  description:
    "Moderní fyzioterapeutická péče s online rezervacemi a individuálním přístupem. Pomůžeme vám s rehabilitací, bolestí pohybového aparátu a sportovními úrazy.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-saas-stripe-starter",
  },
  mailSupport: "info@fyzioterapie.cz",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Společnost",
    items: [
      { title: "O nás", href: "#" },
      { title: "Náš tým", href: "#" },
      { title: "Podmínky", href: "/terms" },
      { title: "Ochrana soukromí", href: "/privacy" },
    ],
  },
  {
    title: "Služby",
    items: [
      { title: "Rehabilitace", href: "#" },
      { title: "Masáže", href: "#" },
      { title: "Sportovní fyzioterapie", href: "#" },
      { title: "Cenník", href: "/pricing" },
    ],
  },
  {
    title: "Podpora",
    items: [
      { title: "Časté dotazy", href: "#" },
      { title: "Jak to funguje", href: "#" },
      { title: "Rezervace", href: "#" },
      { title: "Kontakt", href: "#" },
    ],
  },
];
