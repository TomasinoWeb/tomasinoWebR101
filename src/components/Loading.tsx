import React, { useState, useEffect } from "react";
import styles from "./loading_components/Loading.module.scss";
import StickerFeed from "./loading_components/StickerFeed";
import LoadingSticker from "./loading_components/LoadingSticker";
import LoadingText from "./loading_components/LoadingText";

interface LoadingProps {
  progress?: number;
  onComplete?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ progress: externalProgress, onComplete }) => {
  const [internalProgress, setInternalProgress] = useState(0);

  const currentProgress = externalProgress !== undefined ? externalProgress : internalProgress;

  useEffect(() => {
    if (externalProgress !== undefined) return;

    const interval = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) onComplete();
          return 100;
        }
        // Smoothly approach 100%
        const increment = Math.max(1, Math.floor((100 - prev) * 0.08));
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [externalProgress, onComplete]);

  return (
    <div className={styles.container}>
      <StickerFeed />
      <div className={styles.centerContent}>
        <LoadingSticker progress={currentProgress} />
        <LoadingText progress={currentProgress} />
      </div>
    </div>
  );
};

export default Loading;

