import Image from "next/image";
import { Oswald } from "next/font/google";
import { websites } from "../../../data/websites";
import styles from "./OurImpactSection.module.scss";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"], variable: "--font-oswald" });

const stats = [
  { label: "Events", value: "29", description: "Academic Events", color: "#E5800D", linkLabel: "Events Organized", linkHref: "#", useCssBackground: true },
  { label: "Facebook", value: "81", description: "Followers", color: "#3B6BC7", linkLabel: "Visit FB Page", linkHref: "#", useCssBackground: true },
];

const secondaryStats = [
  { label: "Twitter", value: "154K", description: "Impressions ", color: "#1CA1F2", linkLabel: "@tomasinoweb", linkHref: "#", useCssBackground: true },
  { label: "Youtube", value: "24+", description: "Videos Uploaded", color: "#DB1A1A", linkLabel: "Watch on YouTube", linkHref: "#", useCssBackground: true },
  { label: "Discord", value: "270+", description: "active members", color: "#5947D1", linkLabel: "Join The Pool", linkHref: "#", useCssBackground: true },
];

export function OurImpactSection() {
  return (
    <>
      <div className={`${styles.grid} ${oswald.variable}`}>
        {stats.map((stat) => (
          <div className={styles.card} style={{ borderColor: stat.color }} key={stat.label}>
            <div className={styles.tag} style={stat.useCssBackground ? undefined : { background: stat.color }}>
              {stat.label}
            </div>
            <div className={styles.body}>
              <div className={styles.content}>
                <span className={styles.value} style={{ color: stat.color }}>{stat.value}</span>
                <span className={styles.description}>{stat.description}</span>
              </div>
            </div>
            <div className={styles.footer}>
              <a href={stat.linkHref} className={styles.link} style={{ color: stat.color }}>
                {stat.linkLabel}
              </a>
            </div>
          </div>
        ))}

        <div className={styles.card} style={{ borderColor: "#5a9e5a" }}>
          <div className={styles.tag}>
            Websites
          </div>

          {/* Desktop layout — untouched */}
          <div className={styles.websiteBody}>
            <div className={styles.websiteIcons}>
              {websites.map((site) => (
                <a
                  key={site.name}
                  href={site.href}
                  target={site.href.startsWith("http") ? "_blank" : undefined}
                  rel={site.href.startsWith("http") ? "noreferrer" : undefined}
                  className={styles.websiteIcon}
                >
                  <Image src={site.icon} alt={site.name} width={140} height={130} />
                </a>
              ))}
            </div>
            <div className={styles.valueGroup}>
              <span className={styles.value} style={{color: "#2E9E2E"}}>{websites.length}</span>
              <span className={styles.description}>Developments</span>
            </div>
          </div>

          {/* Mobile layout — first 2 icons sit beside the count, remaining 4 wrap below */}
          <div className={styles.websiteBodyMobile}>
            <div className={styles.websiteIconsRowMobile}>
              <div className={styles.websiteIconsFirstTwo}>
                {websites.slice(0, 2).map((site) => (
                  <a
                    key={site.name}
                    href={site.href}
                    target={site.href.startsWith("http") ? "_blank" : undefined}
                    rel={site.href.startsWith("http") ? "noreferrer" : undefined}
                    className={styles.websiteIcon}
                  >
                    <Image src={site.icon} alt={site.name} width={70} height={70} />
                  </a>
                ))}
              </div>
              <div className={styles.valueGroup}>
                <span className={styles.value} style={{color: "#2E9E2E"}}>{websites.length}</span>
                <span className={styles.description}>Developments</span>
              </div>
            </div>
            <div className={styles.websiteIconsRest}>
              {websites.slice(2).map((site) => (
                <a
                  key={site.name}
                  href={site.href}
                  target={site.href.startsWith("http") ? "_blank" : undefined}
                  rel={site.href.startsWith("http") ? "noreferrer" : undefined}
                  className={styles.websiteIcon}
                >
                  <Image src={site.icon} alt={site.name} width={60} height={60} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footer}>
            <a href="#" className={styles.link} style={{ color: "#5a9e5a" }}>
              Visit
            </a>
          </div>
        </div>

        {secondaryStats.map((stat) => (
          <div className={styles.card} style={{ borderColor: stat.color }} key={stat.label}>
            <div className={styles.tag} style={stat.useCssBackground ? undefined : { background: stat.color }}>
              {stat.label}
            </div>
            <div className={styles.body}>
              <div className={styles.content} style={{ color: stat.color }}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.description}>{stat.description}</span>
              </div>
            </div>
            <div className={styles.footer}>
              <a href={stat.linkHref} className={styles.link} style={{ color: stat.color }}>
                {stat.linkLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
