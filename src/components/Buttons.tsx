import React, { ReactNode } from "react";
import styles from "./Buttons.module.scss";

interface ButtonProps {
  href: string;
  children: string;
}

export const Buttons: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <a href={href}>
      <button className={styles.buttonContainer}>{children}</button>
    </a>
  );
};
