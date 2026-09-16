import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTableCells, faList, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { departments } from "../../data/departments";
import { ApplicationRedirect } from "../ApplicationRedirect";
import styles from "./AboutShell.module.scss";

const tabs = [
  { href: "/about", label: "Who We Are", icon: faUser },
  { href: "/about/departments", label: "The Department", icon: faTableCells },
  { href: "/about/life", label: "Life at TomasinoWeb", icon: faList },
];

interface AboutShellProps {
  children: React.ReactNode;
}

export function AboutShell({ children }: AboutShellProps) {
  const router = useRouter();

  return (
    <div className={styles.shell}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image
              src="/logo/insignia_yellow.png"
              alt="TomasinoWeb"
              width={80}
              height={80}
              className={styles.imgavatar}
            />
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{departments.length}</span>
              <span className={styles.statLabel}>departments</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>85</span>
              <span className={styles.statLabel}>members</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>29+</span>
              <span className={styles.statLabel}>awards</span>
            </div>
          </div>

          <ApplicationRedirect className={styles.joinUs}>
            Join Us
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.joinUsIcon}
              style={{ width: "12px", height: "12px", minWidth: "12px", minHeight: "12px" }}
            />
          </ApplicationRedirect>

          <div className={styles.bio}>
            <p className={styles.bioName}>TomasinoWeb</p>
            <p className={styles.bioDescription}>
              The premier digital media organization of the University of Santo Tomas.
            </p>
            <p className={styles.hashtags}>#TomasinoWeb #UST</p>
            <a href="https://www.tomasinoweb.org" target="_blank" rel="noreferrer">
              www.tomasinoweb.org
            </a>
          </div>
        </div>

      </div>
      <nav className={styles.tabBar} style={{ maxHeight: "47px", overflow: "hidden" }}>
        <div className={styles.tabGrid}>
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`${styles.tab} ${router.pathname === tab.href ? styles.active : ""}`}
            >
              <FontAwesomeIcon
                icon={tab.icon}
                className={styles.tabIcon}
                style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
              />
              <span>{tab.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
}
