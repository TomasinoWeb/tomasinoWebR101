import { createPublicPage } from "../layouts/public/frontend";
import { createPublicStaticProps } from "../layouts/public/static";
import { DashboardWidget } from "../components/DashboardWidget";
import { AppIconShortcut } from "../components/AppIconShortcut";
import Footer from "../components/Footer";
import { applicationUrl } from "../components/ApplicationRedirect";
import styles from "./index.module.scss";
import Image from "next/image";

interface PageProps {}

export default createPublicPage<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "disabled",
    dots: "disabled",
    nonScrollable: true,

    children: (
      <div className={styles.root}>
        <div className={styles.container}>
          
          {/* Top Row Groups (Rows 1-2) */}
          <div className={`${styles.rowGroupGrid} ${styles.topRow}`}>
            <div className={styles.widgetCell}>
              <DashboardWidget title="2026 is the new 2016!" aspectRatio="square">
                <Image
                  src="/assets/py19/landing/square_widget1_theme.png"
                  alt="2026 is the new 2016!"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </DashboardWidget>
            </div>
            
            <div className={styles.widgetCell}>
              <DashboardWidget
                title="TomasinoWeb R101"
                aspectRatio="rectangle"
                onClick={() => window.dispatchEvent(new Event("open-landing-announcement"))}
              >
                <Image
                  src="/assets/py19/landing/rectangle_widget_poster.png"
                  alt="TomasinoWeb R101 announcement"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </DashboardWidget>
            </div>

            <div className={styles.widgetCell}>
              <div className={styles.appsGrid}>
                <AppIconShortcut label="About" iconSrc="/assets/py19/landing/about_logo.svg" href="/about" />
                <AppIconShortcut label="FAQs" iconSrc="/assets/py19/landing/faqs_logo.svg" href="/faqs" />
                <AppIconShortcut label="Process" iconSrc="/assets/py19/landing/process_logo.svg" href="/r101" />
                <AppIconShortcut label="Apply" iconSrc="/assets/py19/landing/apply_logo.svg" href={applicationUrl} application />
              </div>
            </div>
          </div>

          {/* Bottom Row Groups (Rows 3-4) */}
          <div className={`${styles.rowGroupGrid} ${styles.bottomRow}`}>
            <div className={styles.widgetCell}>
              <DashboardWidget
                title="Application Process"
                aspectRatio="square"
                onClick={() => {
                  window.location.href = "/r101";
                }}
              >
                <Image
                  src="/assets/py19/about/websites/r101_site.png"
                  alt="Application Process"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </DashboardWidget>
            </div>

            <div className={styles.widgetCell}>
              <div className={styles.centerAppsGrid}>
                <AppIconShortcut label="Website" iconSrc="/assets/py19/landing/tomasinoweb_logo.svg" href="https://tomasinoweb.org" external />
                <AppIconShortcut label="Facebook" iconSrc="/assets/py19/landing/fb_logo.svg" href="https://facebook.com/tomasinoweb" external />
                <AppIconShortcut label="[Draft 143]" iconSrc="/assets/py19/landing/draft143_logo.svg" href="https://draft143.com" external />
                <AppIconShortcut label="Lamona" iconSrc="/assets/py19/landing/lamona_logo.svg" href="https://lamona.lol/" external />
                
                <AppIconShortcut label="Instagram" iconSrc="/assets/py19/landing/instagram_logo.svg" href="https://instagram.com/tomasinoweb" external />
                <AppIconShortcut label="Youtube" iconSrc="/assets/py19/landing/youtube_logo.svg" href="https://youtube.com/tomasinoweb" external />
                <AppIconShortcut label="X" iconSrc="/assets/py19/landing/twitter_logo.svg" href="https://x.com/tomasinoweb" external />
                <AppIconShortcut label="Thomscore" iconSrc="/assets/py19/landing/thomscore_logo.svg" href="https://uaap.tomasinoweb.org/" external />
              </div>
            </div>

            <div className={styles.widgetCell}>
              <DashboardWidget title="Application Period" aspectRatio="square">
                <Image
                  src="/assets/py19/landing/square_widget3_twstripes.png"
                  alt="Application Period"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </DashboardWidget>
            </div>
          </div>

          <Footer className={styles.homeFooter} />

        </div>
      </div>
    ),
  };
});

export const getStaticProps = createPublicStaticProps<PageProps>({});
