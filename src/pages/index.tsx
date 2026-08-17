import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import { DashboardWidget } from "../components/DashboardWidget";
import { AppIconShortcut } from "../components/AppIconShortcut";
import Footer from "../components/Footer";
import styles from "./index.module.scss";
import Image from "next/image";
import ToraTomwegg from "../../public/assets/tomweggs/ToraTomweggVer2.png";
import Sleeping from "../../public/assets/tomweggs/Sleeping.png";
import Confuse from "../../public/assets/tomweggs/Confuse.png";
import Dancing from "../../public/assets/tomweggs/Dancing.png";
import {
  faUser,
  faCircleQuestion,
  faClipboardList,
  faClipboardCheck,
  faGlobe,
  faNewspaper,
  faLemon,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  const getGlobalCell = (groupRowIndex: number, groupColIndex: number, startRow: number, startCol: number) => {
    const globalRow = startRow + groupRowIndex;
    const globalCol = startCol + groupColIndex;
    return (globalRow - 1) * 10 + globalCol;
  };

  const renderGroup = (startRow: number, startCol: number, totalRows: number, totalCols: number) => {
    const subCells = [];
    for (let r = 0; r < totalRows; r++) {
      for (let c = 0; c < totalCols; c++) {
        const cellNum = getGlobalCell(r, c, startRow, startCol);
        const globalRow = startRow + r;
        const globalCol = startCol + c;
        subCells.push({ cellNum, globalRow, globalCol });
      }
    }

    return (
      <div 
        className={styles.subGrid} 
        style={{ 
          gridTemplateColumns: `repeat(${totalCols}, 1fr)`,
          gridTemplateRows: `repeat(${totalRows}, 1fr)`
        }}
      >
        {subCells.map(({ cellNum, globalRow, globalCol }) => (
          <div key={cellNum} className={styles.gridCell}>
            <span className={styles.cellLabel}>C{cellNum}</span>
            <span className={styles.subtext}>R{globalRow}, C{globalCol}</span>
          </div>
        ))}
      </div>
    );
  };

  return {
    header: "full_regular",
    footer: "disabled",
    dots: "disabled",
    nonScrollable: true,

    children: (
      <div className={styles.root}>
        <div className={styles.container}>
          
          {/* Top Row Groups (Rows 1-2) */}
          <div className={styles.rowGroupGrid}>
            <div className={styles.widgetCell}>
              <DashboardWidget title="2026 is the new 2016!" aspectRatio="square">
                <Image src={ToraTomwegg} alt="2026 is the new 2016!" fill style={{ objectFit: "cover" }} />
              </DashboardWidget>
            </div>
            
            <div className={styles.widgetCell}>
              <DashboardWidget title="TomasinoWeb R101" aspectRatio="rectangle">
                <Image src={Sleeping} alt="TomasinoWeb R101" fill style={{ objectFit: "cover" }} />
              </DashboardWidget>
            </div>

            <div className={styles.widgetCell}>
              <div className={styles.appsGrid}>
                <AppIconShortcut label="About" icon={faUser} href="/about" />
                <AppIconShortcut label="FAQs" icon={faCircleQuestion} href="/faqs" />
                <AppIconShortcut label="Process" icon={faClipboardList} href="/r101" />
                <AppIconShortcut label="Apply" icon={faClipboardCheck} href="/apply" />
              </div>
            </div>
          </div>

          {/* Bottom Row Groups (Rows 3-4) */}
          <div className={styles.rowGroupGrid}>
            <div className={styles.widgetCell}>
              <DashboardWidget title="Application Process" aspectRatio="square">
                <Image src={Confuse} alt="Application Process" fill style={{ objectFit: "cover" }} />
              </DashboardWidget>
            </div>

            <div className={styles.widgetCell}>
              <div className={styles.centerAppsGrid}>
                <AppIconShortcut label="Website" icon={faGlobe} href="https://tomasinoweb.org" external />
                <AppIconShortcut label="Facebook" icon={faFacebook} href="https://facebook.com/tomasinoweb" external />
                <AppIconShortcut label="[Draft 143]" icon={faNewspaper} href="https://draft143.com" external />
                <AppIconShortcut label="Lamona" icon={faLemon} href="https://lamona.lol/" external />
                
                <AppIconShortcut label="Instagram" icon={faInstagram} href="https://instagram.com/tomasinoweb" external />
                <AppIconShortcut label="Youtube" icon={faYoutube} href="https://youtube.com/tomasinoweb" external />
                <AppIconShortcut label="X" icon={faXTwitter} href="https://x.com/tomasinoweb" external />
                <AppIconShortcut label="Thomscore" icon={faChartColumn} href="https://uaap.tomasinoweb.org/" external />
              </div>
            </div>

            <div className={styles.widgetCell}>
              <DashboardWidget title="Application Period" aspectRatio="square">
                <Image src={Dancing} alt="Application Period" fill style={{ objectFit: "cover" }} />
              </DashboardWidget>
            </div>
          </div>

          <Footer className={styles.homeFooter} />

        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
