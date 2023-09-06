import { ReactNode } from "react";
import styles from "./CultureStats.module.scss";

import { Statistics } from "../../../public/assets/data/statistics";
import Image from "next/image";

interface CultureStatsProps {
  statistics: Statistics;
  // children: string;
}
export const CultureStats: React.FC<CultureStatsProps> = ({
  statistics
}) => {
  return (
    <div className={`${styles.stats_children2} ${styles.margin_left}`}>
    <h1 className={styles.header_text}>{statistics.stats}</h1>
    <p className={styles.p_text}>{statistics.content}</p>
    {/* stats_details2 */}
  </div>
  );
};
