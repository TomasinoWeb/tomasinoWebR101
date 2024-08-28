import { Button } from "../components/Buttons";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import BackgroundImage from "../../public/assets/landing/background_ghibli_landing.png";
import Image from "next/image";
import styles from "./index.module.scss";
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
                <h2 className={styles.heroText}>STUDIO TOMWEB</h2>
                <p className={styles.heroMessage}>where innovation, passion, and dedication begins</p>
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
          {/* <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="black_n_white" maxWidth>
              <p>QUIZ</p>
            </Button>
          </div>

          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button onClick={() => alert("Testing")} theme="glass" maxWidth>
              <p>CLICK ME FOR ALERT</p>
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="black_n_white">
              <p>QUIZ</p>
            </Button>
          </div>

          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="glass">
              <p>QUIZ</p>
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="black_n_white" outline="small">
              <p>QUIZ</p>
            </Button>
          </div> */}
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
