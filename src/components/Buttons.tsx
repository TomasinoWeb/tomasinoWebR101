import React, { ReactNode } from "react";
import styles from "./buttons.module.scss";

interface ButtonProps {
  children: string;
}

export const Buttons: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.buttonContainer}>{children}</button>;
};
