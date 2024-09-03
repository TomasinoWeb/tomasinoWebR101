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

const useScroll = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  const handleScroll = () => {
    setData((last) => ({
      x: window.scrollX,
      y: window.scrollY,
      lastX: last.x,
      lastY: last.y,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
};

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

  const [navClassList, setNavClassList] = useState<string[]>([]);

  const scroll = useScroll();

  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      _classList.push(styles["nav-bar--hidden"]);
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // automatically close the mobile menu when the user navigates
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsOpened(false);
    });
  });

  if (type === "centered") {
    return (
      <header className={`${headerClass} ${styles.centered} ${navClassList.join(" ")}`}>
        <div className={styles.inner}>
          <NavbarLinks showApply={false} collapsed={false} />
        </div>
      </header>
    );
  } else {
    return (
      <header
        className={`${styles.isOpened ? styles.isOpened : ""} ${headerClass} ${styles.full} ${navClassList.join(" ")}`}
      >
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
