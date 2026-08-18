import Image from "next/image";
import styles from "./GlimpseOfWorkSection.module.scss";

// Reuses the existing org-culture "actWork" photos rather than sourcing new placeholder art —
// these are already the same four categories the mockup calls for.
const items = [
  {
    label: "On-Site Coverage",
    description: "TomasinoWeb often goes to on-site coverages where our publication reports everything on ground.",
    image: "/assets/about/org-culture/actWork/onsite.png",
    color: "#3a6ea5",
  },
  {
    label: "Virtual Campaigns",
    description: "Digital-first productions reaching the Thomasian community across Facebook, Twitter, and beyond.",
    image: "/assets/about/org-culture/actWork/virtual.png",
    color: "#8c5ea3",
  },
  {
    label: "Mentorship Sessions",
    description: "Knowledge-sharing and workshops that keep every member of the org growing.",
    image: "/assets/about/org-culture/actWork/mentor.png",
    color: "#d9a441",
  },
  {
    label: "Interactive Meetings",
    description: "Collaborative sessions where ideas are pitched, planned, and put into action.",
    image: "/assets/about/org-culture/actWork/interactive.png",
    color: "#3aaa9a",
  },
];

export function GlimpseOfWorkSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>A Glimpse of the Work!</h2>
        <p>Here&apos;s a look at some of our published work — from virtual campaigns to on-site coverages, every output tells a story.</p>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <div className={styles.card} key={item.label}>
            <div className={styles.imageWrapper}>
              <Image src={item.image} alt={item.label} fill className={styles.image} />
            </div>
            <div className={styles.tag} style={{ background: item.color }}>
              {item.label}
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
