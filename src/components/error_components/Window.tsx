import styles from "./error.module.scss";

export default function Window () {
    return (
        <div className={styles.window}>
            <div className={styles.errorHeader}>404 — Page Not Found</div>
            <div className={styles.errorEmblem}>
                <svg
                    className={styles.crownIcon}
                    viewBox="0 0 88 48"
                    fill="#FFB702"
                    stroke="#000000"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M 14 42 L 74 42 L 78 8 L 67 24 L 56 6 L 44 20 L 32 6 L 21 24 L 10 8 Z" />
                </svg>
                <span>KEEP CALM</span>
            </div>
            <div className={styles.errorMessage}>
                <h2 className={styles.errorSubheader}>This story is no longer available...</h2>
                <p className={styles.errorText}>Maybe the link broke, or this story got archived. No worries! Let's scroll you back to your feed.</p>
            </div>
        </div>
    )
}

