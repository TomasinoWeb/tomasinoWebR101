import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import Question from "../components/Question";
import styles from "./quizQuestions.module.scss";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    children: (
      <div className={`${styles.quizContainer}`}>
        <div className={`${styles.quizQuestionContainer}`}>
          <Question question={"This is a Sample Question"} image="assets/quiz/question_1.jpg" choices={["Choice 1", "Choice 2", "Choice 3", "Choice 4"]} />
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
