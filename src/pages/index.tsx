import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import { Button } from "../components/Button";
import styles from "./index.module.scss";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "mini",
    footer: "disabled",
    dots: "subtle",

    children: (
      <div className={styles.heroSection}>
        <div className={styles.titleSection}>
          <div className={styles.decorativeLines}>
            <div className={styles.topHorizontalLine}></div>
            <div className={styles.bottomHorizontalLine}></div>
            <div className={styles.leftVerticalLine}></div>
            <div className={styles.rightVerticalLine}></div>
          </div>
          <div className={styles.titleSubtitle}>
            Welcome to
          </div>
          <div className={styles.logo}>
            <div className={styles.planetContainer}>
              <div className={styles.planet}>PLANET</div>
              <div className={styles.snoopyContainer}>
                <img className={styles.sleepingSnoopy} alt="" src="/assets/landing/snoopy.png" />
                <img className={styles.bird} alt="" src="/assets/landing/bird.png" />
              </div>
            </div>
            <div className={styles.tomasinoweb}>
              TOMASINOWEB
            </div>
          </div>
          <div className={styles.titleSubtitle}>
            est. 2007
          </div>
        </div>
        <div className={styles.heroButtons}>
          <Button href="" className={styles.heroButton} variant="speech">KNOW TOMASINOWEB'S STORY</Button>
          <Button href="" className={styles.heroButton} variant="speech">JOIN THE CREW</Button>
        </div>
        <div className={styles.characters}>
          <img className={styles.characterOne} alt="" src="/assets/landing/one.png" />
          <img className={styles.characterTwo} alt="" src="/assets/landing/two.png" />
          <img className={styles.characterThree} alt="" src="/assets/landing/three.png" />
          <img className={styles.characterFour} alt="" src="/assets/landing/four.png" />
          <img className={styles.characterFive} alt="" src="/assets/landing/five.png" />
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
