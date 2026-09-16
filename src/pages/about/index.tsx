import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { AboutShell } from "../../components/about/AboutShell";
import { SocialPostCard } from "../../components/about/SocialPostCard";
import styles from "./about.module.scss";

interface PageProps {}

const whoWeAreImages = [
  "/assets/py19/about/who-we-are/featured_1.png",
  "/assets/py19/about/who-we-are/featured_2.png",
  "/assets/py19/about/who-we-are/featured_3.png",
  "/assets/py19/about/who-we-are/featured_4.png",
];

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    footerClassName: styles.aboutFooter,
    dots: "full",

    children: (
      <AboutShell>
        <div className={styles.whoWeAre}>
          <SocialPostCard
            avatar="/logo/insignia_yellow.png"
            name="TomasinoWeb"
            images={whoWeAreImages}
            likes="1,464,381"
            caption={
              <>
                Welcome to TomasinoWeb! The premier digital media organization of the University of Santo Tomas. We
                are joined by students who are immensely interested in multimedia journalism.
                <br />
                <br />
                Its primary goal as a student publication is to deliver relevant information to the Thomasian community
                through online media.
                <br />
                <br />
                Be part of our team! 🤩
                <br />
                <span className={styles.hashtags}>#TomasinoWeb #TWRecruitment2026 #JoinTW #UST</span>
              </>
            }
          />
        </div>
      </AboutShell>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
