import { Button } from "../components/Buttons";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import BackgroundImage from "../../public/assets/landing/background_ghibli_landing.png";
import Image from "next/image";

import styles from "./home.module.scss";
interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full",
    is_transparent: true,
    footer_disable: false,

    children: (
      <div className={`${styles.root}`}>
        <div className={styles.background}>
          <Image src={BackgroundImage} alt="Background Image of Landing" className={styles.bg_img}></Image>
        </div>
        <div className={styles.overlay}>
          <div className={styles.slideBottom}>
            <div className="">
              <div className={styles.heroTextContainer}>
                <h2 className={styles.heroMainText}>STUDIO TOMWEB</h2>
                <p className={styles.heroSubText}>where innovation, passion, and dedication begins</p>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Button href="/" theme="glass" maxWidth>
                <p>STEP INTO OUR WORLD</p>
              </Button>
              <Button href="/" theme="glass" maxWidth>
                <p>DISCOVER OUR STORY</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
