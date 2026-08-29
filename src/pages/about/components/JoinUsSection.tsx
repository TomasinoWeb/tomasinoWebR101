import { testimonials } from "../../../data/testimonials";
import { Button } from "../../../components/Button";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./JoinUsSection.module.scss";

const toPosition = (authorDetails: string) => authorDetails.replace(/[()]/g, "");

// Only tag a department where it's actually inferable from the role — leaving the rest
// untagged rather than guessing, since not every department has a matching testimonial yet.
const departmentByAuthor: Record<string, string> = {
  "Andrea Louise Dayo": "Web Technologies",
  "JR Gregg Victor Lagman": "Web Technologies",
  "Zeandarra Gaile Giva": "Web Technologies",
  "Lance Owen Gulinao": "Web Technologies",
};

export function JoinUsSection() {
  const [featured, ...rest] = testimonials;

  return (
    <div className={styles.section}>
      <div className={styles.banner}>
        <Button href="/apply" variant="pill">
          Register now
        </Button>
      </div>

      <div className={styles.grid}>
        <TestimonialCard
          featured
          name={featured.authorName}
          position={toPosition(featured.authorDetails)}
          quote={featured.quoteText.replace(/\*/g, "")}
          image={featured.imageSrc}
          department={departmentByAuthor[featured.authorName]}
        />

        <div className={styles.smallGrid}>
          {rest.map((testimonial) => (
            <TestimonialCard
              key={testimonial.authorName}
              name={testimonial.authorName}
              position={toPosition(testimonial.authorDetails)}
              quote={testimonial.quoteText.replace(/\*/g, "")}
              image={testimonial.imageSrc}
              department={departmentByAuthor[testimonial.authorName]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
