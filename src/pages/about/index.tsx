import { Layout } from "../../components/Layout";
import Link from "next/link";
import styles from "./index.module.scss";

export default function About() {
  return (
    <Layout showFooter={false} departmentBackground="#151f28" textColor="white">
      <div className={styles.About}>
        <div className={styles["container"]}>
          <div className={styles["hero-container"]}>
            <div className={styles["logo-container"]}>
              <img src="../assets/about/people/About-Logo.png" alt="TomasinoWeb logo" />
            </div>

            <div className={styles["statement-container"]}>
              <h1 className={styles["main-heading"]}>What is TomasinoWeb?</h1>
              <p className={styles["bot-statement"]}>
                TomasinoWeb is the premier digital media organization of the University of Santo Tomas joined by
                students who are immensely interested in multimedia journalism.
              </p>

              <p className={styles["bot-statement"]}>
                Its primary goal as a student publication is to deliver relevant information to the Thomasian community
                through online media.
              </p>
            </div>
          </div>
          <div className={styles["redirect-container"]}>
            <Link href="about/departments">
              <div className={styles["departments"]}>
                <div className={styles["departments-image"]}>
                  <div className={styles["image-description"]}>Image</div>
                </div>
                <h1 className={styles["sub-heading"]}>Departments</h1>
              </div>
            </Link>

            <Link href="about/people">
              <div className={styles["people"]}>
                <div className={styles["people-image"]}>
                  <div className={styles["image-description"]}>Image</div>
                </div>
                <h1 className={styles["sub-heading"]}>The People</h1>
              </div>
            </Link>

            <Link href="about/org-culture">
              <div className={styles["culture"]}>
                <div className={styles["culture-image"]}>
                  <div className={styles["image-description"]}>Image</div>
                </div>
                <h1 className={styles["sub-heading"]}>Culture</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
