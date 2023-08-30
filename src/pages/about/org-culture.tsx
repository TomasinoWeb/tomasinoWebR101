import styles from "./org-culture.module.scss";

import { Layout } from "../../components/Layout";
import QuoteBlock from "../../components/QuoteBlock";
import { CultureCard } from "../../components/CultureCard";
import { Titles } from "../../components/Titles";

import Image from "next/image";
import image from "public/assets/about/culture/calls.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faQuestion,faArrowRight} from "@fortawesome/free-solid-svg-icons";

// interface TinyBoxProps {
//   border?: string;
// }
// export const TinyBox: React.FC<TinyBoxProps> = ({
// }) => {
// const TinyBox = () => {
//   return <div className={styles.box}></div>;
// };

// }

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
            <Titles title="Org Culture" >  Get in the car, Betty</Titles>
      </div>
        
            <p className={styles.p_text}>
              Let's take a quick ride as to how TomWebbers yada yada yada Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            {/* mid */}{" "}
          </div>
          {/* parent */}
        </div>
        <div className={styles.video_section}>
          <div className={styles.video_mid}>{/* video mid */} </div>
          {/* video_section */}
        </div>
        <div className={styles.stats_main}>
          <div className={styles.stats_details}>
            <h1 className={styles.header_text}>TomasinoWeb in numbers</h1>

            <div className={styles.stats_main2}>
              <div className={styles.stats_details2}>
                <h1 className={styles.header_text}>26,333,581</h1>
                <p className={styles.p_text}>
                  combined engagements across all platforms in the past year
                </p>

                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>26,333,581</h1>
                <p className={styles.p_text}>
                  combined engagements across all platforms in the past year
                </p>
                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>26,333,581</h1>
                <p className={styles.p_text}>
                  combined engagements across all platforms in the past year
                </p>
                {/* stats_details2 */}
              </div>
              {/* stats_main2 */}
            </div>

            <div className={styles.stats_main2}>
              <div className={styles.stats_details2}>
                <h1 className={styles.header_text}>26,333,581</h1>
                <p className={styles.p_text}>
                  combined engagements across all platforms in the past year
                </p>

                {/* stats_details2 */}
              </div>
              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>26,333,581</h1>
                <p className={styles.p_text}>
                  combined engagements across all platforms in the past year
                </p>
                {/* stats_details2 */}
              </div>

              <div className={`${styles.stats_details2} ${styles.margin_left}`}>
                <h1 className={styles.header_text}>26,333,581</h1>
                <p className={styles.p_text}>
                  combined engagements across all platforms in the past year
                </p>
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
            <QuoteBlock.Right
              author="Mikaela Gabrielle De Castro"
              position="Blogs Editor"
              year="2021-2024"
              image="/assets/components/Album-Placeholder.png"
              textColor="white"
            >
              “I was a wide-eyed freshman when I joined TomasinoWeb. They helped
              me develop my expertise and passion as I worked with diverse and
              like-minded people who enthusiastically dabble in storytelling,
              community development, civic engagement, and student leadership.
              With everyone's support and initiative, it is always a thrill to
              work with them in pursuit of impactful and moving conversations.”
            </QuoteBlock.Right>
            {/*  mid */}{" "}
          </div>
          {/* section */}
        </div>
        <div className={styles.culture_section}>

            <h1 className={`${styles.header_text} ${styles.margin_top_text}`}>
              Magic, madness, heaven, sins
            </h1>
            <p className={styles.p_text}>All the fun starts here</p>
                      <div className={styles.culture_mid}>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="green"
              textColor="black"
              border="none"
            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="green"
              textColor="black"
              border="none"
            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="darkblue"
              textColor="white"
              border="none"

            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="darkblue"
              textColor="white"
              
            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>
            {/* mid */}{" "}
          </div>
          {/*section */}
        </div>

        <div className={styles.testimonial_section}>
          <div className={styles.testimonial_mid}>
            <QuoteBlock.Left
              author="Mikaela Gabrielle De Castro"
              position="Blogs Editor"
              year="2021-2024"
              image="/assets/components/Album-Placeholder.png"
              textColor="white"
            >
              “I was a wide-eyed freshman when I joined TomasinoWeb. They helped
              me develop my expertise and passion as I worked with diverse and
              like-minded people who enthusiastically dabble in storytelling,
              community development, civic engagement, and student leadership.
              With everyone's support and initiative, it is always a thrill to
              work with them in pursuit of impactful and moving conversations.”
            </QuoteBlock.Left>
            {/*  mid */}{" "}
          </div>
          {/* section */}
        </div>

        <div className={styles.culture_section}>
        
            <h1 className={`${styles.header_text} ${styles.margin_top_text}`}>
              We small-talk, work and the weather
            </h1>

            <p className={styles.p_text}>And of course, the actual work</p>
            <div className={styles.culture_mid}>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="green"
              textColor="black"
              border="none"
            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="green"
              textColor="black"
              border="none"
            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="darkblue"
              textColor="white"
              border="none"

            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>
            <CultureCard
              title="Post-Coverage hangouts"
              image="/assets/components/Culture-PostCoverageHangout.png"
              backgroundColor="darkblue"
              textColor="white"
              
            >
              Where we discuss the most random of things from Antonism to Dating
              App bios. Feel free to hop in whenever you see your orgmates
              hanging out on one of the tambay lang channels.
            </CultureCard>


            {/* mid */}{" "}
          </div>
          {/*section */}
        </div>
        <div className={styles.end_background}> 
        <div className={styles.end_mid}>
        <div className={styles.end_mid_align}>
          
        <h1 className={styles.end_header}>Nice to meet you, <br></br> where you been?</h1>
        <p  className={styles.end_paragraph}>We could show you incredible thing →
        </p>  </div> 
        </div> 
        <div className={styles.end_mid_box}>
        <TinyBox noRightBorder={true} />
        <TinyBox noRightBorder={true} />
        <TinyBox noRightBorder={true} />
        <TinyBox noRightBorder={true}/>
        <TinyBox />
        </div> 
        </div>
        {/* <div className={styles.last}></div> */}
        {/* end */}
      </div>
      
    </Layout> 
  );
}
