import { motion } from "framer-motion";
import React from "react";

export const FadeIn = (props: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: "20px", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1, transition: { duration: 0.25, delay: 0.15 } }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};
