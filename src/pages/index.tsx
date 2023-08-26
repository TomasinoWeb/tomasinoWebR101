import { Layout } from "../components/Layout";
import Title from "../assets/landing/TomasinoWeb Title.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.scss";

export default function () {
  return (
    <Layout>
      {/* TODO */}
      {/* adjust hero text spacing */}
      <div className={styles.main}>
        {/* TODO */}
        {/* * add era blocks component */}
        <div className={`${styles.eroBlockContainerTop} ${styles.eroBlockContainer}`}>
          <div className={styles.eroBlock}>
          </div>
          <div className={styles.eroBlock}>
          </div>
          <div className={styles.eroBlock}>
          </div>
          <div className={styles.eroBlock}>
          </div>
          <div className={styles.eroBlock}>
          </div>
        </div>
        <div>
          {/* TODO: Adjust image size for responsive design */}
          <Image className={styles.titleImage} src={Title} alt="tomasino r101 title"></Image>
          <div className={styles.linksContainer}>
            <ul className={`${styles.links}`}>
              <li className={styles.linkItem}><Link href="">ABOUT</Link></li>
              <li className={styles.linkItem}><Link href="">R101</Link></li>
              <li className={styles.linkItem}><Link href="">FAQ</Link></li>
              <li className={styles.linkItem}><Link href="">THE POOL</Link></li>
            </ul>
          </div>
          <div className={styles.center}>
            <Link href="" className={`${styles.callToAction}`}>GET YOUR TICKETS NOW</Link>
          </div>
        </div>
        {/* TODO */}
        {/* * add era blocks component */}
      </div>
      <div className={`${styles.eroBlockContainerBottom} ${styles.eroBlockContainer}`}>
        <div className={styles.eroBlock}>
        </div>
        <div className={styles.eroBlock}>
        </div>
        <div className={styles.eroBlock}>
        </div>
        <div className={styles.eroBlock}>
        </div>
        <div className={styles.eroBlock}>
        </div>
      </div>
    </Layout>
  );
}
