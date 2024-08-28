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

  return (
    <div className={styles.stepContainer}>
      {(props.susuwatari === "2-left" || props.susuwatari === "2-right") && (
        <div className={`${styles.sootContainer} ${styles[sootClass]}`}>
          <Image src={Susuwatari2} alt="Susuwatari 2" className={styles.soot2} />
        </div>
      )}
      {props.susuwatari === "1-reversed" && (
        <div className={`${styles.sootContainer} ${styles[sootClass]}`}>
          <Image src={Susuwatari1} alt="Susuwatari 1" className={styles.soot1} />
        </div>
      )}
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
      {props.susuwatari === "1" && (
        <div className={`${styles.sootContainer} ${styles[sootClass]}`}>
          <Image src={Susuwatari1} alt="Susuwatari 1" className={styles.soot1} />
        </div>
      )}
    </div>
  );
}

export default AppProcessStep;
