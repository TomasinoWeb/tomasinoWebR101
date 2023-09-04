import { Layout } from "../components/Layout";
import styles from "./404.module.scss";
import Heart from "../../public/assets/broken-heart.png";
import Image from "next/image";
import { Buttons } from "../components/Buttons";

export default function () {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Image alt="TomWegg" src={Heart} height={400} className={styles.tomwegg} />
          <p className={styles.pageNotFound}>{"> Page not found"}</p>
          <h1 className={styles.heading}>I forgot you existed, I did, I did, I did</h1>
          <p className={styles.subheading}>Think you're finally clean? Let's get you back on track</p>

          <div className={styles.buttons}>
            <Buttons href="/">Back to De... Home</Buttons>
            <Buttons href="/about">About TomasinoWeb</Buttons>
          </div>
        </div>
      </div>
    </Layout>
  );
}
