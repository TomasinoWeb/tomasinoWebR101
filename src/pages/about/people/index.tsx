import { PublicLayoutFrontend } from "../../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../../layouts/public/static";
import RepeatingHeader from "../../../components/RepeatHeader";

import styles from "./people.module.scss";
import { Button } from "../../../components/Buttons";
import { HoverableImageFade } from "../../../components/HoverableImageFade";
import { useState } from "react";
import { coreMembers, testimonials } from "../../../data";
import Quote from "../../../components/Quote";

interface PageProps {}

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
          <Quote {...testimonials[0]} side="left" />

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
          <Quote {...testimonials[1]} side="right" />
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
          <Quote {...testimonials[2]} side="left" />
        </div>

        {/* The Core Group */}
        <section className={styles.coreSection}>
          <div className={styles.headingContainer}>
            <h2>The Core Group</h2>
            <span className={styles.subHeading}>The heads of TomasinoWeb</span>
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
                  image={"/assets/people/testimonial-bg.png"}
                  hoveredImage={"/assets/people/testimonial-bg.png"}
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

          <div>{/* Core reel py16 branch */}</div>
        </section>

        <div className={styles.container}>
          <section className={styles.headingContainer}>
            <h2>12 Months</h2>
            <span className={styles.subHeading}>of a challenging yet dynamic publication year</span>
          </section>

          {/* Testimonial 4 */}
          <Quote {...testimonials[3]} side="right" />

          {/* Testimonial 5 */}
          <Quote {...testimonials[4]} side="left" />
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
