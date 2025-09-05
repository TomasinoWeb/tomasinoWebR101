import React from "react";
import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import styles from "./org-culture.module.scss";

/* Image imports */
import Image from "next/image";
import { StaticImageData } from "next/image";
import snoopyHorizontal from "../../../public/assets/about/org-culture/snoopy_horizontal.png";
import sampleCultureImage from "../../../public/assets/about/org-culture/sample_culture.png";
import snoopyImage from "../../../public/assets/about/org-culture/snoopy.png";

// other websites
import websiteLogo from "../../../public/logo/insignia_yellow.png";
import ThomScoreLogo from "../../../public/assets/about/org-culture/ThomScore_temp.jpg";
import lamonaLogo from "../../../public/assets/about/org-culture/tomwegg_temp.png";
import draft143Logo from "../../../public/assets/about/org-culture/draft143_temp.png";

// for stickercard
import comicImage from "../../../public/assets/about/org-culture/test.png";
import comicDots from "../../../public/assets/about/org-culture/dots.png";
import memberFrame from "../../../public/assets/about/org-culture/member_frame.png";

/* Other component files */
import SpeechBubble from "./components/SpeechBubble";

import Link from "next/link";
import { Button } from "../../components/Button";

/* Quote integration */
import QuoteBlock from "../../components/QuoteBlock";
import QuoteBlockImage from "../../../public/assets/about/org-culture/stamp.png";

/* 8 rn */
const stickerCardImages = [
  memberFrame,
  memberFrame,
  memberFrame,
  memberFrame,
  memberFrame,
  memberFrame,
  memberFrame,
  memberFrame,
];

const Testimonials = [
  {
    imageSrc: QuoteBlockImage.src,
    quoteText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    authorName: "Lorem Ipsum",
    authorDetails: "President",
  },
  {
    imageSrc: QuoteBlockImage.src,
    quoteText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    authorName: "Lorem Ipsum",
    authorDetails: "President",
  },
];

interface PageProps {}

