import { Layout } from "../../components/Layout";
import Link from "next/link";
import styles from "./index.module.scss";
import { nextifyImage } from "../../components/HoverableImage";
import TomasinoWebLogo from "../../../public/assets/about/people/About-Logo.png";
import Image from "next/image";

export default function About() {
  return (
    <Layout showFooter={false} departmentBackground="#151f28" textColor="white">
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.logo}>
            <Image src={TomasinoWebLogo} alt="TomasinoWeb Logo" />
          </div>

          <div className={styles.statement}>
            <h1>What is TomasinoWeb?</h1>
            <p>
              TomasinoWeb is the premier digital media organization of the University of Santo Tomas joined by students
              who are immensely interested in multimedia journalism.
            </p>

            <p>
              Its primary goal as a student publication is to deliver relevant information to the Thomasian community
              through online media.
            </p>
          </div>
        </div>
        <div className={styles.redirect}>
          <Link href="about/departments">
            <div className={styles.departments}>
              <div
                className={styles.img}
                style={{
                  backgroundImage: `url("${nextifyImage("/assets/about/people/About-Departments.png")}")`,
                }}
              />
              <h1 className={styles.title}>Departments</h1>
            </div>
          </Link>

          <Link href="about/people">
            <div className={styles.people}>
              <div
                className={styles.img}
                style={{
                  backgroundImage: `url("${nextifyImage("/assets/about/people/About-People.png")}")`,
                }}
              />
              <h1 className={styles.title}>The People</h1>
            </div>
          </Link>

          <Link href="about/org-culture">
            <div className={styles.culture}>
              <div
                className={styles.img}
                style={{
                  backgroundImage: `url("${nextifyImage("/assets/about/people/About-Culture.png")}")`,
                }}
              />
              <h1 className={styles.title}>Culture</h1>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
