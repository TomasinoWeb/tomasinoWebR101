import React, { useState } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faInstagramSquare,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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

          <Link href="https://twitter.com/tomasinoweb">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>

          <Link href="https://instagram.com/tomasinoweb">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link href="https://youtube.com/tomasinoweb">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>

          <Link href="https://tiktok.com/@tomasinoweb">
            <FontAwesomeIcon icon={faTiktok} />
          </Link>

          <p>⋅</p>

          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
}
