import { Layout } from "../components/Layout";
import Link from "next/link";
import styles from "../styles/index.module.scss";

export default function () {
  return (
    <Layout>
      {/* TODO */}
      {/* adjust hero text spacing */}
      <div className={styles.center}>
        {/* TODO */}
        {/* * add era blocks component */}
        <div className="era-block-container">

        </div>
        {/* TODO */}
        {/* change font of hero title */}
        <div className={styles.hero}>
          <h1 className={styles.heroText}>TOMASINOWEB</h1>
          <h1 className={styles.heroText}>THE R101 TOUR</h1>
        </div>
        {/* TODO */}
        {/* adjust link styling */}
        <div className="links">
          <ul className={styles.links}>
            <li><Link href="">ABOUT</Link></li>
            <li><Link href="">R101</Link></li>
            <li><Link href="">FAQ</Link></li>
            <li><Link href="">THE POOL</Link></li>
          </ul>
        </div>
        {/* TODO */}
        {/* * add era blocks component */}
        <Link href="">GET YOUR TICKETS NOW</Link>
        <div className="era-block-container">
        </div>
      </div>
    </Layout>
  );
}
