import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import Question from "../components/Question";
//import styles from "./quizQuestions.module.scss";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
    return {
        isTransparent: true,
        backgroundImage: "/assets/landing/background_ghibli_quiz.png",
        children: (
        <div>
        <Question question={"Test"} choices={["1", "2"]} />
        </div>
        ),
    };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});