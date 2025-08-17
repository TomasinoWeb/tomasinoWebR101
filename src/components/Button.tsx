import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type CommonProps = {
  children: React.ReactNode;
  variant?: "speech" | "pill" | "rectangle";
  size?: "large" | "small";
  className?: string;
};

type ButtonElementProps = CommonProps & {
  href?: never;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
};

type LinkElementProps = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonProps = ButtonElementProps | LinkElementProps;

export const Button = ({
  children,
  variant = "rectangle",
  size = "large",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const classes = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${className}
  `;

  const content = (
    <>
      {children}
      {variant === "speech" && (
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

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {content}
    </button>
  );
};
