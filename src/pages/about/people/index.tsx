import { PublicLayoutFrontend } from "../../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../../layouts/public/static";
import RepeatingHeader from "../../../components/RepeatHeader";

import styles from "./people.module.scss";
import { Button } from "../../../components/Buttons";
import { HoverableImageFade } from "../../../components/HoverableImageFade";
import { useState } from "react";
import { coreMembers, testimonials } from "../../../data";
import Quote from "../../../components/Quote";
import Cross from "../../../../public/assets/cross.svg";
import MJ from "../../../../public/assets/people/showcase-2.jpg";
import Suma from "../../../../public/assets/people/showcase-1.jpg";
import Bordas from "../../../../public/assets/members/bordas.png";
import Bunyi from "../../../../public/assets/members/bunyi.png";
import Cootauco from "../../../../public/assets/members/cootauco.png";
import Cajucom from "../../../../public/assets/members/cajucom.png";
import Entrata from "../../../../public/assets/members/entrata.png";
import Cabral from "../../../../public/assets/members/cabral.png";
import Palma from "../../../../public/assets/members/palma.png";
import Pascua from "../../../../public/assets/members/pascua.png";
import Perote from "../../../../public/assets/members/perote.png";
import Villaescusa from "../../../../public/assets/members/villaescusa.png";
import Art from "../../../../public/assets/people/showcase-3.jpg";
import CtaImage from "../../../../public/assets/people/cta-image.png";
import Image from "next/image";
import { FadeIn } from "../../../components/FadeIn";
import Stairs from "../../../components/transition/Stairs";

const MemberImages = [Bordas, Bunyi, Pascua, Cootauco, Cajucom, Entrata, Palma, Perote, Villaescusa, Cabral];
const ShowcaseImages = [Suma, MJ, Art];

interface PageProps {}

function Heading({ heading, subheading }: { heading: string; subheading: string }) {
  return (
    <header className={styles.headingComponent}>
      <span className={styles.heading}>{heading}</span>
      <span className={styles.subheading}>{subheading}</span>
    </header>
  );
}

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
      <Stairs>
        <div className={styles.peoplePage}>
          <header className={styles.header}>
            <RepeatingHeader title="THE PEOPLE" />

            <FadeIn>
              <h1 className={styles.description}>
                Get to know the individuals who make it all happen. Together, they bring our ideas to life and drive our
                mission forward with passion and dedication
              </h1>
            </FadeIn>
          </header>

          <div className={styles.quote}>
            <FadeIn>
              <Quote {...testimonials[0]} side="left" />
            </FadeIn>
          </div>

          <div className={styles.member_feature}>
            <FadeIn>
              <Heading heading="84 TOMWEBBERS" subheading="and counting!" />

              <p className={styles.member_feature_description}>
                We're a bunch of sleep-deprived yet ambitious undergrads from different colleges and faculties.{" "}
              </p>

              <div className={styles.member_grid}>
                {MemberImages.map((staticImage, index) => (
                  <div className={styles.member} key={index}>
                    <Image src={staticImage} alt="Image" className={styles.image} />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className={styles.quote}>
            <FadeIn>
              <Quote {...testimonials[1]} side="right" />
            </FadeIn>
          </div>

          <div className={styles.showcase}>
            <FadeIn>
              <div className={styles.showcase_header}>
                <Heading heading="17 YEARS" subheading="of innovation, passion, and dedication" />
              </div>

              <div className={styles.showcase_image_wrapper}>
                <div className={styles.showcase_images}>
                  {ShowcaseImages.map((staticImage, index) => (
                    <div className={styles.showcase_image + " " + (index === 1 ? styles.center : "")} key={index}>
                      <Image src={staticImage} className={styles.img} alt="Image" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className={styles.quote}>
            <FadeIn>
              <Quote {...testimonials[2]} side="left" />
            </FadeIn>
          </div>

          <section className={styles.coreSection}>
            <div className={styles.headingContainer}>
              <div className={styles.sparkle}>
                <Image src={Cross} alt="Cross" className={styles.svg} />
                <h2>THE CORE GROUP</h2>
                <Image src={Cross} alt="Cross" className={styles.svg} />
              </div>

              <span className={styles.subheading}>The heads of TomasinoWeb</span>
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
                    image={member.image}
                    hoveredImage={member.image}
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
          </section>

          <div className={styles.headingContainer}>
            <FadeIn>
              <div className={styles.sparkle}>
                <h2>12 MONTHS</h2>
              </div>

              <span className={styles.subheading}>of a challenging yet dynamic publication year</span>
            </FadeIn>
          </div>

          <div className={styles.quote}>
            <FadeIn>
              <Quote {...testimonials[3]} side="right" />
            </FadeIn>
          </div>

          <div className={styles.quote}>
            <FadeIn>
              <Quote {...testimonials[4]} side="left" />
            </FadeIn>
          </div>

          <div className={styles.cta_wrapper}>
            <FadeIn>
              <div className={styles.cta}>
                <div className={styles.left}>
                  <h1>Are you ready to innovate and lead the modern web?</h1>

                  <div>
                    <Button href="/about/org-culture" theme="black_n_white" outline="small">
                      WHAT'S IT LIKE IN TW?
                    </Button>
                  </div>
                </div>

                <div className={styles.right}>
                  <Image src={CtaImage} alt="Call to action image" className={styles.cta_image} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Stairs>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
