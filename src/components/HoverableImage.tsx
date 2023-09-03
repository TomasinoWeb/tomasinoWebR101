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
    <div className={styles.HoverableImage} title={props.alt}>
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

      <Image src={props.image} alt={`${props.alt}'s Image`} width={500} height={500} className={styles.image} />
    </div>
  );
}
