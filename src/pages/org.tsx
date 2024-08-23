import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import styles from "./orgCulture.module.scss";
import Image from "next/image";
import RepeatingHeader from "../components/RepeatHeader";
import RepeatingIcons from "../components/RepeatingIcons";

import { FaArrowRight } from "react-icons/fa";

const lamona = "/assets/orgCulture/webProjects/lamona.png";
const draft143 = "/assets/orgCulture/webProjects/draft143.png";
const tw = "/assets/orgCulture/webProjects/tw.png";

const dc = "/assets/orgCulture/fun/dc.png";
const genAssembly = "/assets/orgCulture/fun/genAssembly.jpg";
const postCoverage = "/assets/orgCulture/fun/postCoverageHangouts.png";
const pptParties = "/assets/orgCulture/fun/pptParties.png";

const projectCards = [
  {
    src: postCoverage,
    alt: "Post-Coverage hangouts",
    title: "Post-Coverage hangouts",
    description:
      "After a fulfilling day of taking pictures, writing stories, and taking interviews, we always top the day off with good food [and drinks *wink wink*] with great company.",
    fontColor: "var(--dark-green, #38504a)",
    backgroundColor: "var(--light-cyan, #ccece4)",
    borderColor: "var(--dark-green, #38504a)",
  },
  {
    src: dc,
    alt: "Random/Sponty Discord Calls",
    title: "Random/Sponty Discord Calls",
    description:
      "Where we discuss the most random of things from Antonism to Dating App bios. Feel free to hop in whenever you see your orgmates hanging out on one of the tambay lang channels.",
    fontColor: "var(--dark-purple, #5a2d82)",
    backgroundColor: "var(--light-purple, #d6c1e9)",
    borderColor: "var(--dark-purple, #5a2d82)",
  },
  {
    src: pptParties,
    alt: "Powerpoint Parties",
    title: "Powerpoint Parties",
    description:
      "How do TomWebbers celebrate the festivities? By throwing PowerPoint Parties of course! Present the most random things and watch how your orgmates react to your content.",
    fontColor: "var(--brick-red, #b22222)",
    backgroundColor: "var(--pale-pink, #f4cccc)",
    borderColor: "var(--brick-red, #b22222)",
  },
  {
    src: genAssembly,
    alt: "General Assemblies",
    title: "General Assemblies",
    description:
      "The official gathering of all TomWebbers - current and alumni! This is where we discuss where we are now, and of course, where we're headed.",
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
  { name: "DRAFT 143", src: draft143, alt: "web projects" },
  { name: "LAMONA", src: lamona, alt: "web projects" },
  { name: "TomasinoWeb", src: tw, alt: "web projects" },
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
            <h1 className={`${styles["header"]}`}>ALL THE FUN STARTS HERE</h1>
            <div className={styles["layout-card-projects"]}>
              {projectCards.map((project, index) => (
                <div
                  className={styles["card-projects"]}
                  key={index}
                  style={{
                    backgroundColor: project.backgroundColor,
                    borderColor: project.borderColor,
                  }}
                >
                  <Image
                    className={styles["card-projects-image"]}
                    src={project.src}
                    alt={project.alt}
                    width={300}
                    height={200}
                  />
                  <h3
                    className={styles["fun-text-title"]}
                    style={{
                      color: project.fontColor,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={styles["fun-text"]}
                    style={{
                      color: project.fontColor,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* END OF ALL THE FUN STARTS HERE */}
        {/* TESTIMONIALS */}
        TESTIMONIALS
        <div className={styles["org-culture"]}></div>
        {/* ACTUAL WORK */}
        {/* END OF ACTUAL WORK */}
        {/* END OF MAIN */}
        {/* BEHIND THE SCENES */}
        {/* END OF BEHIND THE SCENES */}
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<OrgPageProps>({});
