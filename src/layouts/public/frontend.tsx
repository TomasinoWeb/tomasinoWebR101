import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { MobileNavbar, Navbar } from "../../components/Navbar";

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent({ internalProps, layoutProps }) {
    return (
      <div
        className={`${styles.root} ${layoutProps.dots === "full" ? styles.fullDots : styles.subtleDots} ${layoutProps.header !== "full_regular" ? styles.transparentHeader : ""}  ${layoutProps.footer === "transparent" ? styles.transparentFooter : ""} ${layoutProps.header === "mini" ? styles.overlappingMini : ""}`}
      >
        <header className={styles.header + " " + (layoutProps.header === "mini" ? styles.miniHeader : "")}>
          <div className={styles.inner}>
            {layoutProps.header !== "mini" && (
              <div className={styles.logo}>
                <h1>Planet TomasinoWeb</h1>
              </div>
            )}

            <div className={styles.nav}>
              <Navbar containsResults={internalProps?.resultsAreOut || false} containsApply={layoutProps.header !== "mini"} />
            </div>
          </div>
        </header>

        <header className={styles.mobile}>
          <div className={styles.inner}>
            <MobileNavbar variant="mini" />
          </div>
        </header>

        <main className={`${styles.main}`}>{layoutProps.children}</main>

        {layoutProps.footer !== "disabled" && (
          <div className={styles.footer}>
            <Footer />
          </div>
        )}
      </div>
    );
  },
});
