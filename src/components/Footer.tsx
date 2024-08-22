import React, { useState } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p>© TomasinoWeb 2024</p>
          <Link href="/about/departments">Departments</Link>
          <Link href="/apply">Application Form</Link>
          <Link href="/faq">Frequently Asked Questions</Link>
        </div>

        <div className={styles.right}>
          <Link href="https://facebook.com/tomasinoweb">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
