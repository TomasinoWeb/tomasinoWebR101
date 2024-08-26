import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import Buttons from "../components/Buttons";
import styles from "./quizResults.module.scss";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    isTransparent: true,
    backgroundImage: "/assets/quiz/result_extaff.jpg",
    children: (
      <div className={styles.intro_container}>
        <div className={styles.content}>
          <img className={`${styles.totoro}`} src="/assets/quiz/totoro.png" alt="External Affairs" />
          <h2>You should Join</h2>
          <h1>External Affairs</h1>
          <div className={styles.description}>
            <p>
              You have a lot of friends from different faculties and colleges. Definitely, when you walk around campus,
              you greet someone every minute. When you're in External Affairs, you don’t eat death threats for
              breakfast, rather emails from various orgs.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Buttons text="Retake the quiz" theme="primary" />
            <Buttons text="apply now" theme="primary" />
          </div>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
