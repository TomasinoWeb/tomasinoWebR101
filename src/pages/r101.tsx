import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { useEffect, useState } from "react";
import AppProcessHeader from "../components/r101/AppProcessHeader";
import AppProcessStep from "../components/r101/AppProcessStep";
import Image from "next/image";
import Susuwatari1 from "../../public/assets/r101/susuwatarii1.webp";
import Susuwatari2 from "../../public/assets/r101/susuwatarii2.webp";
import styles from "./r101.module.scss";

const R101 = PublicLayoutFrontend.use(() => {
  const isDesktop = useViewportWidth(1024);
  const isTablet = useViewportWidth(768);
  const isMobile = useViewportWidth(768);

  // Hook for checking viewport width
  function useViewportWidth(targetWidth: number) {
    const [isWidthMet, setIsWidthMet] = useState(false);

    useEffect(() => {
      // Check if window is defined (i.e. not server-side rendering)
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setIsWidthMet(window.innerWidth >= targetWidth);
        };

        // Monitor window resize
        window.addEventListener("resize", handleResize);

        // Initial check for viewport width
        handleResize();

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, [targetWidth]);

    return isWidthMet;
  }
  return {
    footer_disable: false,
    header: "full",
    is_transparent: false,

    children: (
      <div className={styles.r101MainContainer}>
        <AppProcessHeader />
        <div className={styles.stepContainer}>
          <div className={styles.step1}>
            <AppProcessStep {...steps[0]} />
            <Image src={Susuwatari1} alt="Susuwatari 1" className={styles.soot1} />
          </div>
          <div className={styles.step2}>
            <Image src={Susuwatari2} alt="Susuwatari 2" className={styles.soot2} />
            <AppProcessStep {...steps[1]} />
          </div>
          <div className={styles.step3}>
            <AppProcessStep {...steps[2]} />
            <Image src={Susuwatari1} alt="Susuwatari 1" className={styles.soot1} />
          </div>
          <div className={styles.step4}>
            <Image src={Susuwatari2} alt="Susuwatari 2" className={styles.soot2} />
            <AppProcessStep {...steps[3]} />
          </div>
        </div>
      </div>
    ),
  };
});

const steps = [
  {
    step: 1,
    title: "APPLICATION",
    description: "Applicants must first accomplish the Google Form.",
    href: "/", // place link to form here
  },
  {
    step: 2,
    title: "TAKE THE EXAM",
    description:
      "The department examination will be sent by our Human Resources department. Skip this step if your department does not have an exam.",
  },
  {
    step: 3,
    title: "INTERVIEW",
    description:
      "After passing your requirements, the Human Resources department will send you a scheduling sheet for the interview.",
  },
  {
    step: 4,
    title: "RESULTS",
    description: "The results will be sent to you in less than a week by our Human Resources department.",
  },
];
export default R101;
