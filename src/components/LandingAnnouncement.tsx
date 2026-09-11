import { useEffect } from "react";
import styles from "./LandingAnnouncement.module.scss";

interface LandingAnnouncementProps {
  onClose: () => void;
}

export default function LandingAnnouncement({ onClose }: LandingAnnouncementProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Announcement"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.posterFrame}>
          <img
            src="/assets/py19/about/widget-pics/MAIN%20POSTER_.png"
            alt="Announcement"
            className={styles.image}
          />
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close announcement">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}