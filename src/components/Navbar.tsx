import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { icons } from "./Icons";

/**
 * Added Navbar Props
 *
 *
 */

interface NavbarProps {
  isNavTransparent: boolean;
  withLogo: boolean;
}

const Navbar = (props: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("SHOW MENU: " + showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const backgroundColor = props.isNavTransparent === false ? styles.white : styles.transparent;
  const withLogo = props.withLogo === true ? styles.withLogo : styles.hideLogo;

  return (
    <header className={`${styles.header} ${backgroundColor}`}>
      <div className={`${styles.container} ${withLogo}`}>
        <div className={`${styles.navWrapper}`}>
          <a href="" className={`${styles.navLogo}`}>
            STUDIO TOMWEB
          </a>
          <button type="button" className={`${styles.navToggle}`} onClick={toggleMenu}>
            <span className={`${styles.navMenu}`}>{icons.burgerMenu}</span>
            <span className={`${styles.navClose}`}>{icons.menuClose}</span>
          </button>
          <nav className={`${styles.primaryNav} ${showMenu ? styles.opened : ""}`}>
            <ul className={`${styles.navList}`}>
              <li className={`${styles.navItem}`}>
                <a href="" className={`${styles.navLink}`}>
                  ABOUT
                </a>
              </li>
              <li className={`${styles.navItem}`}>
                <a href="" className={`${styles.navLink}`}>
                  R101
                </a>
              </li>
              <li className={`${styles.navItem}`}>
                <a href="" className={`${styles.navLink}`}>
                  FAQ
                </a>
              </li>
              <li className={`${styles.navItem}`}>
                <a href="" className={`${styles.navLink}`}>
                  QUIZ
                </a>
              </li>
              <li className={`${styles.navItem}`}>
                <a href="" className={`${styles.navLink}`}>
                  THE POOL
                </a>
              </li>
              <li className={`${styles.navItem}`}>
                <a href="" className={`${styles.navButton}`}>
                  APPLY
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
