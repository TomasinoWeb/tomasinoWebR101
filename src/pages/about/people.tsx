import QuoteBlock from "../../components/QuoteBlock";
import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import styles from "./people.module.scss";
import Left from "../../../public/assets/about/the-people/Left.png";
import Center from "../../../public/assets/about/the-people/Center.png";
import Right from "../../../public/assets/about/the-people/Right.png";
import Image from "next/image";
import Link from "next/link";
import ThomScoreLogo from "../../../public/assets/about/org-culture/thomscore.png";
import LamonaLogo from "../../../public/assets/about/org-culture/lamona.png";
import Draft143Logo from "../../../public/assets/about/org-culture/draft143.png";
import MWRLogo from "../../../public/assets/about/org-culture/tw.png";
import comicImage from "../../../public/assets/about/org-culture/test.png";
import comicDots from "../../../public/assets/about/org-culture/dots.png";
import { HoverableImageFade } from "../../components/HoverableImageFade";
import { useState } from "react";
import { Button } from "../../components/Button";
import { testimonials } from "../../data/testimonials";
import { FadeIn } from "../../components/FadeIn";

interface PageProps {}

const coreMembers = [
  {
    name: "Charisse Suni",
    position: "President",
    image: "/assets/about/the-people/core/p.png",
  },
  {
    name: "Jessica Siega",
    position: "Executive Secretary",
    image: "/assets/about/the-people/core/sec.png",
  },
  {
    name: "Florian Venturina",
    position: "VP for Finance",
    image: "/assets/about/the-people/core/fin.png",
  },
  {
    name: "Andrea Figarola",
    position: "VP for Human Resources",
    image: "/assets/about/the-people/core/hr.png",
  },
  {
    name: "Paula Martinez",
    position: "VP for Community Development",
    image: "/assets/about/the-people/core/commdev.png",
  },
  {
    name: "Liana Ortega",
    position: "Executive Editor",
    image: "/assets/about/the-people/core/execed.png",
  },
  {
    name: "Elisse Arzadon",
    position: "Managing Editor",
    image: "/assets/about/the-people/core/maned.png",
  },
  {
    name: "Joaquin Balolong",
    position: "Chief Photographer",
    image: "/assets/about/the-people/core/cp.png",
  },
  {
    name: "Shuhei De Belen",
    position: "Asst. Chief Photographer",
    image: "/assets/about/the-people/core/acp.png",
  },
  {
    name: "Candice Samonte",
    position: "Chief Videographer",
    image: "/assets/about/the-people/core/cv.png",
  },
  {
    name: "James Romero",
    position: "Asst. Chief Videographer",
    image: "/assets/about/the-people/core/acv.png",
  },
  {
    name: "Rayven Laurel",
    position: "Creative Director",
    image: "/assets/about/the-people/core/cd.png",
  },
  {
    name: "Danielle Mantes",
    position: "Asst. Creative Director",
    image: "/assets/about/the-people/core/acd.png",
  },
  {
    name: "Lance Gulinao",
    position: "Chief Technology Officer",
    image: "/assets/about/the-people/core/cto.png",
  },
  {
    name: "Zeandarra Giva",
    position: "Asst. Chief Technology Officer",
    image: "/assets/about/the-people/core/acto.png",
  },
];

const pictures = [
  "/assets/featuredMembers/member-frame-0.png",
  "/assets/featuredMembers/member-frame-3.png",
  "/assets/featuredMembers/member-frame-17.png",
  "/assets/featuredMembers/member-frame-16.png",
  "/assets/featuredMembers/member-frame-4.png",
  "/assets/featuredMembers/member-frame-5.png",
  "/assets/featuredMembers/member-frame-15.png",
  "/assets/featuredMembers/member-frame-1.png",
  "/assets/featuredMembers/member-frame-14.png",
  "/assets/featuredMembers/member-frame-13.png",
];

