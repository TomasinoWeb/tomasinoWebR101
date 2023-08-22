import ReactNode from "react";
import styles from "./Titles.module.scss";

interface TitleProps {
  title: string;
  children: string;
}

export const Titles: React.FC<TitleProps> = ({title, children}) => {
  return (
    <h1 className={styles.mainTitle}>{title}
      <span className={styles.subTitle}>{children}</span>
    </h1>
  );
};
