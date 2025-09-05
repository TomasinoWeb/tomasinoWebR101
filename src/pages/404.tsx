import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import styles from "./404.module.scss";
import { PublicLayoutBackend } from "../layouts/public/static";

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
            <div className={styles.speechBubbleContainer}>
              <div className={styles.speechBubbleStack}>
                <Image
                  src="/assets/404/speech-bubble.png"
                  alt=""
                  width={308}
                  height={308}
                  className={`${styles.speechBubble} ${styles.speechBubble1}`}
                />
                <Image
                  src="/assets/404/speech-bubble.png"
                  alt=""
                  width={308}
                  height={308}
                  className={`${styles.speechBubble} ${styles.speechBubble2}`}
                />
                <Image
                  src="/assets/404/speech-bubble.png"
                  alt=""
                  width={308}
                  height={308}
                  className={`${styles.speechBubble} ${styles.speechBubble3}`}
                />
              </div>
              <p className={styles.speechText}>
                LOOKS LIKE YOU'RE LOST. THE PAGE YOU ARE LOOKING FOR IS NOT AVAILABLE.
              </p>
            </div>

            <div className={styles.errorCode}>
              <span className={styles.four}>4</span>
              <div className={styles.zeroContainer}>
                <span className={styles.zero}>0</span>
                <Image
                  src="/assets/404/snoopy.png"
                  alt="Snoopy"
                  width={80}
                  height={80}
                  className={styles.snoopyImage}
                />
              </div>
              <span className={styles.four}>4</span>
            </div>

            <div className={styles.buttonContainer}>
              <Button variant="rectangle" href="/" className={styles.button404}>
                BACK TO HOME
              </Button>
              <Button variant="rectangle" href="/r101" className={styles.button404}>
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
