import QuoteBlock from "../../components/QuoteBlock";
import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { Testimonials } from "./org-culture";
import styles from "./people.module.scss";
import Left from "../../../public/assets/about/the-people/Left.png";
import Center from "../../../public/assets/about/the-people/Center.png";
import Right from "../../../public/assets/about/the-people/Right.png";
import Image from "next/image";
import Link from "next/link";
import websiteLogo from "../../../public/logo/insignia_yellow.png";
import ThomScoreLogo from "../../../public/assets/about/org-culture/ThomScore_temp.jpg";
import lamonaLogo from "../../../public/assets/about/org-culture/tomwegg_temp.png";
import draft143Logo from "../../../public/assets/about/org-culture/draft143_temp.png";
import comicImage from "../../../public/assets/about/org-culture/test.png";
import comicDots from "../../../public/assets/about/org-culture/dots.png";
import { HoverableImageFade } from "../../components/HoverableImageFade";
import { useState } from "react";
import { Button } from "../../components/Button";

interface PageProps {}

const coreMembers = [
  {
    name: "Miguel Angelo Sumalinog",
    position: "President",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Kurt Alec Mira",
    position: "Executive Vice President",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Romeo B. Peralta III",
    position: "Executive Secretary",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Candice Anne Bago",
    position: "VP for Finance",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Ferica Rodriguez",
    position: "VP for Human Resources",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Ashley Manaog",
    position: "VP for Publicity and Communications",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Mary Jade Jadormio",
    position: "Executive Editor",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Patricia Lumenario",
    position: "Managing Editor",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Lance Bernardino",
    position: "Chief Photographer",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Charrise Suni",
    position: "Asst. Chief Photographer",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Erimae Lopez",
    position: "Creative Director",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Radiance Parayno",
    position: "Asst. Creative Director",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Andrea Dayo",
    position: "Chief Technology Officer",
    image: "/assets/about/the-people/expanded.png",
  },
  {
    name: "Lance Gulinao",
    position: "Asst. Chief Technology Officer",
    image: "/assets/about/the-people/expanded.png",
  },
];

const pictures = [
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
  "/assets/about/org-culture/member_frame.png",
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
          <QuoteBlock
            imageSrc={Testimonials[0].imageSrc}
            quoteText={Testimonials[0].quoteText}
            authorName={Testimonials[0].authorName}
            authorDetails={Testimonials[0].authorDetails}
            imagePosition={"left"}
          />

          <div className={styles.members}>
            <div className={styles.rail}>
              <h1>81 TOMWEBBERS</h1>
              <h2>(and counting!)</h2>
            </div>

            <h2>We're a bunch of sleep-deprived yet ambitious undergrads from different colleges and faculties.</h2>

            <div className={styles.pictures}>
              {pictures.map((p, i) => (
                <div className={styles.picture} key={i}>
                  <img src={p} alt={`Picture ${i}`} className={styles.pictureImage} />
                </div>
              ))}
            </div>
          </div>

          <h2>18 years of innovation, passion, and dedication</h2>

          <div className={styles.first}>
            <QuoteBlock
              imageSrc={Testimonials[0].imageSrc}
              quoteText={Testimonials[0].quoteText}
              authorName={Testimonials[0].authorName}
              authorDetails={Testimonials[0].authorDetails}
              imagePosition={"right"}
            />
          </div>

          <div className={styles.org_images}>
            <Image src={Left} alt="Left" className={styles.left} />
            <Image src={Center} alt="Center" className={styles.center} />
            <Image src={Right} alt="Right" className={styles.right} />
          </div>

          <div className={styles.testimonial}>
            <QuoteBlock
              imageSrc={Testimonials[0].imageSrc}
              quoteText={Testimonials[0].quoteText}
              authorName={Testimonials[0].authorName}
              authorDetails={Testimonials[0].authorDetails}
              imagePosition={"left"}
            />
          </div>

          <p>This comic is presented to you by...</p>
          <div className={styles.comics}>
            <Link href={"https://tomasinoweb.org/"} className={`${styles.website} ${styles.imageContainer}`}>
              <Image src={websiteLogo} alt="main website" />
            </Link>
            <Link href={"https://lamona.lol"} className={`${styles.website} ${styles.imageContainer}`}>
              <Image src={lamonaLogo} alt="lamona" />
            </Link>
            <Link href={"https://draft143.com"} className={`${styles.website} ${styles.imageContainer}`}>
              <Image src={draft143Logo} alt="draft143" />
            </Link>
            <Link href={"https://uaap.tomasinoweb.org/"} className={`${styles.website} ${styles.imageContainer}`}>
              <Image src={ThomScoreLogo} alt="Thomscore" />
            </Link>
          </div>
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

            <div className={styles.testimonial}>
              <QuoteBlock
                imageSrc={Testimonials[0].imageSrc}
                quoteText={Testimonials[0].quoteText}
                authorName={Testimonials[0].authorName}
                authorDetails={Testimonials[0].authorDetails}
                imagePosition={"left"}
              />
            </div>

            <div className={styles.testimonial} style={{ marginBottom: 0 }}>
              <QuoteBlock
                imageSrc={Testimonials[0].imageSrc}
                quoteText={Testimonials[0].quoteText}
                authorName={Testimonials[0].authorName}
                authorDetails={Testimonials[0].authorDetails}
                imagePosition={"right"}
              />
            </div>
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
