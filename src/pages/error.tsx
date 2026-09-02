import React from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import { createPublicPage } from "../layouts/public/frontend";
import styles from "../components/error_components/error.module.scss";
import { createPublicStaticProps } from "../layouts/public/static";
import TomWegg from "../../public/assets/tomweggs/Idk.png";
import SpeechBubble from "./about/components/SpeechBubble";
import Window from "../components/error_components/Window";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export default createPublicPage<Props>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "disabled",
    children: (
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            <Window />
            <div className={styles.buttonGroup}>
              <Link href="/">
                <button className={`${styles.button} ${styles.homeButton}`}>
                  <FontAwesomeIcon icon={faHouse} className={styles.buttonIcon} />
                  <span>Back to Home</span>
                </button>
              </Link>
              <Link href="/about">
                <button className={`${styles.button} ${styles.aboutButton}`}>
                  <FontAwesomeIcon icon={faUser} className={styles.buttonIcon} />
                  <span>About Tomasinoweb</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    ),
  };
});

export const getStaticProps = createPublicStaticProps<{}>({});
