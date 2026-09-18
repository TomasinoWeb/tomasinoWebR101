"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Stairs.module.scss";

export const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacity = {
  initial: { opacity: 0.5 },
  enter: { opacity: 0 },
  exit: { opacity: 0.5 },
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const anim = (variants: any, custom: number | null = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className={styles.stairs}>
      <motion.div {...anim(opacity)} className={styles.transitionBackground} />
      <div className={styles.transitionContainer}>
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Layout;
