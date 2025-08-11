import _Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = (props: { containsApply: boolean }) => {
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
      <Link href="/results" children="RESULTS" />
      <Link href="/discord" children="THE POOL" />
      {props.containsApply && <Link href="/apply" children="APPLY NOW" special />}
    </div>
  );
};

export default Navbar;
