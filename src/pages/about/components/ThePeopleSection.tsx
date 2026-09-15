import Image from "next/image";
import { Button } from "../../../components/Button";
import styles from "./ThePeopleSection.module.scss";

const collageImage = "/assets/py19/about/core/CORE COLLAGE.png";

const membersForGrid = [
  ["6.png", "Charisse Suni", "President"],
  ["17.png", "Paula Martinez", "VP for Community Development"],
  ["38.png", "Shanley Lacanlale", "VP for External Affairs"],
  ["12.png", "Shanah Inojosa", "VP for Human Resources"],
  ["16.png", "Joelle Delos Santos", "VP for Finance"],
  ["7.png", "Chai Quijano", "Executive Secretary"],
  ["10.png", "Elisse Arzadon", "Managing Editor"],
  ["69.png", "Bella Sañosa", "Associate Editor"],
  ["8.png", "Lianne Gumban", "Managing Editor"],
  ["15.png", "Miko Cruz", "Chief Photographer"],
  ["14.png", "Eloisa Sy", "Asst. Chief Photographer"],
  ["11.png", "Arron Romero", "Asst. Chief Videographer"],
  ["9.png", "Danielle Mantes", "Asst. Creative Director"],
  ["13.png", "Micah De Guzman", "Asst. Creative Director"],
  ["5.png", "Aivan Sanchez", "Chief Technology Officer"],
  ["27.png", "Caitlin Gayosa", "Asst. Chief Technology Officer"],
].map(([image, name, position]) => ({
  image: `/assets/py19/about/core/${image}`,
  name,
  position,
}));

type Testimonial = {
  name: string;
  department: string;
  position: string;
  quote: string;
  image: string | null;
};

const testimonials: Testimonial[] = [
  {
    name: "Jelsey Liz Dizon",
    department: "Blogs",
    position: "Blogs Editor, 2025-2026",
    quote: "I found my way to TomasinoWeb and it found me. What started as a leap of faith became one of my greatest teachers in growing and trusting myself artistically. I found my voice and met passionate, like-minded people who inspired me to become better as a whole. What's more, blogging with TomWeb added a bit more whimsy to my college years! I'll always look back with so much fondness and thanks to having been a part of it through the tangle of deadlines, meetings, and drafts.",
    image: "/assets/py19/about/testimonials/DIZON.png",
  },
  {
    name: "Shuhei De Belen",
    department: "Photography",
    position: "Asst. Chief Photographer, 2025-2026",
    quote: "When I first joined TomasinoWeb, I was skeptical of my own skills, as I had no prior experience in the publication department. Through my time at TomasinoWeb, I developed my photography and social skills and was able to work on a team that helped me a lot improve. I really enjoy my time with the org, especially when we're handling big events and hanging out afterward to celebrate.",
    image: "/assets/py19/about/testimonials/DE BELEN.png",
  },
  {
    name: "Paula Beatrice Martinez",
    department: "Executive",
    position: "Executive Vice President, 2026-2027",
    quote: "Joining TomasinoWeb is one of my college plot twists. I never expected an organization that I randomly stumbled upon during R101 to be the one that gave me an opportunity to grow and develop. I get to meet new people and explore beyond my comfort zone, which helps me to be the person I aspire to be.",
    image: "/assets/py19/about/testimonials/MARTINEZ.png",
  },
  {
    name: "Ma. Andrea Figarola",
    department: "Human Resources",
    position: "Vice President for Human Resources, 2025-2026",
    quote: "TomasinoWeb has become one of the most meaningful parts of my university journey. I found pieces of myself in the people I've met and they have pushed me to become a better version of who I am. Between the deadlines and late nights, they have made every moment worthwhile. I'll always carry with me the same warmth I felt when I first joined, all the way until the very end.",
    image: "/assets/py19/about/testimonials/FIGAROLA.png",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialTag}>
        {testimonial.name} x {testimonial.department}
      </div>
      <div className={styles.testimonialCardBody}>
        <div className={styles.testimonialPhoto}>
          {testimonial.image && <img src={testimonial.image} alt={testimonial.name} className={styles.image} />}
        </div>
        <div className={styles.testimonialBody}>
          <span className={styles.testimonialName}>{testimonial.name}</span>
          <span className={styles.testimonialPosition}>{testimonial.position}</span>
          <p className={styles.testimonialQuote}>&quot;{testimonial.quote}&quot;</p>
        </div>
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
          {membersForGrid.map((member, index) => (
            <div className={styles.member} key={`${member.name}-${index}`}>
              <div className={styles.photo}>
                <Image src={member.image} alt={member.name} fill className={styles.image} />
              </div>
              <div className={styles.memberDetails}>
                <span className={styles.name}>{member.name}</span>
                <span className={styles.position}>{member.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.banner}>
        <span className={styles.bannerText}>Want to join the team?</span>
        <Button href="/apply" variant="pill" className={styles.registerButton} application>
          Register now &gt;&gt;
        </Button>
      </div>

      <div className={styles.joinUs}>
        <div className={styles.testimonialRow}>
          {testimonials.map((testimonial, i) => (
            <TestimonialCard testimonial={testimonial} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
