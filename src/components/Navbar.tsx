import _Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export const Navbar = (props: { containsApply: boolean }) => {
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
      <Link href="/discord" children="THE POOL" />
      {props.containsApply && <Link href="/apply" children="APPLY NOW" special />}
    </div>
  );
};

export function MobileNavbar({ variant, useLogo = false }: { variant: "mini" | "full"; useLogo?: boolean }) {
  const logo = useLogo ? (
    <Image
      className={styles.headerLogo}
      src="/logo/logo_white.png"
      alt="TomasinoWeb"
      width={124}
      height={28}
      priority
    />
  ) : null;

  const brand = useLogo ? (
    <_Link href="/" className={styles.logoLink} aria-label="Go to the landing page">
      {logo}
    </_Link>
  ) : (
    <span className={styles.logoText}>TomasinoWeb</span>
  );

  return (
    <div className={styles.mobileNavContainer}>
      <div className={styles.headerBar}>
        {brand}
      </div>
    </div>
  );
}
