import { Layout } from "../../components/Layout";
import styles from "./people.module.scss";

export default function () {
  return (
    <Layout>
      <div>
        <h1 className={styles.red}>People</h1>
      </div>
    </Layout>
  );
}
