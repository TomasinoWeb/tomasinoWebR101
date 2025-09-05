import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { Button } from "../../components/Button";
import styles from "./about.module.scss";

import Image, { StaticImageData } from "next/image";
import Snoopy from "../../../public/assets/about/about-snoopy.png";
import Scribbles from "../../../public/assets/about/snoopy scribbles.svg";
import Logo from "../../../public/logo/insignia_yellow.png";
import AboutBoxPlaceholder from "../../../public/assets/about/about_box_placeholder.png";
import AboutBoxColor from "../../../public/assets/about/about_box_color.png";

/* used in about box animation change */
import { useState } from "react";

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
                <Image src={Snoopy} alt="Snoopy" />
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
            imageInitial={AboutBoxPlaceholder}
            imageOnHover={AboutBoxColor}
            href="/about/departments"
          />
          <AboutBox
            title="The People"
            description="The heart of TomasinoWeb? It's the people."
            imageInitial={AboutBoxPlaceholder}
            imageOnHover={AboutBoxColor}
            href="/about/people"
          />
          <AboutBox
            title="Org Culture"
            description="More than just an org — it’s a culture of passion, purpose, and play."
            imageInitial={AboutBoxPlaceholder}
            imageOnHover={AboutBoxColor}
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
  const [boxImage, setBoxImage] = useState(props.imageInitial);

  return (
    <Link href={props.href} className={styles.aboutBox}>
      <section className={styles.textSection}>
        <h3 className={styles.title}>{props.title.toUpperCase()}</h3>
        <p className={styles.description}>{props.description}</p>
      </section>
      <section className={styles.image}>
        <Image
          src={boxImage}
          alt={props.title}
          onMouseEnter={() => {
            setBoxImage(props.imageOnHover);
          }}
          onMouseLeave={() => {
            setBoxImage(props.imageInitial);
          }}
        />
      </section>
    </Link>
  );
}

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
