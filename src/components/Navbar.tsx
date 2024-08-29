import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

interface NavbarProps {
  type: "centered" | "full";
  background_color: "white" | "transparent";
}

const NavbarLinks = (props: { showApply: boolean; collapsed: boolean }) => (
  <nav className={styles.nav + " " + (props.collapsed ? styles.collapsed : "")}>
    <Link href="/about"> ABOUT </Link>
    <Link href="/r101"> R101 </Link>
    <Link href="/faq"> FAQ </Link>
    <Link href="/quiz"> QUIZ </Link>
    <Link href="/discord"> THE POOL </Link>

    {props.showApply && (
      <Link href="/apply" className={styles.button}>
        APPLY
      </Link>
    )}
  </nav>
);

export default function Navbar({ background_color: color, type }: NavbarProps) {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const headerClass = styles.header + " " + (color === "white" ? styles.white_background : styles);

  // automatically close the mobile menu when the user navigates
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsOpened(false);
    });
  });

  if (type === "centered") {
    return (
      <header className={headerClass + " " + styles.centered}>
        <div className={styles.inner}>
          <NavbarLinks showApply={false} collapsed={false} />
        </div>
      </header>
    );
  } else {
    return (
      <header className={(isOpened ? styles.isOpened : "") + " " + headerClass + " " + styles.full}>
        <div className={styles.inner + " " + styles.jcsb}>
          <h1 className={styles.logo}>
            <Link href="/">STUDIO TOMWEB</Link>
          </h1>

          <div className={styles.right}>
            <div className={styles.desktop}>
              <NavbarLinks showApply collapsed={false} />
            </div>

            <div className={styles.mobile}>
              <FontAwesomeIcon icon={isOpened ? faTimes : faBars} onClick={toggle} />
            </div>
          </div>
        </div>

        <div className={styles.mobile}>{isOpened && <NavbarLinks showApply collapsed={true} />}</div>
      </header>
    );
  }
}
