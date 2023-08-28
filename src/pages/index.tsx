import { Layout } from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Title from "../assets/landing/TomasinoWeb Title.svg";
import styles from "./index.module.scss";

export default function () {
  return (
    <div className={styles.index}>
      <div className={styles.main}>
        <div
          className={`${styles.eroBlockContainerTop} ${styles.eroBlockContainer}`}
        >
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
        </div>
        <div className={`${styles.center} ${styles.titleContainer}`}>
          <div className={styles.titleSection}>
            <Image
              className={styles.titleImage}
              src={Title}
              alt="tomasino r101 title"
            ></Image>
            <ul className={`${styles.links}`}>
              <li className={styles.linkItem}>
                <Link href="">ABOUT</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="">R101</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="">FAQ</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="">THE POOL</Link>
              </li>
            </ul>
            <div className={styles.center}>
              <Link href="" className={`${styles.callToAction}`}>
                GET YOUR TICKETS NOW
              </Link>
            </div>
          </div>
        </div>
        {/* TODO */}
        {/* * add era blocks component */}
        <div
          className={`${styles.eroBlockContainerBottom} ${styles.eroBlockContainer}`}
        >
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
          <div className={styles.eroBlock}></div>
        </div>
      </div>
    </div>
  );
}
