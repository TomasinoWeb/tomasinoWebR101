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
import { useRouter } from "next/router";
import Stairs from "../../components/Stairs";
import { GlobalNavigator } from "../../components/GlobalNavigator";

type PublicLayoutViewProps = {
  internalProps?: PublicLayoutOptions["ServerSideLayoutProps"];
  layoutProps: PublicLayoutOptions["ClientSideLayoutProps"] & { children: ReactNode };
};

const useScroll = () => {
  const [data, setData] = useState({ x: 0, y: 0, lastX: 0, lastY: 0 });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setData((last) => {
            const newX = window.scrollX;
            const newY = window.scrollY;
            if (last.x === newX && last.y === newY) {
              return last;
            }
            return {
              x: newX,
              y: newY,
              lastX: last.x,
              lastY: last.y,
            };
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return data;
};

function PublicLayoutView({ internalProps, layoutProps }: PublicLayoutViewProps) {
  const router = useRouter();
  const scroll = useScroll();
  const isNavHidden = scroll.y > 150 && scroll.y - scroll.lastY > 0;
  const navClassList = isNavHidden ? [styles["nav-bar--hidden"]] : [];
  const sectionTransitionKey = router.pathname.startsWith("/about") ? "/about" : router.asPath;

  return (
      <div
        className={`${styles.root} ${layoutProps.dots === "full" ? styles.fullDots : layoutProps.dots === "subtle" ? styles.subtleDots : styles.disabledDots} ${layoutProps.header !== "full_regular" ? styles.transparentHeader : ""}  ${layoutProps.footer === "transparent" ? styles.transparentFooter : ""} ${layoutProps.header === "mini" ? styles.overlappingMini : ""} ${layoutProps.footer === "disabled" ? styles.disabledFooter : ""} ${layoutProps.nonScrollable ? styles.nonScrollable : ""} ${layoutProps.nonScrollable && layoutProps.footer !== "disabled" ? styles.nonScrollableWithFooter : ""}`}
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
            <Link href="/" aria-label="Go to the landing page">
              <Image
                className={styles.headerLogo}
                src="/logo/logo_white.png"
                alt="TomasinoWeb"
                width={144}
                height={32}
                priority
              />
            </Link>
          </div>
        </header>

        <header className={styles.mobile}>
          <div className={styles.inner}>
            <MobileNavbar variant="mini" useLogo />
          </div>
        </header>

        <GlobalNavigator />

        <div className={styles.pageContent}>
          <AnimatePresence mode="wait">
            <Stairs key={sectionTransitionKey}>
              <main className={`${styles.main}`}>{layoutProps.children}</main>
            </Stairs>
          </AnimatePresence>

          {layoutProps.footer !== "disabled" && (
            <div className={styles.footer}>
              <Footer className={layoutProps.footerClassName} />
            </div>
          )}
        </div>
      </div>
    );
}

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent: PublicLayoutView,
});

export const createPublicPage = PublicLayoutFrontend.use;
