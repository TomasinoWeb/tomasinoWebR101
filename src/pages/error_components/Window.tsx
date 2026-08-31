import styles from "./error.module.scss";

export default function Window () {
    return (
        <div className={styles.window}>
            <div className={styles.errorHeader}>404 — Page Not Found</div>
            <div className={styles.errorEmblem}>KEEP CALM</div>
            <div className={styles.errorMessage}>
                <h2 className={styles.errorSubheader}>This story is no longer available...</h2>
                <p className={styles.errorText}>Maybe the link broke, or this story got archived. No worries! Let's scroll you back to your feed.</p>
            </div>
        </div>
    )
}