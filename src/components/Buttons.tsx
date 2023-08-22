import React, { ReactNode } from 'react';
import styles from "./buttons.module.scss";

interface ButtonProps {
  text: string;
  children: string;
}

export const Buttons: React.FC<ButtonProps> = ({ text, children }) => {
  return (
    <button className={styles.buttonContainer}>
			{text}
      {children}
    </button>
  );
};
