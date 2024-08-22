import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

interface NavbarProps {
  type: "centered" | "full";
  color: "white" | "transparent";
}

export default function Navbar(props: NavbarProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/about"> ABOUT </Link>
        <Link href="/r101"> R101 </Link>
        <Link href="/faq"> FAQ </Link>
        <Link href="/quiz"> QUIZ </Link>
        <Link href="/discord"> THE POOL </Link>
      </nav>
    </header>
  );
}
