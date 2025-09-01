import _Link from "next/link";
import styles from "./Navbar.module.scss";
import YellowInsignia from "../../public/logo/insignia_yellow.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
      <Link href="/results" children="RESULTS" />
      <Link href="/discord" children="THE POOL" />
      {props.containsApply && <Link href="/apply" children="APPLY NOW" special />}
    </div>
  );
};

export function MobileNavbar({ variant }: { variant: "mini" | "full" }) {
  const [isOpened, setIsOpened] = useState(false);
  const Link = (props: { href: string; children: string; special?: boolean }) => {
    return (
      <_Link href={props.href} className={props.special ? styles.special : ""}>
        {props.children}
      </_Link>
    );
  };

  return (
    <div className={styles.mobile}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Image src={YellowInsignia} alt="Yellow insignia" width={100} height={100} className={styles.tomwebLogo} />
        </div>

        <div className={styles.right}>
          <FontAwesomeIcon icon={isOpened ? faClose : faBars} onClick={() => setIsOpened(!isOpened)} />
        </div>
      </div>

      <div className={styles.bottom + " " + (isOpened ? styles.opened : "")}>
        <div className={styles.links}>
          <Link href="/about" children="ABOUT" />
          <Link href="/r101" children="R101" />
          <Link href="/faqs" children="FAQS" />
          <Link href="/quiz" children="QUIZ" />
          <Link href="/results" children="RESULTS" />
          <Link href="/discord" children="THE POOL" />
          <Link href="/apply" children="APPLY NOW" special />
        </div>
      </div>
    </div>
  );
}
