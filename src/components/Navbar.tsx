import _Link from "next/link";
import styles from "./Navbar.module.scss";
import YellowInsignia from "../../public/logo/insignia_yellow.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, 
  faClose, 
  faHome, 
  faUser, 
  faClipboardList, 
  faQuestionCircle, 
  faCheckSquare, 
  faBriefcase, 
  faChevronRight 
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Navbar = (props: { containsApply: boolean; containsResults: boolean }) => {
  const Link = (props: { href: string; children: string; special?: boolean }) => {
    return (
      <_Link href={props.href} className={props.special ? styles.special : ""}>
        {props.children}
      </_Link>
    );
  };

  return (
    <div className={styles.nav}>
      <Link href="/about" children="ABOUT" />
      <Link href="/r101" children="R101" />
      <Link href="/faqs" children="FAQS" />
      <Link href="/quiz" children="QUIZ" />
      {props.containsResults && <Link href="/results" children="RESULTS" />}
      <Link href="/discord" children="THE POOL" />
      {props.containsApply && <Link href="/apply" children="APPLY NOW" special />}
    </div>
  );
};

export function MobileNavbar({ variant }: { variant: "mini" | "full" }) {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();

  // automatically close the mobile menu when the user navigates
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsOpened(false);
    });
  }, []);

  const menuItems = [
    { href: "/", label: "HOME", icon: faHome },
    { href: "/about", label: "ABOUT", icon: faUser },
    { href: "/r101", label: "R101", icon: faClipboardList },
    { href: "/faqs", label: "FAQS", icon: faQuestionCircle },
    { href: "/results", label: "RESULTS", icon: faCheckSquare },
    { href: "/apply", label: "APPLY NOW", icon: faBriefcase },
  ];

  return (
    <div className={styles.mobileNavContainer}>
      {/* Header bar (always visible on mobile) */}
      <div className={styles.headerBar}>
        <span className={styles.logoText}>TomasinoWeb</span>
        <button className={styles.hamburgerBtn} onClick={() => setIsOpened(true)} aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Hamburger menu modal popup drawer */}
      {isOpened && (
        <div className={styles.menuOverlay}>
          <div className={styles.popupWrapper}>
            {/* Modal Header */}
            <div className={styles.popupHeader}>
              <span className={styles.logoText}>TomasinoWeb</span>
              <button className={styles.closeBtn} onClick={() => setIsOpened(false)} aria-label="Close menu">
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>

            {/* Links List */}
            <div className={styles.menuLinksList}>
              {menuItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <_Link 
                    key={item.href}
                    href={item.href} 
                    className={`${styles.menuLinkItem} ${isActive ? styles.activeLinkItem : ""}`}
                  >
                    <div className={styles.linkLeft}>
                      <FontAwesomeIcon icon={item.icon} className={styles.linkIcon} />
                      <span className={styles.linkLabel}>{item.label}</span>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon} />
                  </_Link>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className={styles.popupFooter}>
              <span>© 2026 TomasinoWeb</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
