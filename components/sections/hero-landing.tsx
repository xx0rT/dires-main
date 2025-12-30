"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
              "px-4",
            )}
          >
            <span className="mr-3">✨</span>
            Nově otevřeno v Praze
          </Link>
        </motion.div>

        <motion.h1
          className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Váš partner pro{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            zdravý pohyb
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Moderní fyzioterapie s individuálním přístupem. Pomůžeme vám s rehabilitací,
          bolestmi pohybového aparátu a sportovními úrazy. Online rezervace 24/7.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-2 md:space-x-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Zobrazit cenník</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href="/register"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "px-5",
            )}
          >
            <Icons.user className="mr-2 size-4" />
            <p>
              Rezervovat termín
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
