import { Layout } from "../components/Layout";
import { Titles } from "../components/Titles";
import styles from "./r101.module.scss";

export default function () {
  return (
    <Layout>
      <meta
        name="description"
        content="Become a part of TomasinoWeb through these easy steps. Step 1: Fill out the Google Forms. Step 2: Take the Exam. Step 3: Take an Interview. Step 4: Wait for results"
      />
      <div className={styles.r101}>
        <div className={styles.hero}>
          <Titles title="R101">The Application Process</Titles>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.icon_row}>
              <img src="/static/form.png" alt="form" className={styles.icon} />
              <img src="/static/arrow.png" alt="arrow" className={styles.arrow} />
            </div>
            <div className={styles.content_container}>
              <h2 className={styles.title}>Formal Application</h2>
              <p className={styles.text}>
                Applicants must first accomplish the{" "}
                <a href="" target="_blank" rel="noreferrer">
                  Google Forms
                </a>
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon_row}>
              <img src="/static/exam.png" alt="exam" className={styles.icon} />
              <img src="/static/arrow.png" alt="arrow" className={styles.arrow} />
            </div>
            <div className={styles.content_container}>
              <h2 className={styles.title}>Take the exam</h2>
              <p className={styles.text}>
                The department examination will be sent by our Human Resources department. Skip this step if your
                department does not have an exam.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon_row}>
              <img src="/static/interview.png" alt="interview" className={styles.icon} />
              <img src="/static/arrow.png" alt="arrow" className={styles.arrow} />
            </div>
            <div className={styles.content_container}>
              <h2 className={styles.title}>Interview</h2>
              <p className={styles.text}>
                After passing your requirements, the Human Resources department will send you a scheduling sheet for the
                interview.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon_row}>
              <img src="/static/result.png" alt="result" className={styles.icon} />
            </div>
            <div className={styles.content_container}>
              <h2 className={styles.title}>Results</h2>
              <p className={styles.text}>
                The results will be sent to you in less than a week by our Human Resources department.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
