import { useState } from "react";
import { shuffleArray } from "./arrayUtils";
import quizQuestions from "./quiz.json";
import { departments } from "./departments";

export type QuizResult = { cuisine: string; description: string; image_credits: string };
export type QuizQuestion = { question: string; answers: { text: string; departments: string[] }[] };

export function useQuiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleArray(quizQuestions));
  const [weights, setWeights] = useState({} as { [key: string]: number });
  const [completedQuestions, setCompletedQuestions] = useState(0);

  function reset() {
    setShuffledQuestions(shuffleArray(quizQuestions));
    setCompletedQuestions(0);
    setWeights({});
  }

  function getQuizResult() {
    // return departments.find((result) => result.key === "webTechnologies")!;

    let departmentWithHighestMode = [] as string[];
    let highestMode = -1;

    Object.entries(weights).forEach(([departmentName, departmentWeight]) => {
      if (departmentWeight > highestMode) {
        highestMode = departmentWeight;
        departmentWithHighestMode = [departmentName];
      } else if (departmentWeight == highestMode) {
        departmentWithHighestMode.push(departmentName);
      }
    });

    const departmentKey = departmentWithHighestMode[Math.floor(Math.random() * departmentWithHighestMode.length)];
    const department = departments.find((result) => result.key === departmentKey)!;
    return department;
  }

  const currentQuestion = shuffledQuestions[completedQuestions];
  function answer(idx: number) {
    setCompletedQuestions(completedQuestions + 1);
    const answer = currentQuestion.answers[idx];
    answer.departments.forEach((departmentKey) => {
      setWeights({
        ...weights,
        [departmentKey]: weights[departmentKey] != undefined ? weights[departmentKey] + 1 : 1,
      });
    });
  }

  const isFinished = () => completedQuestions == 10;
  const calculateProgress = () => completedQuestions * 10;
  return { reset, currentQuestion, getQuizResult, answer, isFinished, calculateProgress };
}

export type UseQuiz = ReturnType<typeof useQuiz>;
