import React from "react";
import { createPublicPage } from "../../layouts/public/frontend";
import styles from "./org-culture.module.scss";

/* Image imports */
import Image from "next/image";
import { StaticImageData } from "next/image";

// other websites
import ThomScoreLogo from "../../../public/assets/about/org-culture/thomscore.png";
import LamonaLogo from "../../../public/assets/about/org-culture/lamona.png";
import Draft143Logo from "../../../public/assets/about/org-culture/draft143.png";
import MWRLogo from "../../../public/assets/about/org-culture/tw.png";

import ImageInteractive from "../../../public/assets/about/org-culture/actWork/interactive.png";
import ImageMentor from "../../../public/assets/about/org-culture/actWork/mentor.png";
import ImageOnsite from "../../../public/assets/about/org-culture/actWork/onsite.png";
import ImageVirtual from "../../../public/assets/about/org-culture/actWork/virtual.png";

import ImageDiscord from "../../../public/assets/about/org-culture/fun/dc.png";
import ImageGeneralAssembly from "../../../public/assets/about/org-culture/fun/genAssembly.jpg";
import ImagePostCoverage from "../../../public/assets/about/org-culture/fun/postCoverageHangouts.png";
import ImagePPT from "../../../public/assets/about/org-culture/fun/pptParties.png";

// for stickercard
import comicImage from "../../../public/assets/about/org-culture/test.png";
import comicDots from "../../../public/assets/about/org-culture/dots.png";

/* Other component files */
import SpeechBubble from "./components/SpeechBubble";

import Link from "next/link";
import { Button } from "../../components/Button";

/* Quote integration */
import QuoteBlock from "../../components/QuoteBlock";
import { createPublicStaticProps } from "../../layouts/public/static";
import { testimonials } from "../../data/testimonials";
import ToraTomwegg from "../../../public/assets/tomweggs/ToraTomweggVer1.png";
import Dancing from "../../../public/assets/tomweggs/Dancing.png";
import Love from "../../../public/assets/tomweggs/Love.png";
import Tongue from "../../../public/assets/tomweggs/Tongue.png";
import { FadeIn } from "../../components/FadeIn";

const stickerCardImages = [
  "/assets/featuredMembers/member-frame-2.png",
  "/assets/featuredMembers/member-frame-6.png",
  "/assets/featuredMembers/member-frame-7.png",
  "/assets/featuredMembers/member-frame-11.png",
  "/assets/featuredMembers/member-frame-9.png",
  "/assets/featuredMembers/member-frame-10.png",
  "/assets/featuredMembers/member-frame-8.png",
  "/assets/featuredMembers/member-frame-12.png",
];
interface PageProps {}

