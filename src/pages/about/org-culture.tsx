import styles from "./org-culture.module.scss";

import { Layout } from "../../components/Layout";
import { QuoteBlock } from "../../components/QuoteBlock";
import { CultureCard } from "../../components/orgCultureComponents/CultureCard";
import { CultureStats } from "../../components/orgCultureComponents/CultureStats";
import { Titles } from "../../components/Titles";

import Link from "next/link";

import Image from "next/image";
import image from "public/assets/about/culture/calls.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faQuestion, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "../../../public/assets/data/testimonials";
import { statistics } from "../../../public/assets/data/statistics";

import YouTubeThumbnail from '../../components/orgCultureComponents/YoutubeThumbnail';

interface TinyBoxProps {
  noRightBorder?: boolean;
}

const TinyBox: React.FC<TinyBoxProps> = ({ noRightBorder }) => {
  const boxClass = `${styles.box} ${noRightBorder ? styles.none : null}`;

  return <div className={boxClass}></div>;
};

export default function () {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.parent}>
          <div className={styles.mid}>
            <div className={styles.header_text}>
              <Titles title="Org Culture"> Get in the car, Betty</Titles>
            </div>
            <p className={styles.p_text}>
              We're gonna take you to a quick ride of what TomasinoWeb is behind the scenes. From doing org work to
              having fun, we've got it all here in our own silly world.
            </p>
            <p className={styles.p_text_italic}>
              Don't blame us, org made us crazy, if it doesn't, you ain't doin' it right
            </p>
            {/* mid */}{" "}
          </div>
          {/* parent */}
        </div>
        <div className={styles.video_section}>
          <div className={styles.video_mid}>
            {/* <iframe
              width="560"
              height="100%"
              src={`https://www.youtube.com/embed/m6fCTVsMmS8?si=3hORnKNYZmhen7xW?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
             <YouTubeThumbnail videoId="m6fCTVsMmS8" />
            {/* video mid */}{" "}
          </div>
          {/* video_section */}
        </div>
        <div className={styles.stats_main}>
          <div className={styles.stats_details}>
            <h1 className={styles.header_text}>TomasinoWeb in numbers</h1>

            <div className={styles.stats_main2}>
              <div className={styles.stats_details2}>
                <CultureStats statistics={statistics[0]} />
                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <CultureStats statistics={statistics[1]} />

                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <CultureStats statistics={statistics[2]} />

                {/* stats_details2 */}
              </div>
              {/* stats_main2 */}
            </div>

            <div className={styles.stats_main2}>
              <div className={styles.stats_details2}>
                <CultureStats statistics={statistics[3]} />
                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <CultureStats statistics={statistics[4]} />
                {/* stats_details2 */}
              </div>

              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <CultureStats statistics={statistics[5]} />
                {/* stats_details2 */}
              </div>
              {/* stats_main2 */}
            </div>

            {/* stats_main */}
          </div>
          {/* stats_details */}
        </div>
        <div className={styles.testimonial_section}>
          <div className={styles.testimonial_mid}>
            <QuoteBlock testimonial={testimonials[1]} textColor="white" side="right" />
            {/*  mid */}{" "}
          </div>
          {/* section */}
        </div>
        <div className={styles.culture_section}>
          <h1 className={`${styles.header_text} ${styles.margin_top_text}`}>Magic, madness, heaven, sins</h1>
          <p className={styles.p_text}>All the fun starts here</p>
          <div className={styles.culture_mid}>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/about/culture/Culture-PostCoverageHangout.png"
              backgroundColor="beige"
              textColor="black"
              border="none"
            >
              After a fulfilling day of taking pictures, writing stories, and taking interviews, we always top the day
              off with good food [and drinks *wink wink*] with great company.
            </CultureCard>
            <CultureCard
              title="Random/Sponty Discord Calls"
              image="/assets/about/culture/Culture-Meetings.png"
              backgroundColor="red"
              textColor="white"
              border="none"
            >
              Where we discuss the most random of things from "Antonism" to Dating App bios. Feel free to hop in
              whenever you see your orgmates hanging out on one of the "tambay lang" channels.
            </CultureCard>
            <CultureCard
              title="PowerPoint 
              Parties"
              image="/assets/about/culture/Culture-PPT.png"
              backgroundColor="purple"
              textColor="black"
              border="none"
            >
              How do TomWebbers celebrate the festivities? By throwing PowerPoint Parties of course! Present the most
              random things and watch how your orgmates react to your content.
            </CultureCard>
            <CultureCard
              title="General 
              Assemblies"
              image="/assets/about/culture/Culture-GenAss.png"
              backgroundColor="darkgray"
              textColor="white"
            >
              The official gathering of all TomWebbers - current and alumni! This is where we discuss where we are now,
              and of course, where we're headed.
            </CultureCard>
            {/* mid */}{" "}
          </div>
          {/*section */}
        </div>

        <div className={styles.testimonial_section}>
          <div className={styles.testimonial_mid}>
            <QuoteBlock testimonial={testimonials[5]} textColor="white" side="right" />
            {/*  mid */}{" "}
          </div>
          {/* section */}
        </div>

        <div className={styles.culture_section}>
          <h1 className={`${styles.header_text} ${styles.margin_top_text}`}>We small-talk, work and the weather</h1>

          <p className={styles.p_text}>And of course, the actual work</p>
          <div className={styles.culture_mid}>
            <CultureCard
              title="On-site 
              Coverages"
              image="/assets/about/culture/OnSite.jpeg"
              backgroundColor="black"
              textColor="white"
              border="none"
            >
              Never been to this place? Or have you already? TomasinoWeb often goes to onsite coverages where our
              publication reports everything on ground.
            </CultureCard>
            <CultureCard
              title="Virtual 
              Coverages"
              image="/assets/about/culture/VirtualCoverages.jpeg"
              backgroundColor="lightblue"
              textColor="black"
              border="none"
            >
              But what if you can't join physically? What if the event is impossible to get to? That's where we convene
              in our virtual newsroom.
            </CultureCard>
            <CultureCard
              title="Interactive 
              Meetings"
              image="/assets/about/culture/InteractiveMeetings.jpeg"
              backgroundColor="darkblue"
              textColor="white"
              border="none"
            >
              Have you ever been in a meeting where all you had to do was say yes, no, and goodbye? That won't be the
              case in TomasinoWeb. Your decisions and thoughts matter, no matter what meeting it is.
            </CultureCard>
            <CultureCard
              title="Mentorship and Collaboration"
              image="/assets/about/culture/mentor.png"
              backgroundColor="green"
              textColor="black"
            >
              In TomasinoWeb, we encourage collaborations. Though it doesn't stop there! We even encourage
              cross-department contributions. Expand your horizons with us!
            </CultureCard>
            {/* mid */}{" "}
          </div>
          {/*section */}
        </div>
        <div className={styles.end_background}>
          <div className={styles.end_mid}>
            <div className={styles.end_mid_align}>
              <h1 className={styles.end_header}>
                Nice to meet you, <br></br> where you been?
              </h1>
              <Link href="/about/people">
                <span className={styles.end_paragraph}>We could show you incredible things →</span>
              </Link>
            </div>
          </div>
          <div className={styles.end_mid_box}>
            <TinyBox noRightBorder={true} />
            <TinyBox noRightBorder={true} />
            <TinyBox noRightBorder={true} />
            <TinyBox noRightBorder={true} />
            <TinyBox />
          </div>
        </div>
        {/* <div className={styles.last}></div> */}
        {/* end */}
      </div>
    </Layout>
  );
}
