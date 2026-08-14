import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './GlobalNavigator.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faClipboardList, faComment, faBriefcase, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

export interface NavTabItem {
  id: string;
  label: string;
  href: string;
}

interface GlobalNavigatorProps {
  tabs?: NavTabItem[];
  containsResults?: boolean;
}

const defaultTabs: NavTabItem[] = [
  { id: 'HOME', label: 'HOME', href: '/' },
  { id: 'ABOUT', label: 'ABOUT', href: '/about' },
  { id: 'R101', label: 'R101', href: '/r101' },
  { id: 'FAQS', label: 'FAQS', href: '/faqs' },
  { id: 'APPLY', label: 'APPLY', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfrw5Z8r2ERyq9TR8aDlH9_Uy-A4HqMahIFsSk_GHFLSJ6gwQ/viewform?usp=preview' },
  { id: 'RESULT', label: 'RESULT', href: '/results' }
];

const tabIcons: { [key: string]: any } = {
  HOME: faHouse,
  ABOUT: faUser,
  R101: faClipboardList,
  FAQS: faComment,
  APPLY: faBriefcase,
  RESULT: faClipboardCheck,
};

const isTabActive = (pathname: string, href: string) => {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
};

export const GlobalNavigator: React.FC<GlobalNavigatorProps> = ({ tabs = defaultTabs, containsResults = true }) => {
  const router = useRouter();
  const visibleTabs = containsResults ? tabs : tabs.filter((tab) => tab.id !== 'RESULT');

  return (
    <nav className={styles.globalNavigator}>
      {visibleTabs.map((tab) => {
        const IconComponent = tabIcons[tab.id] || faHouse;
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