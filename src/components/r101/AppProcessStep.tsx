import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Susuwatari1 from "../../../public/assets/r101/susuwatarii1.webp";
import Susuwatari2 from "../../../public/assets/r101/susuwatarii2.webp";
import styles from "./AppProcessStep.module.scss";
import { isDesktop, isMobile, isTablet } from "./checkWidth";

interface AppProcessStepProps {
  step: number;
  title: string;
  description: string;
  susuwatari: "1" | "1-reversed" | "2-left" | "2-right";
  href?: string; // link to the form
}

function AppProcessStep(props: AppProcessStepProps) {
  const stepClass = `step${props.step}`;
  const sootClass = `soot-${props.susuwatari}`;
  const sootImg = props.susuwatari === "1" || props.susuwatari === "1-reversed" ? Susuwatari1 : Susuwatari2;
  const sootImgClass = props.susuwatari === "1" || props.susuwatari === "1-reversed" ? styles.soot1 : styles.soot2;

  return (
    <div className={`${styles.stepContainer} ${props.susuwatari === "1" ? styles.stepContainerReversed : ""}`}>
      <div className={`${styles.sootContainer} ${styles[sootClass]}`}>
        <Image src={sootImg} alt="Susuwatari 2" className={sootImgClass} />
      </div>
      <div className={`${styles.appProcessStep} ${styles[stepClass]}`}>
        <div className={styles.appProcessNum}>{props.step}</div>
        <div className={styles.appProcessTitle}>{props.title}</div>
        <div className={styles.appProcessDescription}>
          {props.step === 1 ? (
            <>
              Applicants must first accomplish the <Link href={`${props.href}`}>Google Form</Link>.
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
