import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { AboutShell } from "./components/AboutShell";
import { OurImpactSection } from "./components/OurImpactSection";
import { GlimpseOfWorkSection } from "./components/GlimpseOfWorkSection";
import { ThePeopleSection } from "./components/ThePeopleSection";
import { JoinUsSection } from "./components/JoinUsSection";
import { FadeIn } from "../../components/FadeIn";
import styles from "./life.module.scss";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",

    children: (
      <AboutShell>
        <div className={styles.life}>
          <FadeIn>
            <OurImpactSection />
          </FadeIn>
          <FadeIn>
            <GlimpseOfWorkSection />
          </FadeIn>
          <FadeIn>
            <ThePeopleSection />
          </FadeIn>
          <FadeIn>
            <JoinUsSection />
          </FadeIn>
        </div>
      </AboutShell>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
