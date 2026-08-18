import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./AppIconShortcut.module.scss";

interface AppIconShortcutProps {
  label: string;
  icon: IconDefinition;
  href: string;
  external?: boolean;
  className?: string;
}

export const AppIconShortcut: React.FC<AppIconShortcutProps> = ({
  label,
  icon,
  href,
  external = false,
  className = "",
}) => {
  const content = (
    <>
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </div>
      <span className={styles.label}>{label}</span>
    </>
  );

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
