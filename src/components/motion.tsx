"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  once = true,
}: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.15, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "ul" | "ol";
};

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  as = "div",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  if (reduce) {
    if (as === "ul") return <ul className={className}>{children}</ul>;
    if (as === "ol") return <ol className={className}>{children}</ol>;
    return <div className={className}>{children}</div>;
  }

  const shared = {
    className,
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, amount: 0.12, margin: "0px 0px -6% 0px" },
    variants,
  };

  if (as === "ul") return <motion.ul {...shared}>{children}</motion.ul>;
  if (as === "ol") return <motion.ol {...shared}>{children}</motion.ol>;
  return <motion.div {...shared}>{children}</motion.div>;
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "figure";
  y?: number;
};

export function StaggerItem({
  children,
  className,
  as = "div",
  y = 24,
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease },
    },
  };

  if (reduce) {
    if (as === "li") return <li className={className}>{children}</li>;
    if (as === "figure") return <figure className={className}>{children}</figure>;
    return <div className={className}>{children}</div>;
  }

  if (as === "li") {
    return (
      <motion.li className={className} variants={variants}>
        {children}
      </motion.li>
    );
  }

  if (as === "figure") {
    return (
      <motion.figure className={className} variants={variants}>
        {children}
      </motion.figure>
    );
  }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
