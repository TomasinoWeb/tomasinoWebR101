"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "./Stairs.module.scss";

let previousTopLevelRoute: string | null = null;

const getTopLevelRoute = (path: string) => {
  if (path.startsWith("/about")) return "/about";
  return path;
};

const slideFadeVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 1, 0.35, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.2,
      ease: [0.25, 1, 0.35, 1],
    },
  },
};

const staticVariants = {
  initial: { opacity: 1, x: 0 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: 0 },
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const currentTopLevel = getTopLevelRoute(router.pathname);

  // Check if we navigated within the same top-level section (e.g. /about -> /about/departments)
  const isSameSection = previousTopLevelRoute !== null && previousTopLevelRoute === currentTopLevel;
  const shouldSkipAnimation = useRef(isSameSection);

  useEffect(() => {
    previousTopLevelRoute = currentTopLevel;
  }, [currentTopLevel]);

  return (
    <motion.div
      className={styles.pageTransition}
      variants={shouldSkipAnimation.current ? staticVariants : slideFadeVariants}
      initial={shouldSkipAnimation.current ? false : "initial"}
      animate="enter"
      exit={shouldSkipAnimation.current ? undefined : "exit"}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
