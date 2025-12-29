import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Moderní fyzioterapie pro všechny",
    description:
      "Poskytujeme kvalitní fyzioterapeutickou péči s individuálním přístupem. Našim cílem je vrátit vás do plné kondice a pomoci s prevencí zranění.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Individuální přístup",
        description: "Každý pacient je jedinečný, proto vytváříme plány na míru.",
        icon: "laptop",
      },
      {
        title: "Moderní metody",
        description: "Používáme nejnovější techniky a vybavení pro nejlepší výsledky.",
        icon: "settings",
      },
      {
        title: "Zkušený tým",
        description:
          "Naši fyzioterapeuti mají dlouholeté zkušenosti a pravidelná školení.",
        icon: "search",
      },
    ],
  },
  {
    title: "Online rezervace a pohodlí",
    description:
      "Rezervujte si termín online kdykoliv, sledujte svůj pokrok a komunikujte s terapeutem přímo přes aplikaci. Vše na jednom místě.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Flexibilní termíny",
        description:
          "Rezervujte si termín podle vašich potřeb, včetně večerních hodin.",
        icon: "laptop",
      },
      {
        title: "Přehled terapie",
        description: "Sledujte svůj pokrok a historii návštěv v jedné aplikaci.",
        icon: "search",
      },
      {
        title: "Spolehlivost",
        description:
          "Automatické připomínky a snadná správa vašich návštěv.",
        icon: "settings",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Rehabilitace",
    description:
      "Komplexní rehabilitační programy po úrazech, operacích nebo při chronických potížích.",
    link: "/",
    icon: "nextjs",
  },
  {
    title: "Sportovní fyzioterapie",
    description:
      "Specializovaná péče pro sportovce, prevence zranění a návrat do formy.",
    link: "/",
    icon: "google",
  },
  {
    title: "Masáže",
    description:
      "Léčebné, relaxační a sportovní masáže pro uvolnění svalů a regeneraci.",
    link: "/",
    icon: "gitHub",
  },
  {
    title: "Cvičení na míru",
    description:
      "Individuální cvičební plány pro domácí péči a dlouhodobé zlepšení.",
    link: "/",
    icon: "laptop",
  },
  {
    title: "Online konzultace",
    description:
      "Možnost konzultace s terapeutem online, ideální pro kontrolní návštěvy.",
    link: "/",
    icon: "user",
  },
  {
    title: "Diagnostika",
    description:
      "Podrobné vyšetření pohybového aparátu a stanovení terapeutického plánu.",
    link: "/",
    icon: "copy",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "Jana Nová",
    job: "Atletka",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "Po zranění kolena jsem díky fyzioterapii mohla vrátit se zpět k tréninku. Individuální přístup a moderní metody mi opravdu pomohly. Online rezervace je super, nemusím nikam volat.",
  },
  {
    name: "Petr Svoboda",
    job: "Kancelářský pracovník",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "Trápily mě bolesti zad kvůli sezení u počítače. Po několika sezeních fyzioterapie a cvičení doma je to mnohem lepší. Určitě doporučuji!",
  },
  {
    name: "Martin Dvořák",
    job: "Fotbalista",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Sportovní fyzioterapie mi pomohla nejen s léčbou zranění, ale i s prevencí. Tým je profesionální a vždy ochotný poradit.",
  },
  {
    name: "Lucie Malá",
    job: "Učitelka",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "Skvělá péče, milé prostředí a flexibilní termíny. Konečně jsem našla fyzioterapeuty, kteří mi opravdu rozumí.",
  },
  {
    name: "Tomáš Novotný",
    job: "Programátor",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "Online konzultace jsou perfektní, když nemám čas dojíždět. Aplikace je jednoduchá a přehledná, vidím svůj pokrok.",
  },
  {
    name: "Karolína Veselá",
    job: "Maminká na rodičovské",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "Po porodu jsem měla potíže se zády. Fyzioterapie mi pomohla vrátit se do formy a cviky, které mi ukázali, dělám i doma. Jsem moc vděčná!",
  },
  {
    name: "David Černý",
    job: "Běžec",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "Díky pravidelným návštěvám a masážím jsem výrazně zlepšil svůj výkon a nemám už problémy s achillovkou. Top péče!",
  },
];
