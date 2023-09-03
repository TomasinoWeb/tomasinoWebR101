import styles from "./HoverableImage.module.scss";
import Image from "next/image";

interface HoverableImageProps {
  image: string;
  hoverColor: string;
  alt: string;
  active?: boolean;
  monotoneAlways?: boolean;
}

export function HoverableImage(props: HoverableImageProps) {
  return (
    <div className={styles.HoverableImage}>
      <div
        className={styles.overlay + " " + (props.active === true ? styles.selected : "")}
        style={{
          backgroundImage: `url("${props.image}")`,
          backgroundColor: props.hoverColor,
          filter: props.monotoneAlways === true ? "grayscale(0.7)" : undefined,
        }}
      />

      <div
        className={styles.base}
        style={{
          backgroundImage: `url("${props.image}")`,
          backgroundColor: "#acacac",
        }}
      />

      <Image src={props.image} alt={props.alt} width={500} height={500} className={styles.image} />
    </div>
  );
}

interface HoverableImageFadeProps {
  image: string;
  hoveredImage: string;
  alt: string;
  active?: boolean;
}

export function HoverableImageFade(props: HoverableImageFadeProps) {
  return (
    <div className={styles.HoverableImage}>
      <div
        className={styles.overlay + " " + (props.active === true ? styles.selected : "")}
        style={{ backgroundImage: `url("${props.hoveredImage}")` }}
      />

      <div className={styles.base} style={{ backgroundImage: `url("${props.image}")` }} />

      <Image src={props.image} alt={props.alt} width={500} height={500} className={styles.image} />
    </div>
  );
}
