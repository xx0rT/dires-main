import { PlansRow, SubscriptionPlan } from "types";
import { env } from "@/env.mjs";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Základní",
    description: "Pro příležitostné návštěvy",
    benefits: [
      "Jednorázové sezení fyzioterapie",
      "Online rezervační systém",
      "Základní konzultace",
    ],
    limitations: [
      "Bez slevy na další návštěvy",
      "Standardní termíny",
      "Bez prioritní podpory",
      "Bez online konzultací",
    ],
    prices: {
      monthly: 0,
      yearly: 0,
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: "Aktivní",
    description: "Pro pravidelnou péči",
    benefits: [
      "4 sezení fyzioterapie měsíčně",
      "Individuální cvičební plán",
      "Prioritní rezervace termínů",
      "20% sleva na masáže",
      "Online konzultace zdarma",
    ],
    limitations: [
      "Omezený počet setkání",
      "Bez možnosti pozastavení",
    ],
    prices: {
      monthly: 1500,
      yearly: 16200,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  {
    title: "Premium",
    description: "Pro intenzivní rehabilitaci",
    benefits: [
      "Neomezený počet setkání",
      "Personalizovaný terapeutický plán",
      "Prioritní podpora 24/7",
      "Online konzultace kdykoliv",
      "30% sleva na všechny služby",
      "Možnost domácích návštěv",
    ],
    limitations: [],
    prices: {
      monthly: 3000,
      yearly: 32400,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
  },
];

export const plansColumns = [
  "starter",
  "pro",
  "business",
  "enterprise",
] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "Fyzioterapeutická sezení",
    starter: "Jednorázově",
    pro: "4x měsíčně",
    business: "Neomezeně",
    enterprise: "Neomezeně",
    tooltip: "Počet fyzioterapeutických sezení měsíčně.",
  },
  {
    feature: "Online rezervace",
    starter: true,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    feature: "Individuální cvičební plán",
    starter: null,
    pro: true,
    business: true,
    enterprise: true,
    tooltip: "Personalizovaný plán cvičení pro domácí péči.",
  },
  {
    feature: "Online konzultace",
    starter: null,
    pro: "1x měsíčně",
    business: "Neomezeně",
    enterprise: "Neomezeně",
    tooltip: "Konzultace s terapeutem přes video hovor.",
  },
  {
    feature: "Prioritní termíny",
    starter: null,
    pro: true,
    business: true,
    enterprise: true,
    tooltip: "Přednostní rezervace volných termínů.",
  },
  {
    feature: "Sleva na masáže",
    starter: null,
    pro: "20%",
    business: "30%",
    enterprise: "30%",
  },
  {
    feature: "Domácí návštěvy",
    starter: false,
    pro: false,
    business: "Možné",
    enterprise: "Možné",
    tooltip: "Možnost návštěvy fyzioterapeuta u vás doma.",
  },
  {
    feature: "Podpora",
    starter: "Email",
    pro: "Email",
    business: "24/7",
    enterprise: "24/7",
  },
  {
    feature: "Sledování pokroku",
    starter: "Základní",
    pro: "Pokročilé",
    business: "Pokročilé",
    enterprise: "Pokročilé",
    tooltip: "Detailní přehled vašeho pokroku v aplikaci.",
  },
  {
    feature: "Možnost pozastavení",
    starter: false,
    pro: false,
    business: true,
    enterprise: true,
    tooltip: "Možnost dočasně pozastavit předplatné.",
  },
];
