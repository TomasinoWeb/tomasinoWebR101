import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { useState } from "react";
import Logo from "./Logo";
import MenuBar from "../assets/icons/MenuBar";
import CloseButton from "../assets/icons/CloseButton";
import Image from "next/image";
import facebook from "../../public/static/facebook.svg";
import twitter from "../../public/static/twitter.svg";
import instagram from "../../public/static/instagram.svg";
import tiktok from "../../public/static/tiktok.svg";
import youtube from "../../public/static/youtube.svg";
import tomasinoweb from "../../public/static/tomasinoweb.svg";
import uparrow from "../../public/static/up-arrow.svg";

interface LayoutProps {
  children: ReactNode;
  departmentBackground?: string;
  textColor?: string;
  showFooter?: boolean;
}

export function Layout(props: LayoutProps) {
  return (
    <div className={styles.layoutContainer} style={{ backgroundColor: props.departmentBackground }}>
      <Header textColor={props.textColor} />
      <main className={styles.main}>{props.children}</main>
      {props.showFooter && <Footer />}
    </div>
  );
}

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Header(props: { textColor: any }) {
  const [visible, isVisible] = useState(false);

  function handleMenuClick() {
    isVisible(!visible);
  }
  return (
    <header className={visible ? styles.mobileNavbar : ""}>
      <nav className={styles.navbar}>
        <div className={styles.navbarTitles}>
          <a href="/">
            <Logo textColor={props.textColor} />
          </a>
          <div>
            <h3 className={styles.logo} style={{ color: props.textColor }}>
              GET YOUR TICKETS NOW
            </h3>
          </div>
        </div>
        <a>
          <MenuBar visible={visible} handleMenuClick={handleMenuClick} />
          <CloseButton visible={visible} handleMenuClick={handleMenuClick} />
        </a>

        <ul className={styles.links}>
          <li>
            <a className={styles.navbarLink} href="/about" style={{ color: props.textColor }}>
              ABOUT
            </a>
          </li>
          <li>
            <a className={styles.navbarLink} href="/r101" style={{ color: props.textColor }}>
              R101
            </a>
          </li>
          <li>
            <a className={styles.navbarLink} href="/faq" style={{ color: props.textColor }}>
              FAQ
            </a>
          </li>
          <li>
            <a
              className={styles.navbarLink}
              href="https://discord.gg/BHtvRaRr"
              target="_blank"
              style={{ color: props.textColor }}
            >
              THE POOL
            </a>
          </li>
        </ul>
      </nav>

      {visible && (
        <ul className={styles.menu}>
          <li>
            <h3 className={styles.menuLogo} style={{ color: props.textColor }}>
              GET YOUR TICKETS NOW
            </h3>
          </li>
          <li>
            <a className={styles.menuLink} href="/about" style={{ color: props.textColor }}>
              ABOUT
            </a>
          </li>
          <li>
            <a className={styles.menuLink} href="/r101" style={{ color: props.textColor }}>
              R101
            </a>
          </li>
          <li>
            <a className={styles.menuLink} href="/faq" style={{ color: props.textColor }}>
              FAQ
            </a>
          </li>
          <li>
            <a
              className={styles.menuLink}
              href="https://discord.gg/BHtvRaRr"
              target="_blank"
              style={{ color: props.textColor }}
            >
              THE POOL
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerlinks}>
        <li>
          <a className={styles.footerLink} href="/">
            © TomasinoWeb
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="/about/departments">
            Departments
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="">
            Application Form
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="/faq">
            Frequently Asked Questions
          </a>
        </li>
      </ul>
      <ul className={styles.svgLinks}>
        <li>
          <a href="https://www.facebook.com/TomasinoWeb" target="_blank">
            <Image src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/TomasinoWeb" target="_blank">
            <Image src={twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tomasinoweb/" target="_blank">
            <Image src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@tomasinoweb" target="_blank">
            <Image src={tiktok} alt="Tiktok" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@tomasinoweb" target="_blank">
            <Image src={youtube} alt="Youtube" />
          </a>
        </li>
        <li>
          <a href="https://tomasinoweb.org" target="_blank">
            <Image src={tomasinoweb} alt="TomasinoWeb" />
          </a>
        </li>
        <li className={styles.backToTop}>
          <a onClick={goToTop}>
            <Image src={uparrow} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
