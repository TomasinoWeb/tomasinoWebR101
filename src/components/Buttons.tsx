import React, { useState } from "react";
import styles from "./Buttons.module.scss";

interface ButtonsProps {
  theme: string;
  text: string;
}

const Buttons = (props: ButtonsProps) => {
  const buttonClass = props.theme === "primary" ? styles.primary : styles.secondary;

  return (
    <div className={buttonClass}>
    <button className={`${styles.buttonFrame} ${buttonClass}`}>
      <h3 className={`${styles.buttonText}`}>{props.text}</h3>
    </button>
    </div>
    
  );
};

export default Buttons;
