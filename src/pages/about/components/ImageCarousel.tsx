import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  variant?: "square" | "fill";
}

export function ImageCarousel({ images, alt, variant = "square" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => setIndex((next + images.length) % images.length);

  return (
    <div className={`${styles.carousel} ${variant === "fill" ? styles.fill : ""}`}>
      <div className={styles.frame}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image src={images[index]} alt={`${alt} ${index + 1}`} fill className={styles.image} />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={() => goTo(index - 1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={() => goTo(index + 1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}