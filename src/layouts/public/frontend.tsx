import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent({ internalProps, layoutProps }) {
    return (
      <div className={styles.root}>
        <Navbar type="full" color="white" />

        <div className={styles.flex}>
          <main className={styles.main}>{layoutProps.children}</main>

          <Footer />
        </div>
      </div>
    );
  },
});
