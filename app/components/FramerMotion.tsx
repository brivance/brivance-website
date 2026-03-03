import { Transition, Variants, motion } from "framer-motion";

export const makeContainer = (opts?: {
  delay?: number;
  stagger?: number;
  delayChildren?: number;
}): Variants => {
  const {
    delay = 0,
    stagger = 0.08,
    delayChildren = 0.06,
  } = opts ?? {};

  return {
    hidden: {},
    show: {
      transition: {
        delay,               // optional container delay
        staggerChildren: stagger,
        delayChildren,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
};


export const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 18,
    transition: {
      opacity: { duration: 0.12, ease: "easeIn" },
      y: { duration: 0.28, ease: "easeIn" },
    },
  },
};

export function StaggerInView({
  className,
  children,
  amount = 0.25,
}: {
  className?: string;
  children: React.ReactNode;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={makeContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function UpItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

// MotionVariants.ts

const baseEase = [0.22, 1, 0.36, 1] as const;

export const panelInRight: {
  initial: "hidden";
  animate: "show";
  variants: Variants;
} = {
  initial: "hidden",
  animate: "show",
  variants: {
    hidden: { x: 40, opacity: 0 },
    show: { x: 0, opacity: 1 },
  },
};

export const panelInRightTransition: Transition = {
  duration: 0.7,
  ease: baseEase,
  delay: 0.15,
};

export const textInAfterRightPanel: {
  initial: "hidden";
  animate: "show";
  variants: Variants;
} = {
  initial: "hidden",
  animate: "show",
  variants: {
    hidden: { x: 20, opacity: 0 },
    show: { x: 0, opacity: 1 },
  },
};

export const textInAfterPanelTransition: Transition = {
  duration: 0.45,
  ease: "easeOut",
  delay: 0.35,
};


export const panelInFromLeftInView: {
  initial: "hidden";
  whileInView: "show";
  viewport: { once: true; amount: number };
  variants: Variants;
} = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
  variants: {
    hidden: { x: -40, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  },
};

/** Inner text for left panel: comes in after panel, from -x */
export const textInFromLeftAfterPanelInView: {
  variants: Variants;
} = {
  variants: {
    hidden: { x: -20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut", delay: 0.25 },
    },
  },
};
