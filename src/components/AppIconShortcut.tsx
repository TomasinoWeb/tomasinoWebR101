import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./AppIconShortcut.module.scss";
import { ApplicationRedirect } from "./ApplicationRedirect";

interface AppIconShortcutProps {
  label: string;
  icon?: IconDefinition;
  iconSrc?: string;
  href: string;
  external?: boolean;
  application?: boolean;
  className?: string;
}

export const AppIconShortcut: React.FC<AppIconShortcutProps> = ({
  label,
  icon,
  iconSrc,
  href,
  external = false,
  application = false,
  className = "",
}) => {
  const content = (
    <>
      <div className={styles.iconBox}>
        {iconSrc ? (
          <img src={iconSrc} alt="" className={`${styles.icon} ${styles.assetIcon}`} />
        ) : icon ? (
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        ) : null}
      </div>
      <span className={styles.label}>{label}</span>
    </>
  );

  if (application) {
    return (
      <ApplicationRedirect className={`${styles.shortcut} ${className}`}>
        {content}
      </ApplicationRedirect>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.shortcut} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${styles.shortcut} ${className}`}>
      {content}
    </Link>
  );
};
