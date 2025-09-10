import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import introStyles from "./quiz.module.scss";
import questionStyles from "./quizBody.module.scss";
import BackgroundImage from "../../public/assets/landing/BACKGROUND_VER 1.png";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { UseQuiz, useQuiz } from "../utils/useQuiz";
import dynamic from "next/dynamic";
import { FadeIn } from "../components/FadeIn";

interface PageProps {}

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  maxWidth?: boolean;
  customClasses?: string;
} & ({ onClick: MouseEventHandler<HTMLButtonElement> | "submit" | "reset" } | { href: string }) &
  ({ theme: "black_n_white"; outline?: "small" | "large" } | { theme: "glass" });

/**
 * A Button component that supports both links and button
 *
 * ---
 * **Using links vs buttons**
 *
 * To use as a link: Pass the href prop with the link to redict to
 *
 * To use as a button: Pass the onClick handler the function to call when clicked, or "reset" | "submit" when used in a form
 *
 * ---
 * **Variants**
 *
 * To use glassy type: Pass "glass" into the theme prop
 *
 * To use black and white button: Pass "black_n_white" into the theme prop.
 *
 * To use small variant of BnW button: Pass "small" as outline prop
 * @returns A button component
 */
export const Button = (props: ButtonProps) => {
  const className =
    introStyles[props.theme] +
    " " +
    (props.theme === "black_n_white" ? introStyles[props.outline ?? "large"] : "") +
    " " +
    introStyles.button +
    " " +
    (props.maxWidth ? introStyles.maxWidth : "") +
    " " +
    props.customClasses;

  if ("href" in props)
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );

  return (
    <button
      onClick={typeof props.onClick === "function" ? props.onClick : undefined}
      type={typeof props.onClick === "function" ? "button" : props.onClick}
      className={className}
    >
      {props.children}
    </button>
  );
};

function Intro({ startQuiz }: { startQuiz: () => void }) {
  return {
    header: "full_transparent",
    footer: "transparent",
    dots: "subtle",

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
    header: "full_regular",
    footer: "regular",
    dots: "full",

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
                src={quizController.currentQuestion.image}
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
    header: "full_transparent",
    footer: "transparent",
    dots: "subtle",

    children: (
      <div className={introStyles.root}>
        <div className={introStyles.background}>
          <Image src={BackgroundImage} alt={`Background image for ${department.key}`} className={introStyles.bg_img} />
        </div>

        <div className={introStyles.overlay}>
          <div className={introStyles.intro_container}>
            <div className={introStyles.content}>
              <Image
                src={"/assets/landing/peanut.png"}
                alt={`Result image for ${department.key}`}
                width={200}
                height={200}
                className={introStyles.resultIcon}
              />

              <div className={introStyles.header}>
                <h2>You should join</h2>
                <h1 className={introStyles.quizResultHeading}>{department.name}</h1>
              </div>

              <div className={introStyles.description + " " + introStyles.resultDescription}>
                <p>{department.description}</p>

                <p>{department.imageDescription}</p>
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
