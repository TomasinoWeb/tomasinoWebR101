import styles from "../../styles/Quiz.module.css";
import Header from "../../components/TransparentHeader";

const Result = ({ finalName, finalDesc, finalLink }) => {
  return (
    <>
      <Header />

      <div className={styles.quiz}>
        <div className={styles.mainresult}>
          <h2>{finalName}</h2>
          <h3>{finalDesc}</h3>
          <h3>{finalLink}</h3>
        </div>
      </div>
    </>
  );
};

export default Result;
