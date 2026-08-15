import React from "react";
import styles from "./DashboardWidget.module.scss";

interface DashboardWidgetProps {
  title?: string;
  aspectRatio?: "square" | "rectangle";
  children?: React.ReactNode;
  className?: string;
}

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  title,
  aspectRatio = "square",
  children,
  className = "",
}) => {
  return (
    <div className={`${styles.widgetWrapper} ${className}`}>
      <div className={`${styles.card} ${styles[aspectRatio]}`}>
        <div className={styles.contentContainer}>
          {children}
        </div>
      </div>
      {title && <span className={styles.caption}>{title}</span>}
    </div>
  );
};
