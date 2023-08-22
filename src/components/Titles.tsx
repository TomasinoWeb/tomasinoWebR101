import ReactNode from "react";
import styles from "./titles.module.scss";

interface TitleProps {
  title: string;
  children: string;
}

export const Titles: React.FC<TitleProps> = ({ title, children }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <h1 className={styles.subTitle}>{children}</h1>
    </div>
  );
};