const Page = createPublicPage<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",

    children: (
      <div className={styles.root}>
        {/* Maybe we could make this a component? */}
        <section className={`${styles.hero}`}>
          <h2 className={styles.pageTitle}>ORG CULTURE</h2>
          <p className={styles.pageDescription}>
            Hop in for a quick ride behind the scenes of TomasinoWeb, where the work is real, the fun is louder, and the
            world’s just a little sillier.
          </p>
          <p className={styles.pageDescription}>It’s the crew that laughs, works, and doodles too!</p>
        </section>

        <section className={`${styles.section} ${styles.spacer}`}>
          <div className={styles.video}>
            <div className={`${styles.characters}`}>
              <span className={`${styles.imageContainer}`}>
                <Image src={ToraTomwegg} alt={"Snoopy Characters"} />
              </span>
            </div>

            <div className={styles.videoContainer}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-Naoomw8gO4"
                title="YouTube video player"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope;  picture-in-picture; web-share"
                className={styles.videoScreen}
              />
            </div>
          </div>

          <FadeIn>
            <h3 className={styles.sectionTitle}>TomasinoWeb in numbers</h3>
            <div className={styles.statsGrid}>
              <Stat stat="6 websites" description="up and running for the Thomasian community" />
              <Stat stat="21+" description="delulus just hoping for a Paskuhan date" />
              <Stat stat="29" description="awards from prestigious contests & globally recognized institutions" />
              <Stat stat="81" description="(and counting!) innovative, passionate, and dedicated members" />
              <Stat stat="194,000+" description="combined followers across all digital platforms" />
              <Stat stat="9,050,600" description="X (formerly Twitter) impressions in the past year" />
            </div>
          </FadeIn>
        </section>

        {/* Happy Dances */}
        <div className={`${styles.notebook} ${styles.spacer}`}>
          <section className={`${styles.section}`}>
            <SpeechBubble
              primaryText="Cue the happy dances..."
              secondaryText="All the fun starts here!"
              snoopyImage={Dancing}
            />
            <FadeIn>
              <span className={styles.cultureCards}>
                <CultureCard
                  title="Post-Coverage hangouts"
                  description="After a fulfilling day of taking pictures, writing stories, and taking interviews, we always top the day off with good food [and drinks *wink wink*] with great company."
                  image={ImagePostCoverage}
                  bgColor="var(--neutral-white)"
                />
                <CultureCard
                  title="Random/Sponty Discord Calls"
                  description="Where we discuss the most random of things from Antonism to Dating App bios. Feel free to hop in whenever you see your orgmates hanging out on one of the tambay lang channels."
                  image={ImageDiscord}
                  bgColor="var(--secondary-light-blue, #BFEBFF)"
                />
                <CultureCard
                  title="PowerPoint Parties"
                  description="How do TomWebbers celebrate the festivities? By throwing PowerPoint Parties of course! Present the most random things and watch how your orgmates react to your content."
                  image={ImagePPT}
                  bgColor="var(--secondary-light-yellow)"
                />
                <CultureCard
                  title="General Assemblies"
                  description="The official gathering of all TomWebbers - current and alumni! This is where we discuss where we are now, and of course, where we're headed."
                  image={ImageGeneralAssembly}
                  bgColor="var(--primary-lightbrown-yellow)"
                />
              </span>
            </FadeIn>
          </section>
        </div>

        <section className={`${styles.section} ${styles.spacer}`}>
          <SpeechBubble
            primaryText="Our Little Masterpieces"
            secondaryText="Snoop around our websites"
            snoopyImage={Love}
          />
          <FadeIn>
            <div className={styles.otherWebsites}>
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

          <FadeIn>
            <div className={styles.testimonial}>
              <QuoteBlock testimonial={testimonials[2]} />
            </div>
          </FadeIn>

          <FadeIn>
            <div className={styles.testimonial}>
              <QuoteBlock testimonial={testimonials[1]} imagePosition="right" />
            </div>
          </FadeIn>
        </section>

        <div className={`${styles.notebook} ${styles.spacer}`}>
          <section className={`${styles.section}`}>
            <SpeechBubble
              primaryText="NEXT UP: MAKING THINGS HAPPEN"
              secondaryText="Of course, the actual work..."
              snoopyImage={Tongue}
            />
            <FadeIn>
              <span className={styles.cultureCards}>
                <CultureCard
                  title="On-site Coverages"
                  description="Never been to this place? Or have you already? TomasinoWeb often goes to onsite coverages where our publication reports everything on ground."
                  image={ImageOnsite}
                  bgColor="var(--neutral-white)"
                />
                <CultureCard
                  title="Virtual Coverages"
                  description="But what if you can't join physically? What if the event is impossible to get to? That's where we convene in our virtual newsroom."
                  image={ImageVirtual}
                  bgColor="var(--secondary-light-blue, #BFEBFF)"
                />
                <CultureCard
                  title="Interactive Meetings"
                  description="Have you ever been in a meeting where all you had to do was say yes, no, and goodbye? That won't be the case in TomasinoWeb. Your decisions and thoughts matter, no matter what meeting it is."
                  image={ImageInteractive}
                  bgColor="var(--secondary-light-yellow)"
                />
                <CultureCard
                  title="Mentorship and Collaboration"
                  description="In TomasinoWeb, we encourage collaborations. Though it doesn't stop there! We even encourage cross-department contributions. Expand your horizons with us!"
                  image={ImageMentor}
                  bgColor="var(--primary-lightbrown-yellow)"
                />
              </span>
            </FadeIn>
          </section>
        </div>

        <div className={styles.comic}>
          <Image className={styles.bruh} src={comicImage} alt={"comic"} />
          <Image className={styles.overdots} src={comicDots} alt={"dot filter"} />

          <div className={styles.ctaOverlay}>
            <section className={`${styles.cta}`}>
              <h1 className={styles.mobile}>Behind every great story, is a great crew</h1>

              <div className={styles.left}>
                <span className={styles.frames}>
                  {stickerCardImages.map((img, i) => (
                    <div className={styles.member} key={`portrait_${i}`}>
                      <Image src={img} alt={"portrait"} width={512} height={512} />
                    </div>
                  ))}
                </span>
              </div>

              <div className={styles.right}>
                <h1>Behind every great story, is a great crew</h1>

                <div className={styles.rail}>
                  <Button className={styles.button} variant="rectangle" href={"/about/people"}>
                    Meet the Dream Team
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    ),
  };
});

/* Components */
/* Might move this into separate files (if needed) */

type StatProps = {
  stat: string;
  description: string;
};

const Stat = (props: StatProps) => {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{props.stat.toUpperCase()}</span>
      <span className={styles.statLabel}>{props.description}</span>
    </div>
  );
};

type CultureCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  bgColor?: string;
};

const CultureCard = (props: CultureCardProps) => {
  return (
    <div className={styles.cultureCard}>
      <section className={styles.imageContainer}>
        <Image src={props.image} alt={props.title} className={styles.cardImage} />
      </section>

      <section
        className={styles.bottom}
        style={{ "--notebook-background-color": props.bgColor } as React.CSSProperties}
      >
        <section
          className={styles.notebook}
          style={{ "--notebook-background-color": props.bgColor } as React.CSSProperties}
        >
          <div className={styles.cardTitle}>
            <h4 className={styles.title}>{props.title}</h4>
          </div>

          <p className={`${styles.cardDescription} ${styles.notebookText}`}>{props.description}</p>
        </section>
      </section>
    </div>
  );
};

export default Page;

export const getStaticProps = createPublicStaticProps<PageProps>({});
