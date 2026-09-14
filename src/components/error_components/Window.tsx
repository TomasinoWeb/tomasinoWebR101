import styles from "./error.module.scss";

import Image from "next/image";
import errorIcon from "../../../public/assets/py19/error/error_icon.png";

export default function Window () {
    return (
        <div className={styles.window}>
            <div className={styles.errorHeader}>
                <div className={styles.windowDots}>
                    <span className={styles.dot1} />
                    <span className={styles.dot2} />
                    <span className={styles.dot3} />
                </div>
                <span className={styles.headerTitle}>404 — Page Not Found</span>
            </div>
                <div className={styles.keepCalmWallContainer}>
                    <div className={styles.keepCalmWall}>
                        <div>KEEP CALM KEEP CALM KEEP CALM KEEP CALM KEEP CALM KEEP CALM</div>
                        <div>EP CALM KEEP CALM KEEP CALM KEEP CALM KEEP CALM KEEP CALM K</div>
                        <div> CALM KEEP CALM KEEP CALM KEEP CALM KEEP CALM KEEP CALM KE</div>
                        <div>LM KEEP CALM KEEP CALM KEEP CALM KEEP CALM KEEP CALM KEEP </div>
                    </div>
                    <div className={styles.mascotWrapper}>
                        <svg
                            className={styles.tiltedCrownIcon}
                            viewBox="0 0 88 48"
                            fill="#FFB300"
                            stroke="#000000"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M 14 42 L 74 42 L 78 8 L 67 24 L 56 6 L 44 20 L 32 6 L 21 24 L 10 8 Z" />
                        </svg>
                        <Image
                            src={errorIcon}
                            alt="404 Error Icon"
                            className={styles.centeredErrorIcon}
                            priority
                        />
                        <div className={styles.dinosaurShadow} />
                    </div>
                </div>
            <div className={styles.errorMessage}>
                <h2 className={styles.errorSubheader}>This story is no longer available...</h2>
                <p className={styles.errorText}>Maybe the link broke, or this story got archived. No worries! Let's scroll you back to your feed.</p>
            </div>
        </div>
    )
}

