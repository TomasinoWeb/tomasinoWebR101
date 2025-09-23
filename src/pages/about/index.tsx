import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import styles from "./about.module.scss";

import Image, { StaticImageData } from "next/image";
import Wacky from "../../../public/assets/tomweggs/Wacky.png";
import Scribbles from "../../../public/assets/about/snoopy scribbles.svg";
import Logo from "../../../public/logo/insignia_yellow.png";
import Departments from "../../../public/assets/about/departments.png";
import DepartmentsColor from "../../../public/assets/about/departments-hovered.png";
import People from "../../../public/assets/about/people.png";
import PeopleColor from "../../../public/assets/about/people-hovered.png";
import Culture from "../../../public/assets/about/org-culture.png";
import CultureColor from "../../../public/assets/about/org-culture-hovered.png";

import Link from "next/link";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",

    children: (
      <div className={styles.page}>
        <section className={styles.top}>
          <div className={styles.snoopyAndLogo}>
            <div className={styles.snoopyScribble}>
              <div className={styles.snoopy}>
                <Image src={Wacky} alt="Wacky TomWegg" />
              </div>
              <div className={styles.scribble}>
                <Image src={Scribbles} alt="." />
              </div>
            </div>

            <div className={styles.logo}>
              <Image src={Logo} alt="Snoopy" />
            </div>
          </div>

          <div className={styles.pageDescription}>
            <h2 className={styles.title}>What is Tomasinoweb?</h2>
            <p className={styles.description}>
              TomasinoWeb is the premier digital media organization of the University of Santo Tomas joined by students
              who are immensely interested in multimedia journalism.
              <br />
              <br />
              Its primary goal as a student publication is to deliver relevant information to the Thomasian community
              through online media.
            </p>
          </div>
        </section>

        <section className={styles.bottom}>
          <AboutBox
            title="Departments"
            description="Meet the amazing crews behind each department that power TomasinoWeb!"
            imageInitial={Departments}
            imageOnHover={DepartmentsColor}
            href="/about/departments"
          />
          <AboutBox
            title="The People"
            description="The heart of TomasinoWeb? It's the people."
            imageInitial={People}
            imageOnHover={PeopleColor}
            href="/about/people"
          />
          <AboutBox
            title="Org Culture"
            description="More than just an org — it’s a culture of passion, purpose, and play."
            imageInitial={Culture}
            imageOnHover={CultureColor}
            href="/about/org-culture"
          />
        </section>
      </div>
    ),
  };
});

type AboutBoxProps = {
  title: string;
  description: string;
  imageInitial: StaticImageData | string;
  imageOnHover: StaticImageData | string;
  href: string;
};

function AboutBox(props: AboutBoxProps) {
  return (
    <Link href={props.href} className={styles.aboutBox}>
      <section className={styles.textSection}>
        <h3 className={styles.title}>{props.title.toUpperCase()}</h3>
        <p className={styles.description}>{props.description}</p>
      </section>
      <section className={styles.imageContainer}>
        <div className={styles.inside}>
          <Image src={props.imageOnHover} alt={props.title} className={styles.after} />
          <Image src={props.imageInitial} alt={props.title} className={styles.initial} />
        </div>
      </section>
    </Link>
  );
}

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
