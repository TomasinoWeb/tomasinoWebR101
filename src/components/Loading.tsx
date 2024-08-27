import Image from "next/image";

import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.loadingText}>Loading...</h1>

      <Image className={styles.mascotIcon} src="/assets/loading/mascot.png" alt="mascot" width={31} height={35} />
      <div id="loading-bar-spinner" className={styles.spinner}>
        <div className={styles.spinnerIcon} />
      </div>
    </div>
  );
};

export default Loading;
