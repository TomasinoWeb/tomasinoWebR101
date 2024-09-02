import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import introStyles from "./quiz.module.scss";
import questionStyles from "./quizBody.module.scss";
import BackgroundImage from "../../public/assets/landing/background_ghibli_quiz.png";
import Image from "next/image";
import { Button } from "../components/Buttons";
import { useState } from "react";
import { UseQuiz, useQuiz } from "../utils/useQuiz";
import ReactMarkdown from "react-markdown";
import dynamic from "next/dynamic";
import { FadeIn } from "../components/FadeIn";

interface PageProps {}

function Intro({ startQuiz }: { startQuiz: () => void }) {
  return {
    footer_disable: false,
    header: "full",
    is_transparent: true,

    children: (
      <div className={introStyles.root}>
        <div className={introStyles.background}>
          <Image src={BackgroundImage} alt="Background image for landing" className={introStyles.bg_img} />
        </div>

        <div className={introStyles.overlay}>
          <div className={introStyles.intro_container}>
            <FadeIn>
              <div className={introStyles.content}>
                <h1>Which TW department do you belong to?</h1>
                <div className={introStyles.description}>
                  <p>R101 season is back! 🤩</p>
                  <p>
                    It's the most wonderful time of the year to join TomasinoWeb (real), where you can meet awesome
                    personalities and hang out with the best Tomasinos in town. If you're not yet sure which department
                    you would like to apply for, answer this short quiz and may the odds be ever in your favor. ✨
                  </p>
                </div>

                <div className={introStyles.rail + " " + introStyles.maxWidth}>
                  <Button onClick={() => startQuiz()} theme="glass" maxWidth>
                    START THE QUIZ
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    ),
  } as const;
}

function RenderQuestion({ quizController }: { quizController: UseQuiz }) {
  return {
    footer_disable: false,
    header: "full",
    is_transparent: false,

    children: (
      <div className={questionStyles.questions_container_wrapper}>
        <div className={questionStyles.questions_container}>
          <div className={questionStyles.progress_bar_wrapper}>
            <div
              className={questionStyles.progress_bar_active}
              style={{ width: `${quizController.calculateProgress()}%` }}
            ></div>
            <div className={questionStyles.progress_bar}></div>
          </div>

          <div className={questionStyles.image_container}>
            <div className={questionStyles.wrapper}>
              <div className={questionStyles.overlay}>
                <div className={questionStyles.inner}>
                  <h1>{quizController.currentQuestion.question}</h1>
                </div>
              </div>

              <Image
                src={"/assets/about/departments.jpg"}
                alt={quizController.currentQuestion.question}
                className={questionStyles.image}
                width={1000}
                height={500}
              />
            </div>

            <p className={questionStyles.credit}>{quizController.currentQuestion.imageCredit}</p>
          </div>

          <div className={questionStyles.answers}>
            {quizController.currentQuestion.answers.map((answer, idx) => {
              return (
                <div className={questionStyles.answer}>
                  <Button theme="black_n_white" maxWidth onClick={() => quizController.answer(idx)}>
                    {answer.text}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
  } as const;
}

function RenderFinished({ quizController }: { quizController: UseQuiz }) {
  const department = quizController.getQuizResult();

  return {
    header: "full",
    footer_disable: false,
    is_transparent: true,

    children: (
      <div className={introStyles.root}>
        <div className={introStyles.background}>
          <Image src={BackgroundImage} alt="Background image for landing" className={introStyles.bg_img} />
        </div>

        <div className={introStyles.overlay}>
          <div className={introStyles.intro_container}>
            <div className={introStyles.content}>
              <Image
                src="/assets/quiz/results/icons/Totoro.png"
                alt="Result image for Extaff"
                width={200}
                height={200}
                className={introStyles.resultIcon}
              />

              <div className={introStyles.header}>
                <h2>You should join</h2>
                <h1 className={introStyles.quizResultHeading}>External Affairs</h1>
              </div>

              <div className={introStyles.description + " " + introStyles.resultDescription}>
                <p>
                  You have a lot of friends from different faculties and colleges. Definitely, when you walk around
                  campus, you greet someone every minute. When you're in External Affairs, you don’t eat death threats
                  for breakfast, rather emails from various orgs.
                </p>

                <p>Photo from My Neighbor Totoro (1988)</p>
              </div>

              <div className={introStyles.rail}>
                <div className={introStyles.button}>
                  <Button onClick={() => quizController.reset()} theme="glass" maxWidth>
                    RETAKE THE QUIZ
                  </Button>
                </div>

                <div className={introStyles.button}>
                  <Button href="/apply" theme="glass" maxWidth>
                    APPLY NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  } as const;
}

const Page = PublicLayoutFrontend.use<PageProps>(() => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const quizController = useQuiz();

  if (hasLoaded == false) return Intro({ startQuiz: () => setHasLoaded(true) });
  else if (quizController.isFinished() == false) return RenderQuestion({ quizController });
  else return RenderFinished({ quizController });
});

export default dynamic(() => Promise.resolve(Page), { ssr: false });

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
