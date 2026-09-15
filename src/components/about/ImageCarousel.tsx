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
  const [direction, setDirection] = useState(1);

  if (!images || images.length === 0) {
    return null;
  }

  const goTo = (next: number) => {
    const nextIndex = (next + images.length) % images.length;
    setDirection(next > index ? 1 : -1);
    setIndex(nextIndex);
  };

  const slideVariants = {
    enter: (slideDirection: number) => ({ x: `${slideDirection * 100}%`, opacity: 0.6 }),
    center: { x: 0, opacity: 1 },
    exit: (slideDirection: number) => ({ x: `${slideDirection * -100}%`, opacity: 0.6 }),
  };

  return (
    <div className={`${styles.carousel} ${variant === "fill" ? styles.fill : ""}`}>
      <div className={styles.frame}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`${images[index]}-${index}`}
            className={styles.slide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Image src={images[index]} alt={`${alt} ${index + 1}`} fill className={styles.image} sizes="100vw" />
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