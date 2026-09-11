import React from "react";
import styles from "./Loading.module.scss";

interface LoadingTextProps {
  progress?: number;
  variant?: "default" | "application";
}

export const LoadingText: React.FC<LoadingTextProps> = ({ progress = 0, variant = "default" }) => {
  const roundedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  const getSubStatus = (pct: number) => {
    if (variant === "application") {
      if (pct < 35) return "preparing your application...";
      if (pct < 80) return "opening the application form...";
      return "your form is almost ready◝(ᵔᗜᵔ)◜";
    }

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

