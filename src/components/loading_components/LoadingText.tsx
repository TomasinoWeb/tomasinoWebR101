import React from "react";
import styles from "./Loading.module.scss";

interface LoadingTextProps {
  progress?: number;
}

export const LoadingText: React.FC<LoadingTextProps> = ({ progress = 0 }) => {
  const roundedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  const getSubStatus = (pct: number) => {
    if (pct < 35) return "grabbing your stickers...";
    if (pct < 80) return "riding the wave up... ヽ(°〇°)ﾉ";
    return "almost at 100, hang tight...";
  };

  return (
    <div className={styles.statusReadoutContainer}>
      <div className={styles.percentReadout}>{roundedProgress}%</div>
      <div className={styles.statusCopyText}>{getSubStatus(roundedProgress)}</div>
    </div>
  );
};

export default LoadingText;

