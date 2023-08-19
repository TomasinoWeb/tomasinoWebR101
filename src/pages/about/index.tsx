import { Layout } from "../../components/Layout";
import styles from "../../styles/index.module.scss";

export default function () {
  return (
    <Layout>
      <div>
        <h1 className={styles.red}>About Page</h1>
      </div>
    </Layout>
  );
}
