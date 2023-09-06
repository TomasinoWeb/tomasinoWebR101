import dynamic from "next/dynamic";
import { Layout } from "../components/Layout";
import styles from "./quiz.module.scss";
import { ButtonOnClick, Buttons } from "../components/Buttons";
import { useState } from "react";
import { UseQuiz, useQuiz } from "../utils/useQuiz";
import { splitArrayIntoChunks } from "../utils/arrayUtils";
import Image from "next/image";

function Intro(props: { load: () => void }) {
  return (
    <Layout>
      <div className={styles.intro_container}>
        <h1 className={styles.heading}>Which TW Department do you belong to?</h1>
        <p className={styles.subheading}>R101 season is back! 🤩</p>
        <p className={styles.paragraph}>
          It’s the most wonderful time of the year to join TomasinoWeb (real), where you can meet awesome personalities
          and hang out with the best Tomasinos in town. If you’re not yet sure which department you would like to apply
          for, answer this short quiz and may the odds be ever in your favor. ✨
        </p>

        <div className={styles.buttons}>
          <ButtonOnClick maxWidth onClick={() => props.load()}>
            Start
          </ButtonOnClick>
        </div>
      </div>
    </Layout>
  );
}

function RenderQuestion({ quizController }: { quizController: UseQuiz }) {
  return (
    <div className={styles.questions_container}>
      <div className={styles.progress_bar_wrapper}>
        <div className={styles.progress_bar_active} style={{ width: `${quizController.calculateProgress()}%` }}></div>
        <div className={styles.progress_bar}></div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.wrapper}>
          <div className={styles.overlay}>
            <div className={styles.inner}>
              <h1>{quizController.currentQuestion.question}</h1>
            </div>
          </div>

          <Image
            src={quizController.currentQuestion.image}
            alt={quizController.currentQuestion.question}
            className={styles.image}
            width={1000}
            height={500}
          />
        </div>

        <p className={styles.credit}>{quizController.currentQuestion.imageCredit}</p>
      </div>

      <div className={styles.answers}>
        {quizController.currentQuestion.answers.map((answer, idx) => {
          return (
            <div className={styles.answer}>
              <ButtonOnClick maxWidth onClick={() => quizController.answer(idx)}>
                {answer.text}
              </ButtonOnClick>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RenderedFinished({ quizController }: { quizController: UseQuiz }) {
  const department = quizController.getQuizResult();

  return (
    <div className={styles.result_container}>
      <p className={styles.above_text}>Your TomasinoWeb era is: </p>
      <h1 className={styles.dept_name}>{department.name}</h1>

      <div className={styles.splitter}>
        <div className={styles.left}>
          <p className={styles.lyric}>{department.lyric}</p>
          <p>Taylor Swift, {department.songName}</p>

          <p className={styles.description}>{department.description}</p>
        </div>

        <div className={styles.right}>
          <div className={styles.embed} dangerouslySetInnerHTML={{ __html: department.embed }} />
          <div className={styles.buttons}>
            <div className={styles.button}>
              <ButtonOnClick maxWidth onClick={() => quizController.reset()}>
                Retake The Quiz
              </ButtonOnClick>
            </div>

            <div className={styles.button}>
              <Buttons maxWidth href="/link-here">
                Apply Now
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageComponent() {
  // const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(true);
  if (hasLoaded == false) return <Intro load={() => setHasLoaded(true)} />;
  const quizController = useQuiz();

  return (
    <Layout>
      {quizController.isFinished() ? (
        <RenderedFinished quizController={quizController} />
      ) : (
        <RenderQuestion quizController={quizController} />
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PageComponent), { ssr: false });
