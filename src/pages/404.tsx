import { PublicLayoutFrontend } from "../layouts/public/frontend";
import styles from "./404.module.scss";
import Buttons from "../components/Buttons";
import Image from "next/image";
import ErrorImage from "../../public/assets/404/error-img.webp";

const ErrorPage = PublicLayoutFrontend.use(() => {
  return {
    children: (
      <div className={styles.errorPageContainer}>
        <div className={styles.errorPageContent}>
          <div className={styles.errorMain}>
            <div className={styles.errorText}>
              Looks like you are lost. The page you are looking for is not available.
            </div>
            <div className={styles.errorMessage}>
              4<Image src={ErrorImage} alt="Error Image" className={styles.errorImg} />4
            </div>
          </div>
          <div className={styles.errorBtnContainer}>
            <Buttons theme="secondary" text="Back to Home" />
            <Buttons theme="secondary" text="About TomasinoWeb" />
          </div>
        </div>
      </div>
    ),
  };
});

export default ErrorPage;
