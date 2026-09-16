import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './GlobalNavigator.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faClipboardList, faComment, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { ApplicationRedirect, applicationUrl } from './ApplicationRedirect';

export interface NavTabItem {
  id: string;
  label: string;
  href: string;
}

interface GlobalNavigatorProps {
  tabs?: NavTabItem[];
}

const defaultTabs: NavTabItem[] = [
  { id: 'HOME', label: 'HOME', href: '/' },
  { id: 'ABOUT', label: 'ABOUT', href: '/about' },
  { id: 'R101', label: 'R101', href: '/r101' },
  { id: 'FAQS', label: 'FAQS', href: '/faqs' },
  { id: 'APPLY', label: 'APPLY', href: applicationUrl }
];

const tabIcons: { [key: string]: any } = {
  HOME: faHouse,
  ABOUT: faUser,
  R101: faClipboardList,
  FAQS: faComment,
  APPLY: faBriefcase,
};

const isTabActive = (pathname: string, href: string) => {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
};

export const GlobalNavigator: React.FC<GlobalNavigatorProps> = ({ tabs = defaultTabs }) => {
  const router = useRouter();

  return (
    <nav className={styles.globalNavigator}>
      {tabs.map((tab) => {
        const IconComponent = tabIcons[tab.id] || faHouse;
        if (tab.id === 'APPLY') {
          return (
            <ApplicationRedirect
              key={tab.id}
              className={`${styles.navTab} ${isTabActive(router.pathname, tab.href) ? styles.activeNavTab : ''}`}
            >
              <FontAwesomeIcon icon={IconComponent} className={styles.icon} />
              <span>{tab.label}</span>
            </ApplicationRedirect>
          );
        }

        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`${styles.navTab} ${
              isTabActive(router.pathname, tab.href) ? styles.activeNavTab : ''
            }`}
          >
            <FontAwesomeIcon icon={IconComponent} className={styles.icon} />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};