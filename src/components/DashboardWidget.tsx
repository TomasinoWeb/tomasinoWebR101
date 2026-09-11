import React from "react";
import styles from "./DashboardWidget.module.scss";

interface DashboardWidgetProps {
  title?: string;
  aspectRatio?: "square" | "rectangle";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  title,
  aspectRatio = "square",
  children,
  className = "",
  onClick,
}) => {
  return (
    <div className={`${styles.widgetWrapper} ${className}`}>
      <div
        className={`${styles.card} ${styles[aspectRatio]} ${onClick ? styles.clickable : ""}`}
        onClick={onClick}
        onKeyDown={(event) => {
          if (onClick && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            onClick();
          }
        }}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <div className={styles.contentContainer}>
          {children}
        </div>
      </div>
      {title && <span className={styles.caption}>{title}</span>}
    </div>
  );
};
