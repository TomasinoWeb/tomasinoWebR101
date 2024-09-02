import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent({ internalProps, layoutProps }) {
    return (
      <div
        className={
          styles.root +
          " " +
          (layoutProps.is_transparent ? styles.transparent : styles.not_transparent) +
          " " +
          (layoutProps.footer_disable ? styles.disabled_footer : "")
        }
      >
        <Navbar type={layoutProps.header} background_color={layoutProps.is_transparent ? "transparent" : "white"} />

        <div className={styles.flex + " " + (layoutProps.header === "full" ? styles.full : styles.centered)}>
          <main
            className={
              styles.main +
              " " +
              (layoutProps.is_transparent
                ? !layoutProps.footer_disable
                  ? styles.transparent_footer
                  : ""
                : styles.push_header)
            }
          >
            {layoutProps.children}
          </main>

          {layoutProps.footer_disable === false && <Footer />}
        </div>
      </div>
    );
  },
});
