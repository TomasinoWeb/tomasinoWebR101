import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./TestimonialCard.module.scss";

interface TestimonialCardProps {
  name: string;
  position: string;
  quote: string;
  image: StaticImageData;
  department?: string;
  featured?: boolean;
}

export function TestimonialCard({ name, position, quote, image, department, featured }: TestimonialCardProps) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {department && <div className={styles.departmentTag}>{department}</div>}

      <div className={styles.photo}>
        <Image src={image} alt={name} fill className={styles.image} />
      </div>

      <div className={styles.body}>
        <span className={styles.name}>{name}</span>
        <span className={styles.position}>{position}</span>
        <p className={styles.quote}>&quot;{quote}&quot;</p>
      </div>
    </div>
  );
}
