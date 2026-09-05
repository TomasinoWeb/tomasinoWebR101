import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";
import { AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { MobileNavbar, Navbar } from "../../components/Navbar";
import Image from "next/image";
import PlantTomasinoWeb from "../../../public/assets/py18/logos/WORDMARK_Ver1.png";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import Stairs from "../../components/Stairs";
import { GlobalNavigator } from "../../components/GlobalNavigator";

type PublicLayoutViewProps = {
  internalProps: PublicLayoutOptions["ServerSideLayoutProps"];
  layoutProps: PublicLayoutOptions["ClientSideLayoutProps"] & { children: ReactNode };
};

const useScroll = () => {
  const [data, setData] = useState({ x: 0, y: 0, lastX: 0, lastY: 0 });

  const handleScroll = () => {
    setData((last) => ({
      x: window.scrollX,
      y: window.scrollY,
      lastX: last.x,
      lastY: last.y,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return data;
};

function PublicLayoutView({ internalProps, layoutProps }: PublicLayoutViewProps) {
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScroll();
  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      _classList.push(styles["nav-bar--hidden"]);
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
      <div
        className={`${styles.root} ${layoutProps.dots === "full" ? styles.fullDots : layoutProps.dots === "subtle" ? styles.subtleDots : styles.disabledDots} ${layoutProps.header !== "full_regular" ? styles.transparentHeader : ""}  ${layoutProps.footer === "transparent" ? styles.transparentFooter : ""} ${layoutProps.header === "mini" ? styles.overlappingMini : ""} ${layoutProps.footer === "disabled" ? styles.disabledFooter : ""} ${layoutProps.nonScrollable ? styles.nonScrollable : ""}`}
      >
        <header
          className={
            styles.header +
            " " +
            (layoutProps.header === "mini" ? styles.miniHeader : "") +
            " " +
            navClassList.join(" ")
          }
        >
          <div className={styles.centeredBrand}>
            <Link href="/">TomasinoWeb</Link>
          </div>
        </header>

        <header className={styles.mobile}>
          <div className={styles.inner}>
            <MobileNavbar variant="mini" />
          </div>
        </header>

        <AnimatePresence mode="wait">
          <Stairs>
            <main className={`${styles.main}`}>{layoutProps.children}</main>
          </Stairs>
        </AnimatePresence>

        <GlobalNavigator containsResults={internalProps.resultsAreOut} />

        {layoutProps.footer !== "disabled" && (
          <div className={styles.footer}>
            <Footer />
          </div>
        )}
      </div>
    );
}

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent: PublicLayoutView,
});

export const createPublicPage = PublicLayoutFrontend.use;
