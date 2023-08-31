import { Layout } from "../components/Layout";
import styles from "./index.module.scss";

export default function () {
  return (
    <Layout>
      <div>
        <h1>join.tomasinoweb.org</h1>
        <h1 className={styles.red}>Landing Page</h1> 
      </div>
    </Layout>
  );
}
