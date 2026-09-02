import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { AboutShell } from "./components/AboutShell";
import { SocialPostCard } from "./components/SocialPostCard";
import styles from "./about.module.scss";

interface PageProps {}

// Placeholder carousel images until the "2016 nostalgic vibe" edited photos are exported from Figma.
const whoWeAreImages = [
  "/logo/logo_yellow.png",
  "/logo/logo_black.png",
  "/logo/logo_white.png",
];

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
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
                craft high-impact web applications, interactive designs, and journalism for the Thomasian community.
                [Sample Only]
                <br />
                <br />
                Be part of our team this Academic Year! 🚀
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
