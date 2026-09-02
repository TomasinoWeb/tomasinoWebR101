import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { AboutShell } from "./components/AboutShell";
import { LifeSection } from "./components/LifeSection";
import { OurImpactSection } from "./components/OurImpactSection";
import { GlimpseOfWorkSection } from "./components/GlimpseOfWorkSection";
import { ThePeopleSection } from "./components/ThePeopleSection";
import { JoinUsSection } from "./components/JoinUsSection";
import styles from "./about.module.scss";

interface PageProps {}

const sections = [
  {
    title: "Our Impact",
    text: "a look at what we've built and achieved together!",
    content: <OurImpactSection />,
  },
  {
    title: "A Glimpse of the Work!",
    text: "Here's a look at some of our published work — from virtual campaigns to on-site coverages, every output tells a story.",
    content: <GlimpseOfWorkSection />,
  },
];

const peopleGroup = [
  {
    title: "Our People",
    text: "Here's a look at some of our published work — from virtual campaigns to on-site coverages, every output tells a story.",
    content: <ThePeopleSection />,
  },
  {
    title: "Want to join the us?",
    content: <JoinUsSection />,
  },
];

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",

    children: (
      <AboutShell>
        <div className={styles.life}>
          {sections.map((section) => (
            <LifeSection key={section.title} title={section.title} text={section.text}>
              {section.content}
            </LifeSection>
          ))}

          <div className={styles.peopleGroup}>
            {peopleGroup.map((section) => (
              <LifeSection key={section.title} title={section.title} text={section.text}>
                {section.content}
              </LifeSection>
            ))}
          </div>
        </div>
      </AboutShell>
    ),
  };
});
export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
