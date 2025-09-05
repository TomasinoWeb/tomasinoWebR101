import styles from "./SpeechBubble.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";

type SpeechBubbleProps = {
  primaryText?: string;
  secondaryText?: React.ReactNode;
  snoopyImage?: StaticImageData;
};

const SpeechBubble = (props: SpeechBubbleProps) => {
  return (
    <div className={styles.speechBubble}>
      <section className={`${styles.bubble}`}>
        <SpeechBubbleInner />
        <SpeechBubbleInner primaryText={props.primaryText} secondaryText={props.secondaryText} />
        <SpeechBubbleInner />
        {props.snoopyImage && (
          <div className={styles.imageContainer}>
            <Image src={props.snoopyImage} alt={props.primaryText ?? "snoopy"} className={styles.cardImage} />
          </div>
        )}
      </section>
    </div>
  );
};

type InnerSpeechBubbleProps = {
  primaryText?: string;
  secondaryText?: React.ReactNode;
};

const SpeechBubbleInner = (props: InnerSpeechBubbleProps) => {
  return (
    <div className={styles.bubbleContainer}>
      <div className={`${styles.textContainer} ${styles.bubbleOval}`}>
        <h4 className={styles.primaryText}>{props.primaryText ? props.primaryText : ""}</h4>
        <p className={styles.secondaryText}>{props.secondaryText ? props.secondaryText : ""}</p>
      </div>
      <div className={`${styles.bubbleTail} ${styles.bubbleOval}`} />
      <div className={`${styles.bubbleExcess} ${styles.bubbleOval}`} />
    </div>
  );
};

export default SpeechBubble;
