import React, { useState } from 'react';
import { createPublicPage } from '../layouts/public/frontend';
import { createPublicStaticProps } from '../layouts/public/static';
import styles from './r101.module.scss';

interface ApplicationStep {
  id: string;
  title: string;
  description: string;
  actionButtonText?: string;
  badgeText?: string;
}

interface SupportItem {
  id: string;
  title: string;
  description: string;
}

const applicationSteps: ApplicationStep[] = [
  {
    id: "1.",
    title: "Application Form",
    description: "Submit the online R101 form",
    actionButtonText: "Submit Form >>"
  },
  {
    id: "2.",
    title: "Departmental Exam",
    description: "Take the department-specific test.",
    badgeText: "Exams are sent via email after applying!"
  },
  {
    id: "3.",
    title: "Interview",
    description: "A brief, friendly chat with HR and Department Heads."
  },
  {
    id: "4.",
    title: "The Results",
    description: "Reveal on the official Results page."
  }
];

const supportItems: SupportItem[] = [
  {
    id: "A.",
    title: "Check Spam / Junk Email Folder",
    description: "Exams are sent automatically via email. Please allow up to 24 hours."
  },
  {
    id: "B.",
    title: "Verify Email Address on R101 Form",
    description: "Ensure your UST Google Account email was entered correctly."
  }
];

export default createPublicPage(() => {
  return {
    header: 'full_regular',
    footer: 'regular',
    dots: 'full',
    children: <R101PageContent />,
  };
});

function R101PageContent() {
  const [activeSubTab, setActiveSubTab] = useState<'steps' | 'support'>('support');

  return (
    <div className={styles.pageWrapper}>
      {/* Main Container */}
      <main className={styles.mainContainer}>
        <section className={styles.processCard}>
          {/* Title Bar */}
          <div className={styles.cardTitleBar}>
            R101 Process
          </div>

          {/* Sub-Tabs Control */}
          <div className={styles.tabBar}>
            <div className={styles.segmentedControl}>
              <button
                type="button"
                className={`${styles.tabButton} ${activeSubTab === 'steps' ? styles.activeTab : ''}`}
                onClick={() => setActiveSubTab('steps')}
              >
                Application Steps
              </button>
              <button
                type="button"
                className={`${styles.tabButton} ${activeSubTab === 'support' ? styles.activeTab : ''}`}
                onClick={() => setActiveSubTab('support')}
              >
                Help &amp; Support
              </button>
            </div>
          </div>

          {/* Tab Content Area */}
          <div className={styles.tabContent}>
            {activeSubTab === 'steps' ? (
              applicationSteps.map((step) => (
                <div key={step.id} className={styles.itemRow}>
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemIndex}>{step.id}</span>
                      <span className={styles.itemTitle}>{step.title}</span>
                    </div>
                    <p className={styles.itemDesc}>{step.description}</p>
                  </div>

                  {step.actionButtonText && (
                    <button type="button" className={styles.actionButton}>
                      {step.actionButtonText}
                    </button>
                  )}

                  {step.badgeText && (
                    <div className={styles.infoBadge}>
                      {step.badgeText}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <>
                <div className={styles.supportBanner}>
                  <div className={styles.bannerTitle}>
                    HAVEN&apos;T RECEIVED YOUR DEPARTMENTAL EXAM WITHIN 24 HOURS?
                  </div>
                  <div className={styles.bannerDesc}>
                    First, please check your Spam / Junk email folder. If your exam email is still missing after 24 hours of submitting your R101 form, send an email to help@tomasinoweb.org or contact our HR team directly on Discord!
                  </div>
                  <button type="button" className={styles.supportCta}>
                    Contact Support &gt;&gt;
                  </button>
                </div>

                {supportItems.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.itemContent}>
                      <div className={styles.itemHeader}>
                        <span className={styles.itemIndex}>{item.id}</span>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </div>
                      <p className={styles.itemDesc}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </main>

    </div>
  );
}

export const getStaticProps = createPublicStaticProps({});