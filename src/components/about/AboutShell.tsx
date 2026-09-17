import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUser, faTableCellsLarge, faList, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { departments } from "../../data/departments";
import { ApplicationRedirect } from "../ApplicationRedirect";
import styles from "./AboutShell.module.scss";

const faFilledGrid4: IconDefinition = {
  prefix: "fas",
  iconName: "table-cells-large",
  icon: [
    512,
    512,
    [],
    "f009",
    "M64 32h144c17.7 0 32 14.3 32 32v144c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM304 32h144c17.7 0 32 14.3 32 32v144c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 272h144c17.7 0 32 14.3 32 32v144c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32zM304 272h144c17.7 0 32 14.3 32 32v144c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32z"
  ]
};

const tabs = [
  { href: "/about", label: "Who We Are", icon: faUser, activeIcon: faUser },
  { href: "/about/departments", label: "The Department", icon: faTableCellsLarge, activeIcon: faFilledGrid4 },
  { href: "/about/life", label: "Life at TomasinoWeb", icon: faList, activeIcon: faList },
];

let globalLastTabIndicator: { left: number; width: number } | null = null;

interface AboutShellProps {
  children: React.ReactNode;
}

export function AboutShell({ children }: AboutShellProps) {
  const router = useRouter();
  const tabGridRef = React.useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>(() => {
    return globalLastTabIndicator || { left: 0, width: 0 };
  });
  const [isInitialLoad, setIsInitialLoad] = useState(!globalLastTabIndicator);

  React.useEffect(() => {
    const updateIndicator = () => {
      if (!tabGridRef.current) return;
      const activeElement = tabGridRef.current.querySelector<HTMLElement>(`.${styles.active}`);
      if (activeElement) {
        const nextStyle = {
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
        };
        globalLastTabIndicator = nextStyle;
        setIndicatorStyle(nextStyle);
        if (isInitialLoad) {
          setIsInitialLoad(false);
        }
      }
    };

    updateIndicator();
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener("resize", updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [router.pathname]);

  const isTabActive = (tabHref: string) => {
    if (tabHref === "/about") {
      return router.pathname === "/about" || router.pathname === "/about/org-culture";
    }
    return router.pathname.startsWith(tabHref);
  };

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
        <div className={styles.tabGrid} ref={tabGridRef}>
          <div
            className={styles.activeTabIndicator}
            style={{
              transform: `translate3d(${indicatorStyle.left}px, 0, 0)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.width ? 1 : 0,
              transition: isInitialLoad ? "none" : undefined,
            }}
          />
          {tabs.map((tab) => {
            const active = isTabActive(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`${styles.tab} ${active ? styles.active : ""}`}
              >
                <FontAwesomeIcon
                  icon={active && tab.activeIcon ? tab.activeIcon : tab.icon}
                  className={styles.tabIcon}
                  style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}
                />
                <span>{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
}
