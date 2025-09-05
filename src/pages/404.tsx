import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import styles from "./404.module.scss";
import { PublicLayoutBackend } from "../layouts/public/static";
import Snoopy from "../../public/assets/404/snoopy.png";
import SpeechBubble from "./about/components/SpeechBubble";

interface Props {}

export default PublicLayoutFrontend.use<Props>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",
    children: (
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            <SpeechBubble
              secondaryText={
                <>
                  LOOKS LIKE YOU'RE LOST.
                  <br />
                  THE PAGE YOU WERE LOOKING FOR IS NOT AVAILABLE.
                </>
              }
            />
            <div className={styles.errorCode}>
              <span className={styles.four}>4</span>
              <div className={styles.zeroContainer}>
                <span className={styles.zero}>0</span>
                <Image src={Snoopy} alt="Snoopy" className={styles.snoopyImage} />
              </div>
              <span className={styles.four}>4</span>
            </div>

            <div className={styles.buttonContainer}>
              <Button variant="rectangle" href="/" className={styles.button404} maxWidth>
                BACK TO HOME
              </Button>
              <Button variant="rectangle" href="/r101" className={styles.button404} maxWidth>
                ABOUT TOMASINOWEB
              </Button>
            </div>
          </div>
        </div>
      </>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<{}>({});
