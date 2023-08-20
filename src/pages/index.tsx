import { Layout } from "../components/Layout";
import {Buttons} from "../components/Buttons";
import styles from "../styles/index.module.scss";

export default function () {
  return (
    <Layout>
      <div>
        <h1>join.tomasinoweb.org</h1>
        <h1 className={styles.red}>Landing Page</h1>
        <Buttons />
      </div> 
    </Layout>
  );
}