const Page = PublicLayoutFrontend.use<PageProps>(() => {
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
        <section className={styles.section}>
          <div className={styles.video}>
            <div className={`${styles.characters}`}>
              <span className={`${styles.imageContainer}`}>
                <Image src={snoopyHorizontal} alt={"Snoopy Characters"} />
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
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>TomasinoWeb in numbers</h3>
          <div className={styles.statsGrid}>
            <Stat stat="4 websites" description="up and running for the Thomasian community" />
            <Stat stat="21+" description="delulus just hoping for a Paskuhan date" />
            <Stat stat={"27"} description="awards from prestigious contest & globally recognized institutions" />
            <Stat stat={"59"} description="(and counting!) innovative, passionate, and dedicated members" />
            <Stat stat={"165,402"} description="(and counting!) innovative, passionate, and dedicated members" />
            <Stat stat={"9,050,600"} description="X (formerly Twitter) impressions in the past year" />
          </div>
        </section>

        {/* Happy Dances */}
        <section className={`${styles.section} ${styles.notebook}`}>
          <SpeechBubble
            primaryText="Cue the happy dances..."
            secondaryText="All the fun starts here!"
            snoopyImage={snoopyImage}
          />
          <span className={styles.cultureCards}>
            <CultureCard
              title="Post-Coverage Hangouts"
              description="After a fulfilling day of taking pictures, writing stories, and taking interviews, we always top the day off with good food [and drinks *wink wink*] with great company."
              image={sampleCultureImage}
              bgColor="var(--neutral-white)"
            />
            <CultureCard
              title="Virtual Coverages"
              description="But what if you can't join physically? What if the event is impossible to get to? That's where we convene in our virtual newsroom."
              image={sampleCultureImage}
              bgColor="var(--secondary-light-blue, #BFEBFF)"
            />
            <CultureCard
              title="Interactive Meetings"
              description="Have you ever been in a meeting where all you had to do was say yes, no, and goodbye? That won't be the case in TomasinoWeb. Your decisions and thoughts matter, no matter what meeting it is."
              image={sampleCultureImage}
              bgColor="var(--secondary-light-yellow)"
            />
            <CultureCard
              title="Mentorship and Collaboration"
              description="In TomasinoWeb, we encourage collaborations. Though it doesn't stop there! We even encourage cross-department contributions. Expand your horizons with us!"
              image={sampleCultureImage}
              bgColor="var(--primary-lightbrown-yellow)"
            />
          </span>
        </section>

        <section className={styles.section}>
          <SpeechBubble
            primaryText="Our Little Masterpieces"
            secondaryText="Snoop around our websites"
            snoopyImage={snoopyImage}
          />
          <div className={styles.otherWebsites}>
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
          {/* Testimonials here */}
          {/* These could be converted to an iterator if it needs to be a lot */}

          <QuoteBlock
            imageSrc={Testimonials[0].imageSrc}
            quoteText={Testimonials[0].quoteText}
            authorName={Testimonials[0].authorName}
            authorDetails={Testimonials[0].authorDetails}
            imagePosition={"left"}
          />

          <QuoteBlock
            imageSrc={Testimonials[1].imageSrc}
            quoteText={Testimonials[1].quoteText}
            authorName={Testimonials[1].authorName}
            authorDetails={Testimonials[1].authorDetails}
            imagePosition={"right"}
          />
        </section>

        {/* Happy Dances */}
        <section className={`${styles.section} ${styles.notebook}`}>
          <SpeechBubble
            primaryText="NEXT UP: MAKING THINGS HAPPEN"
            secondaryText="Of course, the actual work..."
            snoopyImage={snoopyImage}
          />
          <span className={styles.cultureCards}>
            <CultureCard
              title="Post-Coverage Hangouts"
              description="After a fulfilling day of taking pictures, writing stories, and taking interviews, we always top the day off with good food [and drinks *wink wink*] with great company."
              image={sampleCultureImage}
              bgColor="var(--neutral-white)"
            />
            <CultureCard
              title="Virtual Coverages"
              description="But what if you can't join physically? What if the event is impossible to get to? That's where we convene in our virtual newsroom."
              image={sampleCultureImage}
              bgColor="var(--secondary-light-blue, #BFEBFF)"
            />
            <CultureCard
              title="Interactive Meetings"
              description="Have you ever been in a meeting where all you had to do was say yes, no, and goodbye? That won't be the case in TomasinoWeb. Your decisions and thoughts matter, no matter what meeting it is."
              image={sampleCultureImage}
              bgColor="var(--secondary-light-yellow)"
            />
            <CultureCard
              title="Mentorship and Collaboration"
              description="In TomasinoWeb, we encourage collaborations. Though it doesn't stop there! We even encourage cross-department contributions. Expand your horizons with us!"
              image={sampleCultureImage}
              bgColor="var(--primary-lightbrown-yellow)"
            />
          </span>
        </section>

        <section className={`${styles.section} ${styles.comic}`} style={{ backgroundImage: `url(${comicImage.src})` }}>
          <Image className={styles.comicImage} src={comicDots} alt={"dot filter"}></Image>
          <div className={styles.bgFilterOverlay} />
          <div className={styles.stickerCard}>
            <span className={styles.frames}>
              {stickerCardImages.map((img, i) => (
                <div className={styles.imageContainer} key={`portrait_${i}`}>
                  <Image src={img} alt={"portrait"} />
                </div>
              ))}
            </span>
            <h1>Behind every great story, is a great crew</h1>
            <Button className={styles.button} variant="rectangle" href={"/about/people"}>
              Meet the Dream Team
            </Button>
          </div>
        </section>
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
        style={{ "--notebook-background-color ": props.bgColor } as React.CSSProperties}
      >
        <section
          className={styles.notebook}
          style={{ "--notebook-background-color ": props.bgColor } as React.CSSProperties}
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
