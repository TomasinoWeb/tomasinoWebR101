import Image from "next/image";
import RepeatingHeader from "../../components/RepeatHeader";
import styles from "./index.module.scss";
import AboutBox from "../../components/AboutBox";
import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import Background from "../../../public/assets/about/gen_assembly.png";
import Totoro from "../../../public/assets/GHIBLI ICONS/totoro.png";
import Calcifer from "../../../public/assets/GHIBLI ICONS/calcifer v2.png";
import Susuwatari from "../../../public/assets/GHIBLI ICONS/susuwatari v2.png";
import Departments from "../../../public/assets/about/departments.jpg";
import ThePeople from "../../../public/assets/about/the people.jpg";
import OrgCulture from "../../../public/assets/about/culture.jpg";

const aboutBoxContents = [
  {
    icon: Totoro,
    image: Departments,
    title: "Departments",
    linkURL: "/about/departments",
  },
  {
    icon: Calcifer,
    image: ThePeople,
    title: "The People",
    linkURL: "/about/people",
  },
  {
    icon: Susuwatari,
    image: OrgCulture,
    title: "Org Culture",
    linkURL: "/about/org-culture",
  },
];

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full",
    footer_disable: false,
    is_transparent: false,
    children: (
      <div className={styles.container}>
        <section>
          <RepeatingHeader title="About" />
          <span className={styles.hero}>
            <Image alt="tomweb" src={Background} />
          </span>
        </section>

        <div className={styles.bottom}>
          <section className={`${styles.flexCentered} ${styles.flexColumn} ${styles.inner}`}>
            <h2 className={styles.title}>
              <div className={styles.subtitle}>WHAT IS </div> TOMASINOWEB? {/* the formatting here is important*/}
            </h2>

            <div className={styles.texts}>
              <p className={styles.description} style={{ marginBottom: "20px" }}>
                <strong>TomasinoWeb</strong> is the premier digital media organization of the University of Santo Tomas
                joined by students who are immensely interested in multimedia journalism.
              </p>

              <p className={styles.description}>
                Its primary goal as a student publication is to deliver relevant information to the Thomasian community
                through online media.
              </p>
            </div>
          </section>

          <section className={styles.about_boxes}>
            {aboutBoxContents.map((box) => (
              <div className={styles.about_box} key={box.title}>
                <AboutBox icon={box.icon} image={box.image} title={box.title} linkURL={box.linkURL} />
              </div>
            ))}
          </section>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
