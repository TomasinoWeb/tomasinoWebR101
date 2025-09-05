import styles from "./SpeechBubble.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";

type SpeechBubbleProps = {
  primaryText: string;
  secondaryText?: string;
  snoopyImage: StaticImageData;
};

const SpeechBubble = (props: SpeechBubbleProps) => {
  return (
    <div className={styles.speechBubble}>
      <section className={`${styles.bubble}`}>
        <SpeechBubbleInner />
        <SpeechBubbleInner primaryText={props.primaryText} secondaryText={props.secondaryText} />
        <SpeechBubbleInner />
        <div className={styles.imageContainer}>
          <Image src={props.snoopyImage} alt={props.primaryText} className={styles.cardImage} />
        </div>
      </section>
    </div>
  );
};

type InnerSpeechBubbleProps = {
  primaryText?: string;
  secondaryText?: string;
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
