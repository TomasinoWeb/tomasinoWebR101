import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTableCells, faList, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { departments } from "../../../data/departments";
import styles from "./AboutShell.module.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <div className={`${styles.shell} ${inter.variable}`}> 
      <div className={`${styles.header} ${inter.variable}`}>
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
              <span className={styles.statValue}>81+</span>
              <span className={styles.statLabel}>members</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>29</span>
              <span className={styles.statLabel}>awards</span>
            </div>
          </div>

          <Link href="/apply" className={styles.joinUs}>
            Join Us
            <FontAwesomeIcon icon={faChevronRight} className={styles.joinUsIcon} />
          </Link>

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

        <nav className={styles.tabBar}>
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`${styles.tab} ${router.pathname === tab.href ? styles.active : ""}`}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span>{tab.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
