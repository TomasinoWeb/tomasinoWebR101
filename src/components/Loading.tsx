import Image from "next/image";
import styles from "./Loading.module.scss";
import ImageSleeping from "../../public/assets/tomweggs/Sleeping.png";

const Loading = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.loadingText}>Loading...</h1>

      <Image className={styles.mascotIcon} src={ImageSleeping} alt="mascot" width={100} height={100} quality={100} />
      <div id="loading-bar-spinner" className={styles.spinner}>
        <div className={styles.spinnerIcon} />
      </div>
    </div>
  );
};

export default Loading;
