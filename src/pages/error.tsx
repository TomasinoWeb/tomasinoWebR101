import { PublicLayoutFrontend } from "../layouts/public/frontend";
import styles from "../components/error.module.scss";
import Buttons from "../components/Buttons";
import Image from "next/image";

const ErrorPage = PublicLayoutFrontend.use(() => {
  return {
    children: (
      <div className={styles.errorPageContainer}>
        <div className={styles.errorPageContent}>
          <div className={styles.errorMessage}>
            4
            <div className={styles.errorImage}>
              <Image src="/images/error-kitty.png" alt="Error Image" className={styles.errorImg} layout="fill" />
            </div>
            4
          </div>
          <div className={styles.errorText}>Looks like you are lost. The page you are for is not available.</div>
          <div className={styles.errorBtnContainer}>
            <Buttons theme="secondary" text="Go to Home" />
            <Buttons theme="secondary" text="About TomasinoWeb" />
          </div>
        </div>
      </div>
    ),
  };
});

export default ErrorPage;
