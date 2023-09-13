import { ReactNode } from "react";
import { Layout } from "../components/Layout";
import { Titles } from "../components/Titles";
import styles from "./r101.module.scss";
import FormImage from "../../public/static/form.png";
import ExamImage from "../../public/static/exam.png";
import InterviewImage from "../../public/static/interview.png";
import ResultImage from "../../public/static/result.png";
import Image, { StaticImageData } from "next/image";

interface CardRowProps {
  title: string;
  children: ReactNode;
  hasArrow: boolean;
  image: StaticImageData;
}

function CardRow(props: CardRowProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon_row}>
        <Image alt="icon for application step" src={props.image} className={styles.icon} />
        <div className={styles.arrowContainer}>
          {props.hasArrow && <img src="/static/arrow.png" alt="arrow" className={styles.arrow} />}
        </div>
      </div>
      <div className={styles.content_container}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.children}</p>
      </div>
    </div>
  );
}
export default function () {
  return (
    <Layout>
      <div className={styles.r101}>
        <div className={styles.hero}>
          <Titles title="R101">The Application Process</Titles>
        </div>
        <div className={styles.container}>
          <CardRow title="Formal Application" image={FormImage} hasArrow>
            Applicants must first accomplish the{" "}
            <a href="/apply" target="_blank" rel="noreferrer">
              Google Forms.
            </a>
          </CardRow>

          <CardRow title="Take the exam" image={ExamImage} hasArrow>
            The department examination will be sent by our Human Resources department. Skip this step if your department
            does not have an exam.
          </CardRow>

          <CardRow title="Interview" image={InterviewImage} hasArrow>
            After passing your requirements, the Human Resources department will send you a scheduling sheet for the
            interview.
          </CardRow>

          <CardRow title="Results" image={ResultImage} hasArrow={false}>
            The results will be sent to you in less than a week by our Human Resources department.
          </CardRow>
        </div>
      </div>
    </Layout>
  );
}
