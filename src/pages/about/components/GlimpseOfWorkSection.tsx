import Image from "next/image";
import { Oswald } from "next/font/google";
import styles from "./GlimpseOfWorkSection.module.scss";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"], variable: "--font-oswald" });

// Reuses the existing org-culture "actWork" photos rather than sourcing new placeholder art —
// these are already the same four categories the mockup calls for.
const items = [
  {
    label: "On-Site Coverage",
    description: "Live event documentation — photos, write-ups, and real-time social posting.",
    image: "/assets/about/org-culture/actWork/onsite.png",
    color: "#FFB702",
    useCssBackground: true,
  },
  {
    label: "Virtual Campaigns",
    description: "Digital-first productions reaching the Thomasian community across Facebook, Twitter, and beyond.",
    image: "/assets/py18/about/org-culture/actWork/virtual.png",
    color: "#8c5ea3",
    description: "Digital-first productions reaching thousands across Facebook, Twitter and beyond.",
    image: "/assets/about/org-culture/actWork/virtual.png",
    color: "#EA4A68",
    useCssBackground: true,
  },
  {
    label: "Mentorship Sessions",
    description: "Knowledge-sharing and workshops that keep every member of the org growing.",
    image: "/assets/py18/about/org-culture/actWork/mentor.png",
    color: "#d9a441",
    description: "Knowledge-sharing and workshops that level up every member of the org.",
    image: "/assets/about/org-culture/actWork/mentor.png",
    color: "#FF6A20",
    useCssBackground: true,
  },
  {
    label: "Interactive Meetings",
    description: "Collaborative sessions where ideas are born, projects planned, and fun is had.",
    image: "/assets/about/org-culture/actWork/interactive.png",
    color: "#3aaa9a",
  },
];

export function GlimpseOfWorkSection() {
  return (
    <div className={`${styles.grid} ${oswald.variable}`}>
        {items.map((item) => (
          <div className={styles.card} style={{ borderColor: item.color }} key={item.label}>
            <div className={styles.imageWrapper}>
              <Image src={item.image} alt={item.label} fill className={styles.image} />
            </div>
            <div className={styles.tag} style={item.useCssBackground ? undefined : { background: item.color }}>
              {item.label}
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
    </div>
  );
}
