import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import styles from "./orgCulture.module.scss";
import Image from "next/image";
import RepeatingHeader from "../components/RepeatHeader";
import RepeatingIcons from "../components/RepeatingIcons";
import ProjectCards from "../components/OCProjectCards";
import { FaArrowRight } from "react-icons/fa";
const projectCards = [
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
      "In TomasinoWeb, we encourage collaborations. Though it doesn't stop there! We even encourage cross-department contributions. Expand your horizons with us!",
    fontColor: "var(--olive-brown, #3c3421)",
    backgroundColor: "var(--light-yellow, #fffacd)",
    borderColor: "var(--olive-brown, #3c3421)",
  },
];
const data = [
  { title: "5 Websites", caption: "up and running for the Thomasian community" },
  { title: "21+", caption: "delulus just hoping for a Paskuhan date" },
  { title: "27", caption: "awards from prestigious contest & globally recognized institutions" },
  { title: "59", caption: "(and counting!) innovative, passionate, and dedicated members" },
  { title: "165,402", caption: "combined followers across all digital platforms" },
  { title: "9,050,600", caption: "X (formerly Twitter) impressions in the past year" },
];
const webProjects = [
  { name: "DRAFT 143", src: "/assets/orgCulture/webProjects/draft143.png", alt: "web projects" },
  { name: "LAMONA", src: "/assets/orgCulture/webProjects/lamona.png", alt: "web projects" },
  { name: "TomasinoWeb", src: "/assets/orgCulture/webProjects/tw.png", alt: "web projects" },
];

interface OrgPageProps {}
export default PublicLayoutFrontend.use(() => {
  return {
    children: (
      <div>
        <RepeatingHeader title="ORG CULTURE" />
        <div className={styles["org-culture"]}>
          <h4 className={styles["title-caption"]}>
            We're gonna take you to a quick ride of what TomasinoWeb is behind the scenes. From doing org work to having
            fun, we've got it all here in our own silly world.
          </h4>{" "}
          <div className={`${styles["row"]} ${styles["row-ach"]}`}>
            {data.map((item, index) => (
              <div className={styles["column"]} key={index}>
                <h1 className={styles["text-3xl"]}>{item.title}</h1>
                <h6 className={styles["text-caption"]}>{item.caption}</h6>
              </div>
            ))}
          </div>
        </div>
        {/* END OF ORG CULTURE */}
        {/* VIDEO */}
        <RepeatingIcons />
        <div className={`${styles["org-culture"]} ${styles["video"]}`}>
          <iframe
            width="560"
            height="315"
            className={`${styles["video-border"]}`}
            src="https://www.youtube.com/embed/-Naoomw8gO4?si=g_hRxQNjkgICh9ov"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <RepeatingIcons />
        {/* END OF VIDEO */}
        {/* TESTIMONIALS */}
        <p>Testimonials</p>
        {/* END OF TESTIMONIALS */}
        {/* PROJECTS */}
        <div className={styles["org-culture"]}>
          <h1 className={`${styles["header"]}`}>PROJECTS</h1>
          <h4 className={styles["sub-header"]}>Explore our work</h4>
          <div className={`${styles["row-projects"]}`}>
            {" "}
            {webProjects.map((project, index) => (
              <div key={index}>
                <div className={styles["card-web"]}>
                  <p className={styles["card-projects-text"]}>{project.name}</p>
                  <FaArrowRight />
                </div>
                <Image
                  className={styles["card-web-image"]}
                  src={project.src}
                  alt={project.alt}
                  width={395}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
        {/* ALL THE FUN STARTS HERE */}
        <div className={`${styles["fun-layout"]} `}>
          <div className={`${styles["fun"]}`}>
            <h1 className={`${styles["header"]}`}>ALL THE FUN STARTS HERE</h1>{" "}
            <ProjectCards projectCards={projectCards} />
          </div>
        </div>
        {/* END OF ALL THE FUN STARTS HERE */}
        {/* TESTIMONIALS */}
        TESTIMONIALS
        {/* ACTUAL WORK */}
        <div className={`${styles["fun-layout"]} `}>
          <div className={`${styles["actWork"]}`}>
            <h1 className={`${styles["header"]}`}>Then we have the actual work</h1>{" "}
            <ProjectCards projectCards={actWorkCards} />
          </div>
        </div>
        {/* END OF ACTUAL WORK */}
        {/* BEHIND THE SCENES */}{" "}
        <div className={styles["org-culture"]}>
          <div className={`${styles["behind-scene-row"]} `}>
            <div className={`${styles["inside"]} `}>
              <div className={`${styles["behind-scene-images"]} `}></div>
              <div className={`${styles["behind-scene-images"]} `}></div>
              <div className={`${styles["behind-scene-images"]} `}></div>{" "}
              <div className={`${styles["behind-scene-images"]} `}></div>{" "}
              <div className={`${styles["behind-scene-images"]} `}></div>{" "}
              <div className={`${styles["behind-scene-images"]} `}></div>{" "}
              <div className={`${styles["behind-scene-images"]} `}></div>{" "}
              <div className={`${styles["behind-scene-images"]} `}></div>{" "}
            </div>
            <div className={`${styles["behind-scene-column"]} `}>
              <h4 className={styles["behind-scene-text"]}>Who are the people behind the scenes?</h4>

              <button className={` ${styles["behind-scene-button"]}`}>Meet our Community</button>
            </div>
          </div>
        </div>
        {/* END OF BEHIND THE SCENES */}
        {/* END OF MAIN */}
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<OrgPageProps>({});
