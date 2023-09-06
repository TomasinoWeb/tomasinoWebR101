import ReactNode from "react";
import styles from "./Titles.module.scss";

interface TitleProps {
  title: string;
  color?: string;
  children: React.ReactNode;
}

export const Titles: React.FC<TitleProps> = ({ title, children, color }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <h1 className={styles.subTitle} style={{ color }}>
        {children}
      </h1>
    </div>
  );
};
