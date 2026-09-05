import Image from "next/image";
import { Button } from "../../../components/Button";
import styles from "./ThePeopleSection.module.scss";

// Collage art is a pending Figma asset (checklist 3.5.1) — no image yet, but the markup
// is ready to render one once the asset is exported.
const collageImage: string | null = null;

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

type Testimonial = {
  name: string;
  department: string;
  position: string;
  quote: string;
  image: string | null;
};

// Placeholder content until real member testimonials/photos are exported from Figma —
// edit each entry's fields directly, no JSX changes needed.
const firstTestimonialRow: Testimonial[] = [
  { name: "Member Name", department: "Department", position: "Position", quote: "TomasinoWeb is more than an organization, it is a family of digital practitioners.", image: null },
  { name: "Member Name", department: "Department", position: "Position", quote: "TomasinoWeb is more than an organization, it is a family of digital practitioners.", image: null },
  { name: "Member Name", department: "Department", position: "Position", quote: "TomasinoWeb is more than an organization, it is a family of digital practitioners.", image: null },
];

const secondTestimonialRow: Testimonial[] = [
  { name: "Member Name", department: "Department", position: "Position", quote: "TomasinoWeb is more than an organization, it is a family of digital practitioners.", image: null },
  { name: "Member Name", department: "Department", position: "Position", quote: "TomasinoWeb is more than an organization, it is a family of digital practitioners.", image: null },
  { name: "Member Name", department: "Department", position: "Position", quote: "TomasinoWeb is more than an organization, it is a family of digital practitioners.", image: null },
  { name: "Member Name", department: "Department", position: "Position", quote: "TomasinoWeb is more than an organization, it is a family of digital practitioners.", image: null },
];

type SmallMember = { name: string; image: string | null };

const smallMemberRow: SmallMember[] = [
  { name: "Member Name", image: null },
  { name: "Member Name", image: null },
  { name: "Member Name", image: null },
  { name: "Member Name", image: null },
  { name: "Member Name", image: null },
  { name: "Member Name", image: null },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialTag}>
        {testimonial.name} x {testimonial.department}
      </div>
      <div className={styles.testimonialPhoto}>
        {testimonial.image && <Image src={testimonial.image} alt={testimonial.name} fill className={styles.image} />}
      </div>
      <div className={styles.testimonialBody}>
        <span className={styles.testimonialName}>{testimonial.name}</span>
        <span className={styles.testimonialPosition}>{testimonial.position}</span>
        <p className={styles.testimonialQuote}>&quot;{testimonial.quote}&quot;</p>
      </div>
    </div>
  );
}

export function ThePeopleSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
          <div className={styles.collage}>
            {collageImage && <Image src={collageImage} alt="TomasinoWeb collage" fill className={styles.image} />}
          </div>

          <div className={styles.grid}>
            {coreMembers.map((member) => (
              <div className={styles.member} key={member.name}>
                <div className={styles.photo}>
                  <Image src={''} alt={''} fill className={styles.image} />
                </div>
                <span className={styles.name}>Member Name</span>
              </div>
            ))}
          </div>
      </div>

      <div className={styles.banner}>
        <span className={styles.bannerText}>Want to join the team?</span>
        <Button href="/apply" variant="pill" className={styles.registerButton}>
          Register now &gt;&gt;
        </Button>
      </div>

      <div className={styles.joinUs}>
        <div className={styles.testimonialRow3}>
          {firstTestimonialRow.map((testimonial, i) => (
            <TestimonialCard testimonial={testimonial} key={i} />
          ))}
        </div>

        <div className={styles.smallMemberRow}>
          {smallMemberRow.map((member, i) => (
            <div className={styles.member} key={i}>
              <div className={styles.photo}>
                {member.image && <Image src={member.image} alt={member.name} fill className={styles.image} />}
              </div>
              <span className={styles.name}>{member.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.testimonialRow4}>
          {secondTestimonialRow.map((testimonial, i) => (
            <TestimonialCard testimonial={testimonial} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
