import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type CommonProps = {
  children: React.ReactNode;
  variant: "speech" | "pill" | "rectangle";
  className?: string;
  maxWidth?: boolean;
};

type ButtonElementProps = CommonProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement> | "submit" | "reset";
};

type LinkElementProps = CommonProps & {
  href: string;
};

type ButtonProps = ButtonElementProps | LinkElementProps;

export const Button = (props: ButtonProps) => {
  const classes = `
    ${styles.button} 
    ${styles[props.variant]} 
    ${props.className}
    ${props.maxWidth ? styles.maxWidth : ""}
  `;

  const content = (
    <>
      {props.children}
      {props.variant === "speech" && (
        <div className={styles.tail_wrapper}>
          <div className={styles.tail}>
            <div className={styles.inner_tail}>
              <p>.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if ("href" in props) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={typeof props.onClick === "function" ? props.onClick : undefined}
      type={typeof props.onClick === "string" ? props.onClick : "button"}
    >
      {content}
    </button>
  );
};
