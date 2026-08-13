import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './GlobalNavigator.module.scss';

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

const isTabActive = (pathname: string, href: string) => {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
};

export const GlobalNavigator: React.FC<GlobalNavigatorProps> = ({ tabs = defaultTabs, containsResults = true }) => {
  const router = useRouter();
  const visibleTabs = containsResults ? tabs : tabs.filter((tab) => tab.id !== 'RESULT');

  return (
    <nav className={styles.globalNavigator}>
      {visibleTabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={`${styles.navTab} ${
            isTabActive(router.pathname, tab.href) ? styles.activeNavTab : ''
          }`}
        >
          <div className={styles.iconBox} />
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
};