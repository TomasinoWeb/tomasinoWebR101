import { Layout } from "../components/Layout";
import styles from "./index.module.scss";
import QuoteBlock from "../components/QuoteBlock";
export default function () {
  return (
    <Layout>
      <div>
        <h1>join.tomasinoweb.org</h1>
        <h1 className={styles.red}>Landing Page</h1>
        <QuoteBlock.Right
          author="Mikaela Gabrielle De Castro"
          position="Blogs Editor"
          year="2021-2024"
          image="/assets/components/Album-Placeholder.png"
          textColor="black"
        >
          “I was a wide-eyed freshman when I joined TomasinoWeb. They helped me
          develop my expertise and passion as I worked with diverse and
          like-minded people who enthusiastically dabble in storytelling,
          community development, civic engagement, and student leadership. With
          everyone's support and initiative, it is always a thrill to work with
          them in pursuit of impactful and moving conversations.”
        </QuoteBlock.Right>
        <QuoteBlock.Left
          author="Mikaela Gabrielle De Castro"
          position="Blogs Editor"
          year="2021-2024"
          image="/assets/components/Album-Placeholder.png"
          textColor="black"
        >
          “I was a wide-eyed freshman when I joined TomasinoWeb. They helped me
          develop my expertise and passion as I worked with diverse and
          like-minded people who enthusiastically dabble in storytelling,
          community development, civic engagement, and student leadership. With
          everyone's support and initiative, it is always a thrill to work with
          them in pursuit of impactful and moving conversations.”
        </QuoteBlock.Left>
      </div>
    </Layout>
  );
}
