import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import styles from "./org-culture.module.scss";
import peopleStyles from "./people/people.module.scss";
import Image from "next/image";

import RepeatingHeader from "../../components/RepeatHeader";
import RepeatingIcons from "../../components/RepeatingIcons";
import Quote from "../../components/Quote";
import AboutBox from "../../components/AboutBox";
import Arriety from "../../../public/assets/GHIBLI ICONS/arriety clip.png";
import Ootorisama from "../../../public/assets/GHIBLI ICONS/ootori sama.png";
import Jiji from "../../../public/assets/GHIBLI ICONS/jiji.png";
import Draft143 from "../../../public/assets/orgCulture/webProjects/draft143.png";
import Lamona from "../../../public/assets/orgCulture/webProjects/lamona.png";
import MainWebsite from "../../../public/assets/orgCulture/webProjects/tw.png";
import Cross from "../../../public/assets/cross.svg";
import { testimonials } from "../../data";
import ReactMarkdown from "react-markdown";
import { Button } from "../../components/Buttons";

const memberPics = [
  "/assets/orgCulture/fun/dc.png",
  "/assets/orgCulture/fun/dc.png",
  "/assets/orgCulture/fun/dc.png",
  "/assets/orgCulture/fun/dc.png",
  "/assets/orgCulture/fun/dc.png",
  "/assets/orgCulture/fun/dc.png",
  "/assets/orgCulture/fun/dc.png",
  "/assets/orgCulture/fun/pptParties.png",
];
const funStartsHere = [
  {
    src: "/assets/orgCulture/fun/postCoverageHangouts.png",
    alt: "Post-Coverage hangouts",
    title: "Post-Coverage hangouts",
    description:
      "After a fulfilling day of taking pictures, writing stories, and taking interviews, we always top the day off with good food [and drinks *wink wink*] with great company.",
    fontColor: "var(--dark-green, #38504a)",
    backgroundColor: "var(--light-cyan, #ccece4)",
    borderColor: "var(--dark-green, #38504a)",
  },
  {
    src: "/assets/orgCulture/fun/dc.png",
    alt: "Random/Sponty Discord Calls",
    title: "Random/Sponty Discord Calls",
    description:
      "Where we discuss the most random of things from Antonism to Dating App bios. Feel free to hop in whenever you see your orgmates hanging out on one of the tambay lang channels.",
    fontColor: "var(--dark-purple, #5a2d82)",
    backgroundColor: "var(--light-purple, #d6c1e9)",
    borderColor: "var(--dark-purple, #5a2d82)",
  },
  {
    src: "/assets/orgCulture/fun/pptParties.png",
    alt: "Powerpoint Parties",
    title: "Powerpoint Parties",
    description:
      "How do TomWebbers celebrate the festivities? By throwing PowerPoint Parties of course! Present the most random things and watch how your orgmates react to your content.",
    fontColor: "var(--brick-red, #b22222)",
    backgroundColor: "var(--pale-pink, #f4cccc)",
    borderColor: "var(--brick-red, #b22222)",
  },
  {
    src: "/assets/orgCulture/fun/genAssembly.jpg",
    alt: "General Assemblies",
    title: "General Assemblies",
    description:
      "The official gathering of all TomWebbers - current and alumni! This is where we discuss where we are now, and of course, where we're headed.",
    fontColor: "var(--olive-brown, #3c3421)",
    backgroundColor: "var(--light-yellow, #fffacd)",
    borderColor: "var(--olive-brown, #3c3421)",
  },
];

type Project = (typeof funStartsHere)[number];
const actWorkCards = [
  {
    src: "/assets/orgCulture/actWork/onsite.png",
    alt: "On-site Coverages",
    title: "On-site Coverages",
    description:
      "Never been to this place? Or have you already? TomasinoWeb often goes to onsite coverages where our publication reports everything on ground.",
    fontColor: "var(--dark-green, #38504a)",
    backgroundColor: "var(--light-cyan, #ccece4)",
    borderColor: "var(--dark-green, #38504a)",
  },
  {
    src: "/assets/orgCulture/actWork/virtual.png",
    alt: "Virtual Coverages",
    title: "Virtual Coverages",
    description:
      "But what if you can't join physically? What if the event is impossible to get to? That's where we convene in our virtual newsroom.",
    fontColor: "var(--dark-purple, #5a2d82)",
    backgroundColor: "var(--light-purple, #d6c1e9)",
    borderColor: "var(--dark-purple, #5a2d82)",
  },
  {
    src: "/assets/orgCulture/actWork/interactive.png",
    alt: "Interactive Meetings",
    title: "Interactive Meetings",
    description:
      "Have you ever been in a meeting where all you had to do was say yes, no, and goodbye? That won't be the case in TomasinoWeb. Your decisions and thoughts matter, no matter what meeting it is.",
    fontColor: "var(--brick-red, #b22222)",
    backgroundColor: "var(--pale-pink, #f4cccc)",
    borderColor: "var(--brick-red, #b22222)",
  },
  {
    src: "/assets/orgCulture/actWork/mentor.png",
    alt: "Mentorship and Collaboration",
    title: "Mentorship and Collaboration",
    description:
      "In TomasinoWeb, we encourage collaboration. Though it doesn't stop there! We even encourage cross-department contributions. Expand your horizons with us!",
    fontColor: "var(--olive-brown, #3c3421)",
    backgroundColor: "var(--light-yellow, #fffacd)",
    borderColor: "var(--olive-brown, #3c3421)",
  },
];

