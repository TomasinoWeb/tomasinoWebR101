import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  const goTo = (next: number) => {
    const nextIndex = Math.max(0, Math.min(images.length - 1, next));
    setIndex(nextIndex);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeOffset = info.offset.x;
    const swipeVelocity = info.velocity.x;
    const threshold = Math.min(currentWidth * 0.15, 60);

    if (swipeOffset < -threshold || swipeVelocity < -200) {
      if (index < images.length - 1) {
        setIndex(index + 1);
      }
    } else if (swipeOffset > threshold || swipeVelocity > 200) {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
  };

  const currentWidth = containerWidth || (containerRef.current?.offsetWidth ?? 0);

  return (
    <div className={`${styles.carousel} ${variant === "fill" ? styles.fill : ""}`}>
      <div className={styles.frame} ref={containerRef}>
        <motion.div
          className={styles.track}
          animate={{ x: -index * currentWidth }}
          transition={{ type: "tween", duration: 0.5, ease: [0.25, 1, 0.35, 1] }}
          drag={images.length > 1 ? "x" : false}
          dragConstraints={{
            left: -((images.length - 1) * currentWidth),
            right: 0,
          }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ touchAction: "pan-y", cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map((src, i) => (
            <div key={i} className={styles.slide}>
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                className={styles.image}
                sizes="100vw"
                draggable={false}
                priority={i === 0}
              />
            </div>
          ))}
        </motion.div>

        {images.length > 1 && (
          <>
            {index > 0 && (
              <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={() => goTo(index - 1)}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )}
            {index < images.length - 1 && (
              <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={() => goTo(index + 1)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )}
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