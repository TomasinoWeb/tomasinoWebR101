import { Layout } from "../components/Layout";
import { Buttons } from "../components/Buttons";
import { CultureCard } from "../components/CultureCard";
import { Titles } from "../components/Titles";
import { QuoteBlockLeft } from "../components/QuoteBlockLeft";
import { QuoteBlockRight } from "../components/QuoteBlockRight";
import styles from "./index.module.scss";

export default function () {
  return (
    <Layout>
      <div>
        <Titles />
        <h1>join.tomasinoweb.org</h1>
        <h1 className={styles.red}>Landing Page</h1>
        <div></div>
        <Buttons />
        <CultureCard />
        <QuoteBlockLeft />
        <QuoteBlockRight />
      </div>
    </Layout>
  );
}
