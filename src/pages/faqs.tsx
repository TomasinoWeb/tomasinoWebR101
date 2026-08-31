import React from 'react';
import { createPublicPage } from '../layouts/public/frontend';
import { createPublicStaticProps } from '../layouts/public/static';
import styles from './faq.module.scss';

interface FAQItem {
  id: number;
  notes: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    notes: 37,
    question: "What is TomasinoWeb and who can join?",
    answer: "TomasinoWeb is the premier digital media organization of the University of Santo Tomas. Any enrolled Thomasian student passionate about web dev, design, journalism, or media can apply!"
  },
  {
    id: 2,
    notes: 74,
    question: "Do I need prior technical experience to apply?",
    answer: "Not at all! While basic interest helps, we offer extensive mentorship programs for web developers, designers, and creatives during your stay."
  },
  {
    id: 3,
    notes: 111,
    question: "How do I submit my R101 application form?",
    answer: "Simply visit our R101 portal, complete the online application form, and submit your Google Form response before the deadline."
  },
  {
    id: 4,
    notes: 148,
    question: "Can I apply to multiple departments?",
    answer: "You may specify a primary and secondary department choice on your R101 application form."
  },
  {
    id: 5,
    notes: 185,
    question: "What should I prepare for the HR interview?",
    answer: "Our interviews are brief and friendly! Just be ready to talk about your interests, availability, and why you want to join TomasinoWeb."
  },
  {
    id: 6,
    notes: 222,
    question: "When will departmental exams be emailed?",
    answer: "Departmental exams are sent via email within 24 hours of submitting your application form. Check your Spam folder if missing!"
  },
  {
    id: 7,
    notes: 259,
    question: "Where can I view official recruitment results?",
    answer: "Official results will be published on the R101 Results page and announced on our official Facebook and Twitter accounts."
  }
];

export default createPublicPage(() => {
  return {
    header: 'full_regular',
    footer: 'regular',
    dots: 'full',
    children: <FAQsPageContent />,
  };
});

function FAQsPageContent() {
  return (
    <main className={styles.faqPage}>
      <div className={styles.dashboardContainer}>
        {/* Main Feed Section */}
        <section className={styles.feed}>
          {/* Page Title */}
          <h1 className={styles.pageTitle}>FAQs</h1>

          {/* Top Quick Bar */}
          <div className={styles.actionHeader}>
            <div className={styles.avatarPlaceholder} />
            <div className={styles.navBar}>
              <div className={styles.navItem}><span>Profile</span></div>
              <div className={styles.navItem}><span>Department</span></div>
              <div className={styles.navItem}><span>People</span></div>
              <div className={styles.navItem}><span>Apply</span></div>
            </div>
          </div>

          {/* Mapped FAQ Posts */}
          {faqData.map((faq) => (
            <article key={faq.id} className={styles.postCard}>
              <div className={styles.avatarPlaceholder} />
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.username}>[username]</span>
                  <div className={styles.stats}>
                    <span className={styles.noteBadge}>{faq.notes}</span>
                  </div>
                </div>
                <h3 className={styles.question}>{faq.question}</h3>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar Widgets */}
        <aside className={styles.sidebar}>
          <div className={styles.statWidget}>
            <div className={styles.statRow}><span>Websites</span><span className={styles.badge}>6</span></div>
            <div className={styles.statRow}><span>Members</span><span className={styles.badge}>81+</span></div>
            <div className={styles.statRow}><span>Awards</span><span className={styles.badge}>29</span></div>
          </div>

          <div className={styles.featuredWidget}>
            <div className={styles.photoBox}>FEATURED PHOTO</div>
            <div className={styles.widgetFooter}>
              <span>TomasinoWeb 2026 R101</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export const getStaticProps = createPublicStaticProps({});