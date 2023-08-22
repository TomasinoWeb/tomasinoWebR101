import { Layout } from "../components/Layout";
import { Buttons } from "../components/Buttons";
import { CultureCard } from "../components/CultureCard";
import { Titles } from "../components/Titles";
import { QuoteBlockLeft } from "../components/QuoteBlockLeft";
import { QuoteBlockRight } from "../components/QuoteBlockRight";
import Cultureimage from "../assets/Culture-Post-Coverage-hangouts.png";
import styles from "./index.module.scss";

export default function () {
  return (
    <Layout>
      <div>
        <Titles title="FAQS">
          <span>Can I ask you a question?</span>
        </Titles>
        <h1>join.tomasinoweb.org</h1>
        <h1 className={styles.red}>Landing Page</h1>
        <div></div>
        <Buttons text="Hi!"></Buttons>
        <CultureCard 
        text="Post-Coverage hangouts" 
        children="Where we discuss the most random of things from Antonism to Dating
        App bios. Feel free to hop in whenever you see your orgmates hanging
        out on one of the tambay lang channels."
        image="../assets/Culture-Post-Coverage-hangouts.png" />
        <QuoteBlockLeft
          text="“I was a wide-eyed freshman when I joined TomasinoWeb. They helped me develop my expertise and passion as I worked with diverse and like-minded people who enthusiastically dabble in storytelling, community development, civic engagement, and student leadership. With everyone's support and initiative, it is always a thrill to work with them in pursuit of impactful and moving conversations.”"
          children="- Mikaela Gabrielle De Castro (Blogs Editor, PY 2021-2024)"
        />
        <QuoteBlockRight text="“I was a wide-eyed freshman when I joined TomasinoWeb. They helped me develop my expertise and passion as I worked with diverse and like-minded people who enthusiastically dabble in storytelling, community development, civic engagement, and student leadership. With everyone's support and initiative, it is always a thrill to work with them in pursuit of impactful and moving conversations.”"
          children="- Mikaela Gabrielle De Castro (Blogs Editor, PY 2021-2024)" />
      </div>
    </Layout>
  );
}