const statistics = [
  { title: "5", caption: "websites up and running for the Thomasian community" },
  { title: "25+", caption: "members doing it with a broken heart" },
  { title: "27", caption: "awards from prestigious contest & globally recognized institutions" },
  { title: "84", caption: "**(and counting!)** innovative, passionate, and dedicated members" },
  { title: "172,869", caption: "combined followers across all digital platforms" },
  { title: "7,513,308", caption: "Facebook reach in the past year" },
];

const aboutBoxContents = [
  {
    icon: Arriety,
    image: Draft143,
    title: "DRAFT 143",
    linkURL: "https://draft143.com/",
  },
  {
    icon: Ootorisama,
    image: Lamona,
    title: "LAMONA",
    linkURL: "https://www.lamona.lol/",
  },
  {
    icon: Jiji,
    image: MainWebsite,
    title: "TomasinoWeb",
    linkURL: "https://tomasinoweb.org/",
  },
];

const Video = () => {
  return (
    <iframe
      width="560"
      className={styles.video_border}
      src="https://www.youtube.com/embed/-Naoomw8gO4?si=g_hRxQNjkgICh9ov"
      frameBorder="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="no-referrer"
      allowFullScreen
    />
  );
};

const OrgCulturePage = PublicLayoutFrontend.use(() => {
  return {
    is_transparent: false,
    header: "full",
    footer_disable: false,

    children: (
      <div className={styles.body}>
        <RepeatingHeader title="ORG CULTURE" />

        <div className={styles.header}>
          <h1>
            We're gonna take you to a quick ride of what TomasinoWeb is behind the scenes. From doing org work to having
            fun, we've got it all here in our own silly world.
          </h1>

          <div className={styles.statistics}>
            {statistics.map((stat, idx) => (
              <div key={idx} className={styles.statistic}>
                <h1>{stat.title}</h1>
                <article className={styles.caption}>
                  <ReactMarkdown children={stat.caption} />
                </article>
              </div>
            ))}
          </div>
        </div>

        <RepeatingIcons />
        <div className={styles.video_container}>
          <Video />
        </div>
        <RepeatingIcons />

        <div className={styles.quote}>
          <Quote side="left" {...testimonials[5]} />
        </div>

        <div className={styles.work}>
          <div className={peopleStyles.headingContainer}>
            <div className={peopleStyles.sparkle}>
              <Image src={Cross} alt="Cross" className={peopleStyles.svg} />
              <h2>WEBSITES</h2>
              <Image src={Cross} alt="Cross" className={peopleStyles.svg} />
            </div>

            <span className={peopleStyles.subheading}>Explore some of our work</span>
          </div>

          <div className={styles.boxes}>
            {aboutBoxContents.map((data, idx) => (
              <div className={styles.box} key={idx}>
                <AboutBox {...data} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.fun}>
          <div className={styles.inner}>
            <div className={styles.heading}>
              <h1>ALL THE FUN STARTS HERE</h1>
            </div>

            <div className={styles.boxes}>
              {funStartsHere.map((fun, index) => (
                <div className={styles.box} key={index}>
                  <Project project={fun} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.quote}>
          <Quote side="right" {...testimonials[6]} />
        </div>

        <div className={styles.fun}>
          <div className={styles.inner}>
            <div className={styles.heading + " " + styles.align_right}>
              <h1>THEN WE HAVE THE ACTUAL WORK</h1>
            </div>

            <div className={styles.boxes}>
              {actWorkCards.map((fun, index) => (
                <div className={styles.box} key={index}>
                  <Project project={fun} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.cta_wrapper}>
          <div className={styles.cta}>
            <div className={styles.left}>
              {memberPics.map((member) => (
                <div className={styles.member_wrapper}>
                  <Image src={member} alt="Picture of image" width={140} height={140} className={styles.img} />
                </div>
              ))}
            </div>

            <div className={styles.right}>
              <div className={styles.inner}>
                <h1>Who are the people behind the scenes?</h1>
                <div>
                  <Button href="/about/people" theme="black_n_white" outline="small">
                    MEET OUR COMMUNITY
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };
});

function Project({ project }: { project: Project }) {
  return (
    <div
      className={styles.project}
      style={{ borderColor: project.borderColor, color: project.fontColor, backgroundColor: project.backgroundColor }}
    >
      <Image alt={project.alt} src={project.src} className={styles.image} width={300} height={250} />
      <div className={styles.bottom}>
        <div className={styles.innerContainer}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default OrgCulturePage;
