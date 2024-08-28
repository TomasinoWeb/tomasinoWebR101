import Link from "next/link";
import styles from "./AboutBox.module.scss";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface aboutProps {
  icon: StaticImport;
  image: StaticImport;
  title: string;
  linkURL: string;
}

export default function AboutBox(props: aboutProps) {
  return (
    <Link href={props.linkURL} className={styles.container}>
      <span className={styles.titleContainer}>
        <div className={`${styles.imageContainer} ${styles.icon}`}>
          <Image
            alt="icon"
            src={props.icon}
            width={50} // Default width if not provided
            height={50} // Default height if not provided
          />
        </div>

        <strong className={styles.title}>{props.title.toUpperCase()}</strong>
        <FontAwesomeIcon icon={faArrowRight} />
      </span>

      <div className={`${styles.imageContainer} ${styles.primary}`}>
        <Image alt={props.title} src={props.image} width={500} height={200} />
      </div>
    </Link>
  );
}
