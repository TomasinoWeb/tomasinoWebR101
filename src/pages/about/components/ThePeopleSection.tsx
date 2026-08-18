import Image from "next/image";
import styles from "./ThePeopleSection.module.scss";

// Reused from the old about/people.tsx core-team roster — same real photos, just presented
// in the new grid layout instead of the old expandable gallery.
const coreMembers = [
  { name: "Charisse Suni", position: "President", image: "/assets/about/the-people/core/p.png" },
  { name: "Jessica Siega", position: "Executive Secretary", image: "/assets/about/the-people/core/sec.png" },
  { name: "Florian Venturina", position: "VP for Finance", image: "/assets/about/the-people/core/fin.png" },
  { name: "Andrea Figarola", position: "VP for Human Resources", image: "/assets/about/the-people/core/hr.png" },
  { name: "Lance Gulinao", position: "Chief Technology Officer", image: "/assets/about/the-people/core/cto.png" },
  { name: "Zeandarra Giva", position: "Asst. Chief Technology Officer", image: "/assets/about/the-people/core/acto.png" },
];

export function ThePeopleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>The People</h2>
        <p>Meet a small cut of our published work — from viral campaigns to on-site coverages, every output tells a story.</p>
      </div>

      <div className={styles.layout}>
        {/* Collage art is a pending Figma asset (checklist 3.5.1) — placeholder box until it's exported. */}
        <div className={styles.collage} />

        <div className={styles.grid}>
          {coreMembers.map((member) => (
            <div className={styles.member} key={member.name}>
              <div className={styles.photo}>
                <Image src={member.image} alt={member.name} fill className={styles.image} />
              </div>
              <span className={styles.name}>{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
