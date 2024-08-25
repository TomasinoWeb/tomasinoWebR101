import { PublicLayoutFrontend } from "../layouts/public/frontend";
import styles from "./404.module.scss";
import Image from "next/image";
import ErrorImage from "../../public/assets/404/error-img.webp";
import { Button } from "../components/Buttons";

const ErrorPage = PublicLayoutFrontend.use(() => {
  return {
    is_transparent: false,
    header: "full",
    footer_disable: false,

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
            <div className={styles.button}>
              <Button href="/" theme="black_n_white" maxWidth>
                <p>BACK TO HOME</p>
              </Button>
            </div>

            <div className={styles.button}>
              <Button href="/about" theme="black_n_white" maxWidth>
                <p>ABOUT TOMASINOWEB</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
  };
});

export default ErrorPage;
