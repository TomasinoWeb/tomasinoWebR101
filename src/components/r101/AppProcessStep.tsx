import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Susuwatari1 from "../../public/assets/r101/susuwatarii1.webp";
import Susuwatari2 from "../../public/assets/r101/susuwatarii2.webp";
import styles from "./AppProcessStep.module.scss";

interface AppProcessStepProps {
  step: number;
  title: string;
  description: string;
  susuwatari: "1" | "1-reversed" | "2-left" | "2-right";
  href?: string; // link to the form
}

const isDesktop = useViewportWidth(1024);
const isTablet = useViewportWidth(768);
const isMobile = useViewportWidth(768);

// Hook for checking viewport width
export function useViewportWidth(targetWidth: number) {
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

function AppProcessStep(props: AppProcessStepProps) {
  const stepClass = `step${props.step}`;
  return (
    <div className={styles.stepContainer}>
      <div className={`${styles.appProcessStep} ${styles[stepClass]}`}>
        <div className={styles.appProcessNum}>{props.step}</div>
        <div className={styles.appProcessTitle}>{props.title}</div>
        <div className={styles.appProcessDescription}>
          {props.step === 1 ? (
            <>
              Applicants must first accomplish the <Link href="#">Google Form</Link>.
            </>
          ) : (
            props.description
          )}
        </div>
      </div>
    </div>
  );
}

export default AppProcessStep;
