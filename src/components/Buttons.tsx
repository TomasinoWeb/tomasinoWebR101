import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./Buttons.module.scss";

interface ButtonProps {
  href: string;
  children: string;
  maxWidth?: boolean;
}

export const Buttons: React.FC<ButtonProps> = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      className={styles.anchor}
      style={{
        width: props.maxWidth === true ? "100%" : "unset",
        height: props.maxWidth === true ? "100%" : "unset",
      }}
    >
      <button
        className={styles.buttonContainer}
        style={{
          width: props.maxWidth === true ? "100%" : "unset",
          height: props.maxWidth === true ? "100%" : "unset",
        }}
      >
        {children}
      </button>
    </a>
  );
};

export const ButtonOnClick: React.FC<{
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  maxWidth?: boolean;
}> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={styles.buttonContainer}
      style={{ width: props.maxWidth === true ? "100%" : "unset", height: props.maxWidth === true ? "100%" : "unset" }}
    >
      {props.children}
    </button>
  );
};
