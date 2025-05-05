"use client";

import clsx from "clsx";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";
import { Calendar } from "@heroui/calendar";
import { Code } from "@heroui/code";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

// Combine both words into one array (this includes the space)
const fullTitle = "Make GORGEOUS".split("");
const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex justify-center flex-wrap">
          {fullTitle.map((letter, idx) =>
            letter === " " ? (
              // Static space (no animation)
              <span key={idx} className={title()}>
                &nbsp;
              </span>
            ) : (
              // Animated letters
              <motion.span
                key={idx}
                className={title()}
                animate={{
                  color: colors,
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2,
                  ease: "easeInOut",
                  delay: idx * 0.1,
                }}
              >
                {letter}
              </motion.span>
            )
          )}
        </div>

        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
        <Calendar />
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>

      
    </section>
  );
}
