import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import { Button } from "../components/Button";
import BackgroundImage from "../../public/assets/landing/BACKGROUND_VER 1.png";
import Logo from "../../public/assets/logos/WORDMARK_Ver1.png";
import styles from "./index.module.scss";
import Image from "next/image";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "mini",
    footer: "disabled",
    dots: "subtle",

    children: (
      <div className={styles.root}>
        <div className={styles.background}>
          <Image src={BackgroundImage} alt="Background image for landing" className={styles.bg_img} />
        </div>

        <div className={styles.overlay}>
          <div className={styles.page}>
            <div className={styles.top}>
              <div className={styles.left}>
                <h1>WELCOME TO</h1>
              </div>
              <div className={styles.center}>
                <Image src={Logo} alt="Logo" className={styles.tomwebLogo} />
              </div>
              <div className={styles.right}>
                <h1>EST. 2007</h1>
              </div>
            </div>

            <div className={styles.rail}>
              <div className={styles.inner}>
                <Button href="/about" variant="speech" maxWidth>
                  KNOW TOMASINOWEB'S STORY
                </Button>

                <Button href="/apply" variant="speech" maxWidth>
                  JOIN THE CREW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
