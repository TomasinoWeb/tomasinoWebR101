import Image from "next/image";
import { websites } from "../../../data/websites";
import styles from "./OurImpactSection.module.scss";

const stats = [
  { label: "Events", value: "29", description: "covered this academic year", color: "#d9a441" },
  { label: "Facebook", value: "81", description: "K followers", color: "#3a6ea5" },
];

const secondaryStats = [
  { label: "Twitter", value: "154K", description: "impressions this year", color: "#3aaa9a" },
  { label: "Youtube", value: "24+", description: "productions launched", color: "#e0533d" },
  { label: "Discord", value: "270+", description: "active members", color: "#728cc7" },
];

export function OurImpactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Our Impact</h2>
        <p>A look at where we&apos;ve been and what we&apos;ve accomplished together</p>
      </div>

      <div className={styles.grid}>
        {stats.map((stat) => (
          <div className={styles.card} key={stat.label}>
            <div className={styles.tag} style={{ background: stat.color }}>
              {stat.label}
            </div>
            <div className={styles.body}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.description}>{stat.description}</span>
            </div>
          </div>
        ))}

        <div className={styles.card}>
          <div className={styles.tag} style={{ background: "#5a9e5a" }}>
            Websites
          </div>
          <div className={styles.body}>
            <div className={styles.websiteIcons}>
              {websites.map((site) => (
                <Image key={site.name} src={site.icon} alt={site.name} width={28} height={28} />
              ))}
            </div>
            <span className={styles.value}>{websites.length}</span>
          </div>
        </div>

        {secondaryStats.map((stat) => (
          <div className={styles.card} key={stat.label}>
            <div className={styles.tag} style={{ background: stat.color }}>
              {stat.label}
            </div>
            <div className={styles.body}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.description}>{stat.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
