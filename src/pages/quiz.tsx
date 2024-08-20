import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import styles from "./quiz.module.scss";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    isTransparent: true,
    backgroundImage: "/assets/landing/background_ghibli_quiz.png",
    children: (
      <div className={styles.intro_container}>
        <div className={styles.content}>
          <h1>Which TW department do you belong to?</h1>
          <div className={styles.description}>
            <p>R101 season is back! 🤩</p>
            <p>
              It's the most wonderful time of the year to join TomasinoWeb (real), where you can meet awesome
              personalities and hang out with the best Tomasinos in town. If you're not yet sure which department you
              would like to apply for, answer this short quiz and may the odds be ever in your favor. ✨
            </p>
          </div>
          {/* temporary button - replace with component */}
          <button>Start the Quiz</button>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
