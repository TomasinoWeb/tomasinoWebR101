import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import RepeatingHeader from "../../components/RepeatHeader";
import Testimonial from "./Testimonial";

import styles from "./people.module.scss";
import { Button } from "../../components/Buttons";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  const testimonials = [
    {
      imageSrc: "/assets/people/zamora.png",
      text: (
        <p>
          During my stay in <span className={styles.tomWebBold}>TomasinoWeb</span>, I've had the biggest honor and
          privilege of making other “student leaders” and even “administrative officials” cry and, on some extreme
          instances, ousted because of their incompetence, mediocrity, and/or abuse of discretion. Good times. Would
          recommend.
        </p>
      ),
      name: "Jan Carlo Zamora",
      about: "President, PY 2022 - 2024",
    },
    {
      imageSrc: "/assets/people/ocampo-kanav.png",
      text: (
        <p>
          When I joined <span className={styles.tomWebBold}>TomasinoWeb</span> in 2013 as a freshman from the College of
          Commerce, I was initially intimidated by the expertise and bold ideas of my fellow members across different
          departments—from writing, creatives, and photography to web development and videography. But as I continued to
          participate in the organization's events and activities, I eventually gained confidence and found my place
          within the org. Reflecting now, I realized that as a business student, being part of TomWeb and surrounded by
          TomWebbers fostered my creativity and tech-based problem-solving skills far more than any other organization
          at UST could have.
        </p>
      ),
      name: "Julia Colette C. Ocampo-Kanav",
      about: "Executive Vice President, PY 2016 - 2017",
    },
    {
      imageSrc: "/assets/people/mira.png",
      text: (
        <p>
          I once wrote album reviews for BINI and Alamat when they each had fewer than 200,000 Spotify monthly
          listeners. If you're a blogs writer who bleeds pop culture, whatever you write is instrumental to driving the
          conversation forward.
        </p>
      ),
      name: "Kurt Alec Mira",
      about: "Executive Vice President , PY 2024 - 2025",
    },
    {
      imageSrc: "/assets/people/giva.png",
      text: (
        <>
          <p>
            Last year I feared that joining <span className={styles.tomWebBold}>TomasinoWeb</span> would jeopardize my
            academics. However, among the few organizations I've joined, TomWeb has been one where I was able to balance
            my studies and organizational commitments.
          </p>{" "}
          <p>
            I was intimidated by the prospect of working with highly skilled individuals. But as a member now, the
            people and culture made me feel comfortable and encouraged to learn beyond my comfort zone. It fostered my
            creativity, accountability, and most of all, humility. TomasinoWeb embodies professionalism with a heart.
          </p>
        </>
      ),
      name: "Zeandarra Gaile Giva",
      about: "UI/UX Designer, PY 2023-2025",
    },
    {
      imageSrc: "/assets/people/tria.png",
      text: (
        <p>
          <span className={styles.tomWebBold}>TomasinoWeb</span> provided a platform for me to channel my passion for
          storytelling through film. It was both a delight and an honor to capture Thomasian stories, filled with rich
          narratives, context, and emotion. Without a doubt, TomWeb excels at connecting with and engaging audiences by
          bringing their unique experiences to life.
        </p>
      ),
      name: "Anthony Tria",
      about: "Chief Videographer, PY 2021-2022",
    },
  ];

  return {
    header: "full",
    footer_disable: false,
    is_transparent: false,

    children: (
      <div className={styles.peoplePage}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <header>
            <RepeatingHeader title="The&nbsp;People" />
          </header>
          <p>
            Get to know the individuals who make it all happen. Together, they bring our ideas to life and drive our
            mission forward with passion and dedication.
          </p>
        </section>

        <div className={styles.container}>
          {/* Testimonial 1 */}
          <Testimonial {...testimonials[0]} />

          {/* Member count and photos */}
          <section>
            <div className={styles.sectionHeadingWithSub}>
              <h2>84&nbsp;Tomwebbers</h2>
              <span className={styles.subHeading}>and counting!</span>
            </div>
            <p style={{ marginTop: "24px" }}>
              We're a bunch of sleep-deprived yet ambitious undergrads from different colleges and faculties.
            </p>

            <div className={styles.imageGrid}>
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
              <div className={styles.imageBox} />
            </div>
          </section>

          {/* Testimonial 2 */}
          <Testimonial {...testimonials[1]} invertOnLarge={true} />
        </div>

        {/* Year count */}
        <section>
          <div className={`${styles.sectionHeadingWithSub} ${styles.yearsSection}`}>
            <h2>17 Years</h2>
            <span className={styles.subHeading}>of innovation, passion, and dedication</span>
          </div>

          <div className={styles.showcaseImageContainer}>
            <img
              className={styles.showcaseImage}
              src="/assets/people/showcase-1.jpg"
              alt="Image of a man filming or capturing a moment"
            />
            <img
              className={styles.showcaseImage}
              src="/assets/people/showcase-2.jpg"
              alt="Image of people in UST Paskuhan"
            />
            <img
              className={styles.showcaseImage}
              src="/assets/people/showcase-3.jpg"
              alt="Image of a man talking to videography team"
            />
          </div>
        </section>

        {/* Testimonial 3 */}
        <div className={styles.container}>
          <Testimonial {...testimonials[2]} />
        </div>

        {/* The Core Group */}
        <section className={styles.coreSection}>
          <div className={styles.headingContainer}>
            <h2>The Core Group</h2>
            <span className={styles.subHeading}>The heads of TomasinoWeb</span>
          </div>

          <div>{/* Core reel py16 branch */}</div>
        </section>

        <div className={styles.container}>
          <section className={styles.headingContainer}>
            <h2>12 Months</h2>
            <span className={styles.subHeading}>of a challenging yet dynamic publication year</span>
          </section>

          {/* Testimonial 4 */}
          <Testimonial {...testimonials[3]} invertOnLarge={true} />

          {/* Testimonial 5 */}
          <Testimonial {...testimonials[4]} />
        </div>

        {/* CTA - Call to action */}
        <section className={styles.ctaContainer}>
          <div className={styles.ctaBody}>
            <p>Are you ready to innovate and lead the modern web?</p>
            <Button href="/" theme="black_n_white" customClasses={styles.ctaButton}>
              WHAT'S IT LIKE IN TW?
            </Button>
          </div>

          <div className={styles.ctaImageContainer}>
            <img
              className={styles.ctaImage}
              src="/assets/people/cta-image.png"
              alt="Group photo of TomasinoWeb members"
            />
          </div>
        </section>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
