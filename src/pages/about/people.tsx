import { useState } from "react";
import { Layout } from "../../components/Layout";
import styles from "./people.module.scss";

import Image from "next/image";
import Banner from "public/assets/about/people/ErasBanner.png";
import GroupPic from "public/assets/about/people/MembersGroupPic.png";
import BannerGrid1 from "public/assets/about/people/OrgWorkA.png";
import BannerGrid2 from "public/assets/about/people/OrgWorkB.png";
import BannerGrid3 from "public/assets/about/people/OrgWorkC.png";

import { Titles } from "../../components/Titles";
import { Buttons } from "../../components/Buttons";
import { QuoteBlock } from "../../components/QuoteBlock";
import { HoverableImage, HoverableImageFade } from "../../components/HoverableImage";
import { testimonials } from "../../../public/assets/data/testimonials";
import { otherMembers, coreMembers } from "../../../public/assets/data/people-data";

export default function () {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <Layout>
      <div className={styles.container} style={{ marginBottom: "60px" }}>
        <div className={styles.heading}>
          <Titles title="The People">The Swifties</Titles>
          <div className={styles.componentContainer}>
            <QuoteBlock side="left" textColor="black" testimonial={testimonials[0]} />
          </div>
        </div>

        <div className={styles.memberCount}>
          <h1 className={styles.title} style={{ textAlign: "left" }}>
            <span className={styles.titleBig}>59 TomWebbers</span>
            <span className={styles.titleSmall}>and counting!</span>
          </h1>
          <p className={styles.subtitle}>
            We're a bunch of sleep-deprived yet ambitious undergrads from different colleges and faculties.
          </p>
        </div>
      </div>

      <div className={styles.container + " " + styles.gridContainer}>
        <div className={styles.grid}>
          {otherMembers.map((member, index) => (
            <div key={index} className={styles.member}>
              <Image src={member} alt={`featured member's image`} width={500} height={500} className={styles.image} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.yearCount}>
          <h1 className={styles.title}>16 years of innovation, passion, and dedication</h1>
        </div>

        <div className={styles.componentContainer}>
          <QuoteBlock side="right" textColor="black" testimonial={testimonials[4]} />
        </div>
      </div>

      <div className={styles.bannerGrid}>
        <div className={styles.imageContainer}>
          <Image src={BannerGrid1} alt="Image from Coverage" className={styles.image} width={600} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={BannerGrid2} alt="Org room" className={styles.image} width={600} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={BannerGrid3} alt="Creatives working" className={styles.image} width={600} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.componentContainer}>
          <QuoteBlock side="left" textColor="black" testimonial={testimonials[6]} />
        </div>
      </div>

      <Image src={Banner} alt="Join TomasinoWeb Banner" className={styles.banner} />

      <div className={styles.coreGroup}>
        <h1 className={styles.title}>The Core Group</h1>
        <p className={styles.subtitle}>The heads of TomasinoWeb</p>
        <div className={styles.gallery}>
          {coreMembers.map((member, index) => (
            <div
              key={index}
              className={`${styles.member} ${expandedIndex === index ? styles.expanded : ""}`}
              onClick={() => handleMemberClick(index)}
            >
              <HoverableImageFade
                alt={`${member.name}'s Image`}
                image={member.image}
                hoveredImage={member.image}
                active
              />

              <div className={styles.shadow}></div>
              <div className={styles.content}>
                <div className={styles.innerContainer}>
                  <h1 className={styles.name}>{member.name}</h1>
                  <p className={styles.position}>{member.position}</p>
                </div>
              </div>
              <div className={styles.undershadow}></div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.otherTestimonies}>
        <div className={styles.container}>
          <h1 className={styles.title}>12 Months</h1>
          <p className={styles.subtitle}>of a challenging yet dynamic publication year</p>

          <div className={styles.componentContainer}>
            <QuoteBlock side="left" textColor="white" testimonial={testimonials[2]} />
            <QuoteBlock side="right" textColor="white" testimonial={testimonials[3]} />
          </div>
        </div>
      </div>

      <div className={styles.otherInfo}>
        <Image src={GroupPic} alt="TomasinoWeb Members" className={styles.image} />
        <div className={styles.content}>
          <p className={styles.subtitle}>TomasinoWeb continues to lead and innovate the modern web</p>
          <h1 className={styles.title}>Are you ready for it?</h1>
          <div className={styles.buttons}>
            <Buttons href="/apply">Let the games begin</Buttons>
            <Buttons href="/about/departments">Where do I fit?</Buttons>
          </div>
        </div>
      </div>
    </Layout>
  );
}
