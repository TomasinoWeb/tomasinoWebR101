import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";
import { AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { MobileNavbar, Navbar } from "../../components/Navbar";
import Image from "next/image";
import PlantTomasinoWeb from "../../../public/assets/logos/WORDMARK_Ver1.png";
import Link from "next/link";

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent({ internalProps, layoutProps }) {
    return (
      <div
        className={`${styles.root} ${layoutProps.dots === "full" ? styles.fullDots : styles.subtleDots} ${layoutProps.header !== "full_regular" ? styles.transparentHeader : ""}  ${layoutProps.footer === "transparent" ? styles.transparentFooter : ""} ${layoutProps.header === "mini" ? styles.overlappingMini : ""} ${layoutProps.footer === "disabled" ? styles.disabledFooter : ""}`}
      >
        <header className={styles.header + " " + (layoutProps.header === "mini" ? styles.miniHeader : "")}>
          <div className={styles.inner}>
            {layoutProps.header !== "mini" && (
              <Link className={styles.logo} href="/">
                <Image src={PlantTomasinoWeb} alt="PlanetTomasinoWeb Logo" />
              </Link>
            )}

            <div className={styles.nav}>
              <Navbar containsResults={internalProps.resultsAreOut} containsApply={layoutProps.header !== "mini"} />
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
