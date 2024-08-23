import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { icons } from "./Icons";

interface FooterProps {
  isFooterTransparent: boolean;
}

const Footer = (props: FooterProps) => {
  const theme = props.isFooterTransparent === false ? styles.white : styles.black;
  return (
    <footer className={`${theme} ${styles.footer}`}>
      <div className={styles.container}>
        <div className={`${theme}`}>
          <ul className={`${styles.footerLinks}`}>
            <li>
              <a href="">&copy; TomasinoWeb {new Date().getFullYear()}</a>
            </li>
            <li>
              <a href="">Departments</a>
            </li>
            <li>
              <a href="">Application Form</a>
            </li>
            <li>
              <a href="">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className={`${styles.socialIcons}`}>
            <li>
              <a href="">{icons.facebook}</a>
            </li>
            <li>
              <a href="">{icons.x}</a>
            </li>
            <li>
              <a href="">{icons.instagram}</a>
            </li>
            <li>
              <a href="">{icons.tiktok}</a>
            </li>
            <li>
              <a href="">{icons.youtube}</a>
            </li>
            <li>
              <a href="">{icons.web}</a>
            </li>
            <li>
              <a href="">{icons.dot}</a>
            </li>
            <li>
              <a href="">{icons.up}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
