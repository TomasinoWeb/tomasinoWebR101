import React, { MouseEventHandler, useState } from "react";
import styles from "./Buttons.module.scss";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  maxWidth?: boolean;
} & ({ onClick: MouseEventHandler<HTMLButtonElement> | "submit" | "reset" } | { href: string }) &
  ({ theme: "black_n_white"; outline?: "small" | "large" } | { theme: "glass" });

/**
 * A Button component that supports both links and button
 *
 * ---
 * **Using links vs buttons**
 *
 * To use as a link: Pass the href prop with the link to redict to
 *
 * To use as a button: Pass the onClick handler the function to call when clicked, or "reset" | "submit" when used in a form
 *
 * ---
 * **Variants**
 *
 * To use glassy type: Pass "glass" into the theme prop
 *
 * To use black and white button: Pass "black_n_white" into the theme prop.
 *
 * To use small variant of BnW button: Pass "small" as outline prop
 * @returns A button component
 */
export const Button = (props: ButtonProps) => {
  const className =
    styles[props.theme] +
    " " +
    (props.theme === "black_n_white" ? styles[props.outline ?? "large"] : "") +
    " " +
    styles.button +
    " " +
    (props.maxWidth ? styles.maxWidth : "");

  if ("href" in props)
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );

  return (
    <button
      onClick={typeof props.onClick === "function" ? props.onClick : undefined}
      type={typeof props.onClick === "function" ? "button" : props.onClick}
      className={className}
    >
      {props.children}
    </button>
  );
};