export default PublicLayoutFrontend.use<PageProps>(() => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",

    children: (
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <h2 className={styles.pageTitle}>THE PEOPLE</h2>
            <p className={styles.pageDescription}>
              Behind every brilliant idea, fun design, and witty caption is a bunch of dreamers with big hearts and
              bigger imaginations. Say hello to the lovable cast behind our little universe.
            </p>
            {/* <p className={styles.pageDescription}>It’s the crew that laughs, works, and doodles too!</p> */}
          </div>
        </section>

        <section className={styles.section}>
          <QuoteBlock testimonial={testimonials[5]} />

          <div className={styles.members}>
            <div className={styles.rail}>
              <h1>81 TOMWEBBERS</h1>
              <h2>(and counting!)</h2>
            </div>

            <h2>We're a bunch of sleep-deprived yet ambitious undergrads from different colleges and faculties.</h2>

            <div className={styles.pictures}>
              {pictures.map((p, i) => (
                <div className={styles.picture} key={i}>
                  <Image src={p} alt={`Picture ${i}`} width={256} height={256} className={styles.pictureImage} />
                </div>
              ))}
            </div>
          </div>

          <h2>18 years of innovation, passion, and dedication</h2>

          <div className={styles.first}>
            <QuoteBlock testimonial={testimonials[4]} imagePosition="right" />
          </div>

          <div className={styles.org_images}>
            <Image src={Left} alt="Left" className={styles.left} />
            <Image src={Center} alt="Center" className={styles.center} />
            <Image src={Right} alt="Right" className={styles.right} />
          </div>

          <div className={styles.testimonial}>
            <QuoteBlock testimonial={testimonials[0]} />
          </div>

          <FadeIn>
            <p className={styles.p}>This comic is presented to you by...</p>
            <div className={styles.comics}>
              <Link href={"https://tomasinoweb.org/"} className={`${styles.website} ${styles.imageContainer}`}>
                <Image src={MWRLogo} alt="main website" />
              </Link>
              <Link href={"https://lamona.lol"} className={`${styles.website} ${styles.imageContainer}`}>
                <Image src={LamonaLogo} alt="lamona" />
              </Link>
              <Link href={"https://draft143.com"} className={`${styles.website} ${styles.imageContainer}`}>
                <Image src={Draft143Logo} alt="draft143" />
              </Link>
              <Link href={"https://uaap.tomasinoweb.org/"} className={`${styles.website} ${styles.imageContainer}`}>
                <Image src={ThomScoreLogo} alt="Thomscore" />
              </Link>
            </div>
          </FadeIn>
        </section>

        <section className={styles.coreSection}>
          <div className={styles.headingContainer}>
            <div className={styles.sparkle}>
              <h2>The Core Group</h2>
            </div>

            <span className={styles.subheading}>The heads of TomasinoWeb</span>
          </div>

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
        </section>

        <div className={styles.notebook}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <h2>12 Months</h2>
              <p>of a challenging yet dynamic publication year</p>
            </div>

            <FadeIn>
              <div className={styles.testimonial}>
                <QuoteBlock testimonial={testimonials[3]} imagePosition="right" />
              </div>
            </FadeIn>
            <FadeIn>
              <div className={styles.testimonial} style={{ marginBottom: 0 }}>
                <QuoteBlock testimonial={testimonials[6]} />
              </div>
            </FadeIn>
          </div>
        </div>

        <div className={styles.cta}>
          <Image className={styles.bruh} src={comicImage} alt={"comic"} />
          <Image className={styles.overdots} src={comicDots} alt={"dot filter"} />

          <div className={styles.ctaOverlay}>
            <div className={styles.receipt}>
              <div className={styles.header}></div>

              <div className={styles.paper}>
                <p>TomasinoWeb continues</p>
                <p>to lead and innovate the modern web</p>

                <h2>Are you ready to be part of the Good Ol' Crew?</h2>
                <Button href="/about/org-culture" variant="rectangle" maxWidth>
                  WHAT'S IT LIKE IN PLANET TOMWEB??
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
