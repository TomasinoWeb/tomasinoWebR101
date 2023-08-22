import { Layout } from "../../components/Layout";
import styles from "./people.module.scss";

import Image from "next/image";
import Banner from "public/assets/about/people/Banner.png";
import GroupPic from "public/assets/about/people/MembersGroupPic.png";
import BannerGrid1 from "public/assets/about/people/BannerGrid1.png";
import BannerGrid2 from "public/assets/about/people/BannerGrid2.png";
import BannerGrid3 from "public/assets/about/people/BannerGrid3.png";

import { Titles } from "../../components/Titles";
import { Buttons } from "../../components/Buttons";
import { QuoteBlockLeft } from "../../components/QuoteBlockLeft";
import { QuoteBlockRight } from "../../components/QuoteBlockRight";

const otherMembers = [
  {
    name: "Maria Celestine Guerrero",
    image: "/assets/about/people/core/Secretary.png",
  },
  {
    name: "Berlice Cudia",
    image: "/assets/about/people/core/Vice President for Finance.png",
  },
  {
    name: "Maria Celestine Guerrero",
    image: "/assets/about/people/core/Secretary.png",
  },
  {
    name: "Berlice Cudia",
    image: "/assets/about/people/core/Vice President for Finance.png",
  },
  {
    name: "Maria Celestine Guerrero",
    image: "/assets/about/people/core/Secretary.png",
  },
  {
    name: "Berlice Cudia",
    image: "/assets/about/people/core/Vice President for Finance.png",
  },
  {
    name: "Maria Celestine Guerrero",
    image: "/assets/about/people/core/Secretary.png",
  },
  {
    name: "Berlice Cudia",
    image: "/assets/about/people/core/Vice President for Finance.png",
  },
  {
    name: "Maria Celestine Guerrero",
    image: "/assets/about/people/core/Secretary.png",
  },
  {
    name: "Berlice Cudia",
    image: "/assets/about/people/core/Vice President for Finance.png",
  },
];

const coreMembers = [
  {
    name: "Jan Carlo Zamora",
    position: "President",
    image: "/assets/about/people/core/President.png",
  },
  {
    name: "Jane Smith",
    position: "Designer",
    image: "/assets/about/people/core/Vice President for Finance.png",
  },
  // ... Add more members here
];

export default function () {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.componentContainer}>
          <Titles />
          <QuoteBlockLeft />
        </div>

        <div className={styles.memberCount}>
          <h1 className={styles.title}>
            xx TomWebbers <span className={styles.titleSmall}>and counting!</span>
          </h1>
          <p className={styles.subtitle}>
            We're a bunch of sleep-deprived yet ambitious undergrads from different
            colleges and faculties.
          </p>
          <div className={styles.grid}>
            {otherMembers.map((member, index) => (
              <div key={index} className={styles.member}>
                <Image
                  src={member.image}
                  alt={`${member.name}'s Image`}
                  width={500}
                  height={500}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.yearCount}>
          <h1 className={styles.title}>
            16 years of innovation, passion, and dedication
          </h1>
        </div>

        <div className={styles.componentContainer}>
          <QuoteBlockRight />
        </div>
      </div>

      <div className={styles.bannerGrid}>
        <div className={styles.imageContainer}>
          <Image src={BannerGrid1} alt="Image from Coverage" className={styles.image} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={BannerGrid2} alt="Image from Coverage" className={styles.image} />
        </div>
        <div className={styles.imagimageContainere}>
          <Image src={BannerGrid3} alt="Image from Coverage" className={styles.image} />
        </div>
      </div>

      <div className={styles.componentContainer}>
        <QuoteBlockLeft />
      </div>

      <Image src={Banner} alt="Join TomasinoWeb Banner" className={styles.banner} />

      <div className={styles.coreGroup}>
        <h1 className={styles.title}>The Core Group</h1>
        <p className={styles.subtitle}>The heads of TomasinoWeb</p>
        <div className={styles.gallery}></div>
      </div>

      <div className={styles.otherTestimonies}>
        <h1 className={styles.title}>12 Months</h1>
        <p className={styles.subtitle}>of a challenging yet dynamic publication year</p>
        <div className={styles.componentContainer}>
          <QuoteBlockLeft />
          <QuoteBlockRight />
        </div>
      </div>

      <div className={styles.otherInfo}>
        <Image src={GroupPic} alt="TomasinoWeb Members" className={styles.image} />
        <div className={styles.content}>
          <p className={styles.subtitle}>
            TomasinoWeb continues to lead and innovate the modern web
          </p>
          <h1 className={styles.title}>Are you ready for it?</h1>
          <div className={styles.buttons}>
            <Buttons />
            <Buttons />
          </div>
        </div>
      </div>

      <div className={styles.footerSpace}></div>
    </Layout>
  );
}

// update titles and subtitles to have the same style
// remove footer space
