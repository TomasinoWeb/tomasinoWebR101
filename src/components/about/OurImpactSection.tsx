import Image from "next/image";
import { websites } from "../../data/websites";
import styles from "./OurImpactSection.module.scss";

const stats = [
  { label: "Awards", value: "29+", description: "Prestigious Awards", variant: "awards" },
  { label: "Community", value: "85", description: "active members", variant: "community" },
] as const;

const secondaryStats = [
  { label: "Twitter", value: "54.1k", description: "Followers", variant: "twitter" },
  { label: "Youtube", value: "100+", description: "Videos Uploaded Since 2012", variant: "youtube" },
  { label: "Facebook", value: "122k", description: "Followers", variant: "facebook" },
] as const;

const socialLinks = {
  Twitter: {
    href: "https://x.com/TomasinoWeb?lang=en",
    label: "@tomasinoweb",
  },
  Youtube: {
    href: "https://www.youtube.com/tomasinoweb",
    label: "Watch on YouTube",
  },
  Facebook: {
    href: "https://www.facebook.com/TomasinoWeb/",
    label: "Visit FB Page",
  },
} as const;

function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
      className={className}
    >
      {children}
    </a>
  );
}

export function OurImpactSection() {
  return (
    <div className={styles.impact}>
      <div className={styles.primaryStats}>
        {stats.map((stat) => (
          <article key={stat.label} className={`${styles.statCard} ${styles[stat.variant]}`}>
            <div className={styles.statHeader}>{stat.label}</div>
            <div className={styles.statBody}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.description}</span>
            </div>
          </article>
        ))}
      </div>

      <article className={styles.websiteCard}>
        <div className={styles.websiteHeader}>Websites</div>
        <div className={styles.websiteBody}>
          <div className={styles.websiteIcons}>
            {websites.map((site) => (
              <ExternalLink key={site.name} href={site.href} className={styles.websiteIcon}>
                <Image src={site.icon} alt={site.name} width={140} height={130} />
              </ExternalLink>
            ))}
          </div>
          <div className={styles.websiteValue}>
            <span className={styles.statValue}>{websites.length}</span>
            <span className={styles.statLabel}>Developments</span>
          </div>
        </div>
        <div className={styles.websiteFooter}>
          <ExternalLink href="https://tomasinoweb.org/" className={styles.websiteLink}>
            Visit Main Website
          </ExternalLink>
        </div>
      </article>

      <div className={styles.socialStats}>
        {secondaryStats.map((stat) => {
          const link = socialLinks[stat.label];

          return (
            <article key={stat.label} className={`${styles.statCard} ${styles.socialCard} ${styles[stat.variant]}`}>
              <div className={styles.statHeader}>{stat.label}</div>
              <div className={styles.socialBody}>
                <span className={styles.socialValue}>{stat.value}</span>
                <span className={styles.socialLabel}>{stat.description}</span>
              </div>
              <div className={styles.socialFooter}>
                <ExternalLink href={link.href} className={styles.socialLink}>
                  {link.label}
                </ExternalLink>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
