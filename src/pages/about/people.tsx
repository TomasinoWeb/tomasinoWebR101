import { useState } from "react";
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
import QuoteBlock from "../../components/QuoteBlock";

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
    name: "Claire Ann Arce",
    image: "/assets/about/people/core/Vice President for External Affairs.png",
  },
  {
    name: "Aelijah Jolie Jacer",
    image: "/assets/about/people/core/Vice President for Human Resources.png",
  },
  {
    name: "Jan Carlo Zamora",
    image: "/assets/about/people/core/President.png",
  },
  {
    name: "Danial Dale Santos",
    image: "/assets/about/people/core/Chief Technology Officer.png",
  },
  {
    name: "Kyle Erimae Lopez",
    image: "/assets/about/people/core/Creative Director.png",
  },
  {
    name: "Eric Eugene Rosales",
    image: "/assets/about/people/core/Executive Vice President.png",
  },
  {
    name: "Reiniel Lawrence Razo",
    image: "/assets/about/people/core/Chief Videographer.png",
  },
  {
    name: "Miguel Angelo Sumalinog",
    image: "/assets/about/people/core/Chief Photographer.png",
  },
];

const coreMembers = [
  {
    name: "Jan Carlo Zamora",
    position: "President",
    image: "/assets/about/people/core/President.png",
  },
  {
    name: "Eric Eugene Rosales",
    position: "Executive Vice President",
    image: "/assets/about/people/core/Executive Vice President.png",
  },
  {
    name: "Maria Celestine Guerrero",
    position: "Executive Secretary",
    image: "/assets/about/people/core/Secretary.png",
  },
  {
    name: "Claire Ann Arce",
    position: "VP for External Affairs",
    image: "/assets/about/people/core/Vice President for External Affairs.png",
  },
  {
    name: "Berlice Cudia",
    position: "VP for Fincance",
    image: "/assets/about/people/core/Vice President for Finance.png",
  },
  {
    name: "Aelijah Jolie Jacer",
    position: "VP for Human Resources",
    image: "/assets/about/people/core/Vice President for Human Resources.png",
  },
  {
    name: "Miguel Angelo Sumalinog",
    position: "Chief Photographer",
    image: "/assets/about/people/core/Chief Photographer.png",
  },
  {
    name: "Phillip Josef Perez",
    position: "Asst. Chief Photographer",
    image: "/assets/about/people/core/Assistant Chief Photographer.png",
  },
  {
    name: "Reiniel Lawrence Razo",
    position: "Chief Videographer",
    image: "/assets/about/people/core/Chief Videographer.png",
  },
  {
    name: "Kyle Erimae Lopez",
    position: "Creative Director",
    image: "/assets/about/people/core/Creative Director.png",
  },
  {
    name: "Iris Mirzi Cardenas",
    position: "Asst. Creative Director",
    image: "/assets/about/people/core/Assistant Creative Director.png",
  },
  {
    name: "Danial Dale Santos",
    position: "Chief Technology Officer",
    image: "/assets/about/people/core/Chief Technology Officer.png",
  },
  {
    name: "Julia Melle Pascua",
    position: "Asst. Chief Technology Officer",
    image: "/assets/about/people/core/Assistant Chief Technology Officer.jpg",
  },
];

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
      <div className={styles.container}>
        <div className={styles.heading}>
          <Titles title="The People">The Swifties</Titles>
          <div className={styles.componentContainer}>
            <QuoteBlock.Left
              author="Mikaela Gabrielle De Castro"
              position="Blogs Editor"
              year="2021-2024"
              image="/assets/components/Album-Placeholder.png"
              textColor="black"
            >
              “I was a wide-eyed freshman when I joined TomasinoWeb. They helped me
              develop my expertise and passion as I worked with diverse and like-minded
              people who enthusiastically dabble in storytelling, community development,
              civic engagement, and student leadership. With everyone's support and
              initiative, it is always a thrill to work with them in pursuit of impactful
              and moving conversations.”
            </QuoteBlock.Left>
          </div>
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
          <QuoteBlock.Right
            author="Mikaela Gabrielle De Castro"
            position="Blogs Editor"
            year="2021-2024"
            image="/assets/components/Album-Placeholder.png"
            textColor="black"
          >
            “I was a wide-eyed freshman when I joined TomasinoWeb. They helped me develop
            my expertise and passion as I worked with diverse and like-minded people who
            enthusiastically dabble in storytelling, community development, civic
            engagement, and student leadership. With everyone's support and initiative, it
            is always a thrill to work with them in pursuit of impactful and moving
            conversations.”
          </QuoteBlock.Right>
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

      <div className={styles.container}>
        <div className={styles.componentContainer}>
          <QuoteBlock.Left
            author="Mikaela Gabrielle De Castro"
            position="Blogs Editor"
            year="2021-2024"
            image="/assets/components/Album-Placeholder.png"
            textColor="black"
          >
            “I was a wide-eyed freshman when I joined TomasinoWeb. They helped me develop
            my expertise and passion as I worked with diverse and like-minded people who
            enthusiastically dabble in storytelling, community development, civic
            engagement, and student leadership. With everyone's support and initiative, it
            is always a thrill to work with them in pursuit of impactful and moving
            conversations.”
          </QuoteBlock.Left>
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
              className={`${styles.member} ${
                expandedIndex === index ? styles.expanded : ""
              }`}
              onClick={() => handleMemberClick(index)}
            >
              <Image
                src={member.image}
                alt={`${member.name}'s Image`}
                width={500}
                height={500}
                className={styles.image}
              />
              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <h1 className={styles.name}>{member.name}</h1>
                <p className={styles.position}>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.otherTestimonies}>
        <h1 className={styles.title}>12 Months</h1>
        <p className={styles.subtitle}>of a challenging yet dynamic publication year</p>
        <div className={styles.componentContainer}>
          <QuoteBlock.Left
            author="Mikaela Gabrielle De Castro"
            position="Blogs Editor"
            year="2021-2024"
            image="/assets/components/Album-Placeholder.png"
            textColor="white"
          >
            “I was a wide-eyed freshman when I joined TomasinoWeb. They helped me develop
            my expertise and passion as I worked with diverse and like-minded people who
            enthusiastically dabble in storytelling, community development, civic
            engagement, and student leadership. With everyone's support and initiative, it
            is always a thrill to work with them in pursuit of impactful and moving
            conversations.”
          </QuoteBlock.Left>
          <QuoteBlock.Right
            author="Mikaela Gabrielle De Castro"
            position="Blogs Editor"
            year="2021-2024"
            image="/assets/components/Album-Placeholder.png"
            textColor="white"
          >
            “I was a wide-eyed freshman when I joined TomasinoWeb. They helped me develop
            my expertise and passion as I worked with diverse and like-minded people who
            enthusiastically dabble in storytelling, community development, civic
            engagement, and student leadership. With everyone's support and initiative, it
            is always a thrill to work with them in pursuit of impactful and moving
            conversations.”
          </QuoteBlock.Right>
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
            <Buttons href="/">Let the games begin</Buttons>
            <Buttons href="/">Where do I fit?</Buttons>
          </div>
        </div>
      </div>

      <div className={styles.footerSpace}></div>
    </Layout>
  );
}

// update titles and subtitles to have the same style
// remove footer space
