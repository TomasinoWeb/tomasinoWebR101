import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p>(c) TomasinoWeb 2025</p>
          <Link href="/about/departments">Departments</Link>
          <Link href="/apply">Application Form</Link>
          <Link href="/faq">FREQUENTLY ASKED QUESTIONS</Link>
        </div>

        <div className={styles.right}>
          <Link href="https://facebook.com/tomasinoweb" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link href="https://twit1ter.com/tomasinoweb" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>

          <Link href="https://instagram.com/tomasinoweb" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link href="https://tiktok.com/@tomasinoweb" target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
          </Link>

          <Link href="https://youtube.com/tomasinoweb" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>

          <Link href="https://tomasinoweb.org" target="_blank">
            <FontAwesomeIcon icon={faGlobe} />
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
