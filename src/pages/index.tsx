import { Button } from "../components/Buttons";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import BackgroundImage from "../../public/assets/landing/background_ghibli_landing.png";
import Image from "next/image";
import styles from "./quiz.module.scss";
import { FadeIn } from "../components/FadeIn";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full",
    is_transparent: true,
    footer_disable: true,

    children: (
      <div className={styles.root}>
        <div className={styles.background}>
          <Image src={BackgroundImage} alt="Background image for landing" className={styles.bg_img} />
        </div>

        <div className={styles.overlay}>
          <div className={styles.intro_container}>
            <FadeIn>
              <div className={styles.content}>
                <h1 className={styles.largerHeading}>STUDIO TOMWEB</h1>
                <h2 className={styles.subheading}>where innovation, passion, and dedication beings</h2>

                <div className={styles.rail}>
                  <div className={styles.button}>
                    <Button href="/apply" theme="glass" maxWidth>
                      STEP INTO OUR WORLD
                    </Button>
                  </div>
                  <div className={styles.button}>
                    <Button href="/about" theme="glass" maxWidth>
                      DISCOVER OUR STORY
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
