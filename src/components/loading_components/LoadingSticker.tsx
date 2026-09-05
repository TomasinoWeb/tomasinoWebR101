import React from "react";
import Image from "next/image";
import styles from "./Loading.module.scss";
import loadingMascot from "../../../public/assets/py18/loading/loading_icon.png";

interface LoadingStickerProps {
  progress?: number;
}

export const LoadingSticker: React.FC<LoadingStickerProps> = ({ progress = 0 }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={styles.stickerContainer}>
      <div className={styles.mascotWrapper}>
        <div className={styles.waveFill} style={{ height: `${clampedProgress}%` }}>
          {/* Back wave layer for depth & motion */}
          <svg className={`${styles.waveSvg} ${styles.waveBack}`} viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M 0,40 C 150,100 350,-20 500,40 C 650,100 850,-20 1000,40 L 1000,100 L 0,100 Z"
              fill="#FFA4BC"
            />
          </svg>
          {/* Front wave layer */}
          <svg className={styles.waveSvg} viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M 0,50 C 150,115 350,-15 500,50 C 650,115 850,-15 1000,50 L 1000,100 L 0,100 Z"
              fill="#FF2761"
            />
          </svg>
        </div>
        <Image
          src={loadingMascot}
          alt="TomasinoWegg Loading Mascot"
        />
        {/* <span className={styles.percentageText}>
          Loading 
          <div>{Math.round(clampedProgress)}%</div>
        </span> */}
      </div>
    </div>
  );
};

export default LoadingSticker;

