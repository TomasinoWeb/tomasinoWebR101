import { Layout } from "../../components/Layout";
import styles from "./r101.module.scss";

export default function () {
  return (
    <Layout>
                <title>TomasinoWeb R101 Application Process</title>
                <meta name="description" content="Become a part of TomasinoWeb through these easy steps. Step 1: Fill out the Google Forms. Step 2: Take the Exam. Step 3: Take an Interview. Step 4: Wait for results" />
            <div className={styles["R101"]}>
                <div className={styles["r101-hero"]}>                   
                    <h1 className={styles["r101-hero-title"]}>Application</h1>
                    <h1 className={styles["r101-hero-title"]}>Process</h1>
                </div>
                <div className={styles["r101-card-container"]}>
                    <div className={styles["r101-card"]}>
                        <div className={styles["r101-card-icon-row"]}>
                            <img
                                src='/static/form.png'
                                alt='form'
                                className={styles["r101-icon"]}
                            />
                            <img
                                src='/static/arrow.png'
                                alt='arrow'
                                className={styles["r101-arrow"]}
                            />
                        </div>
                        <div className={styles["r101-card-content-container"]}>
                            <h2 className={styles["r101-card-title"]}>
                                Formal Application
                            </h2>
                            <p className={styles["r101-card-text"]}>
                                Applicants must first accomplish the{" "}
                                <a
                                    href='https://forms.gle/WyzZ99XBtZjVLPdH7'
                                    target='_blank'
                                    rel='noreferrer'>
                                    Google Forms
                                </a>{" "}
                                for applicants.
                            </p>
                        </div>
                    </div>
                    <div className={styles["r101-card"]}>
                        <div className={styles["r101-card-icon-row"]}>
                            <img
                                src='/static/exam.png'
                                alt='exam'
                                className={styles["r101-icon"]}
                            />
                            <img
                                src='/static/arrow.png'
                                alt='arrow'
                                className={styles["r101-arrow"]}
                            />
                        </div>
                        <div className={styles["r101-card-content-container"]}>
                            <h2 className={styles["r101-card-title"]}>
                                Take the exam
                            </h2>
                            <p className={styles["r101-card-text"]}>
                                The deparment examination will be sent by our
                                Human Resources department. Skip this step if
                                your department does not have an exam
                            </p>
                        </div>
                    </div>
                    <div className={styles["r101-card"]}>
                        <div className={styles["r101-card-icon-row"]}>
                            <img
                                src='/static/interview.png'
                                alt='interview'
                                className={styles["r101-icon"]}
                            />
                            <img
                                src='/static/arrow.png'
                                alt='arrow'
                                className={styles["r101-arrow"]}
                            />
                        </div>
                        <div className={styles["r101-card-content-container"]}>
                            <h2 className={styles["r101-card-title"]}>
                                Interview
                            </h2>
                            <p className={styles["r101-card-text"]}>
                                After passing your requirements, the Human
                                Resources department will send you a scheduling
                                sheet for the interview.
                            </p>
                        </div>
                    </div>
                    <div className={styles["r101-card"]}>
                        <div className={styles["r101-card-icon-row"]}>
                            <img
                                src='/static/result.png'
                                alt='result'
                                className={styles["r101-icon"]}
                            />
                        </div>
                        <div className={styles["r101-card-content-container"]}>
                            <h2 className={styles["r101-card-title"]}>
                                Results
                            </h2>
                            <p className={styles["r101-card-text"]}>
                                The results will be sent to you in less than a
                                week by our Human Resources department
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
  );
}