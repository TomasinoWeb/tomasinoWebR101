import styles from "../../styles/QuizResult.module.css";
import Header from "../../components/TransparentHeader";
import Image from "next/image";

const Result = ({ finalName, finalDesc, finalLink }) => {
  return (
    <>
      <Header />

      <div className={styles.quiz}>
        <div className={styles.mainresult}>
          <h2>{finalName}</h2>
          <h3>{finalDesc}</h3>
          <Image 
            src={finalLink}
            width={300}
            height={300}
            alt="department image"
          />
        </div>
      </div>
    </>
  );
};

export default Result;
