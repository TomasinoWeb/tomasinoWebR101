import { Layout } from "../components/Layout";
import styles from "./faq.module.scss";

export default function () {
  return (
    <Layout>
      <div>
        <h1 className={styles.red}>Frequently Asked Questions</h1>
      </div>
    </Layout>
  );
}
