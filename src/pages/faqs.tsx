import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createPublicPage } from '../layouts/public/frontend';
import { createPublicStaticProps } from '../layouts/public/static';
import styles from './faq.module.scss';

const faqAvatars = [
  'Untitled188_20260816214958.png',
  'Untitled188_20260816215003.png',
  'Untitled188_20260816215014.png',
  'Untitled188_20260816215127.png',
  'Untitled188_20260816215132.png',
  'Untitled188_20260816215136.png',
  'Untitled188_20260816215141.png',
  'Untitled188_20260816215145.png',
];

const avatarPath = (filename: string) => `/assets/py19/faqs/avatars/${filename}`;

const featuredPhotos = [
  'featured_1.png',
  'featured_2.png',
  'featured_3.png',
  'featured_4.png',
];

const featuredPhotoPath = (filename: string) => `/assets/py19/about/who-we-are/${filename}`;

interface FAQItem {
  id: number;
  notes: number;
  category: FAQCategory;
  question: string;
  answer: string;
}

type FAQCategory = 'all' | 'profile' | 'department' | 'people' | 'apply';

const faqCategories: { key: FAQCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'profile', label: 'Profile' },
  { key: 'department', label: 'Department' },
  { key: 'people', label: 'People' },
  { key: 'apply', label: 'Apply' },
];

const faqUsernames = [
  '@pixelpioneer',
  '@curious_thomasian',
  '@r101navigator',
  '@department_dreamer',
  '@peopleperson_ust',
  '@applicationally',
  '@results_reader',
];

const faqData: FAQItem[] = [
  {
    id: 1,
    notes: 37,
    category: 'profile',
    question: "What is TomasinoWeb and who can join?",
    answer: "TomasinoWeb is the premier digital media organization of the University of Santo Tomas. Any enrolled Thomasian student passionate about web dev, design, journalism, or media can apply!"
  },
  {
    id: 2,
    notes: 74,
    category: 'profile',
    question: "Do I need prior technical experience to apply?",
    answer: "Not at all! While basic interest helps, we offer extensive mentorship programs for web developers, designers, and creatives during your stay."
  },
  {
    id: 3,
    notes: 111,
    category: 'apply',
    question: "How do I submit my R101 application form?",
    answer: "Simply visit our R101 portal, complete the online application form, and submit your Google Form response before the deadline."
  },
  {
    id: 4,
    notes: 148,
    category: 'department',
    question: "Can I apply to multiple departments?",
    answer: "You may specify a primary and secondary department choice on your R101 application form."
  },
  {
    id: 5,
    notes: 185,
    category: 'people',
    question: "What should I prepare for the HR interview?",
    answer: "Our interviews are brief and friendly! Just be ready to talk about your interests, availability, and why you want to join TomasinoWeb."
  },
  {
    id: 6,
    notes: 222,
    category: 'apply',
    question: "When will departmental exams be emailed?",
    answer: "Departmental exams are sent via email within 24 hours of submitting your application form. Check your Spam folder if missing!"
  },
  {
    id: 7,
    notes: 259,
    category: 'apply',
    question: "Where can I view official recruitment results?",
    answer: "Official results will be published on the R101 Results page and announced on our official Facebook and Twitter accounts."
  }
];

export default createPublicPage(() => {
  return {
    header: 'full_regular',
    footer: 'regular',
    footerClassName: styles.faqFooter,
    dots: 'full',
    children: <FAQsPageContent />,
  };
});

function FAQsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('all');
  const [featuredPhotoIndex, setFeaturedPhotoIndex] = useState(0);
  const visibleFAQs = selectedCategory === 'all'
    ? faqData
    : faqData.filter((faq) => faq.category === selectedCategory);

  React.useEffect(() => {
    setFeaturedPhotoIndex(Math.floor(Math.random() * featuredPhotos.length));
  }, []);

  const changeFeaturedPhoto = (direction: number) => {
    setFeaturedPhotoIndex((currentIndex) => (
      (currentIndex + direction + featuredPhotos.length) % featuredPhotos.length
    ));
  };

  return (
    <main className={styles.faqPage}>
      <nav className={styles.pageNavigation} aria-label="FAQ sections">
        <h1 className={styles.pageTitle}>FAQs</h1>
        <div className={styles.pageLinks}>
          <Link href="/faqs" aria-current="page">All</Link>
          <Link href="/about/org-culture">The Org</Link>
          <Link href="/apply">Application</Link>
          <Link href="/r101">Interviews</Link>
          <Link href="/results">Results &amp; Exams</Link>
        </div>
      </nav>
      <div className={styles.dashboardContainer}>
        {/* Main Feed Section */}
        <section className={styles.feed}>
          {/* Top Quick Bar */}
          <div className={styles.actionHeader}>
            <div className={styles.navBar}>
              {faqCategories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  className={`${styles.navItem} ${selectedCategory === category.key ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.key)}
                  aria-pressed={selectedCategory === category.key}
                >
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mapped FAQ Posts */}
          {visibleFAQs.map((faq) => (
            <article key={faq.id} className={styles.postCard}>
              <Image
                className={styles.avatar}
                src={avatarPath(faqAvatars[faq.id])}
                alt={`FAQ profile ${faq.id}`}
                width={60}
                height={60}
              />
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.username}>{faqUsernames[faq.id - 1]}</span>
                  <div className={styles.stats}>
                    <span className={styles.noteBadge}>{faq.notes}</span>
                  </div>
                </div>
                <details className={styles.answerDropdown}>
                  <summary className={styles.question}>{faq.question}</summary>
                  <div className={styles.reply}>
                    <span className={styles.replyLabel}>Reply</span>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </details>
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
            <div className={styles.photoBox}>
              <Image
                key={featuredPhotos[featuredPhotoIndex]}
                src={featuredPhotoPath(featuredPhotos[featuredPhotoIndex])}
                alt="Featured TomasinoWeb photo"
                fill
                className={styles.featuredPhoto}
              />
              <button
                type="button"
                className={`${styles.photoControl} ${styles.previousPhoto}`}
                onClick={() => changeFeaturedPhoto(-1)}
                aria-label="Previous featured photo"
              >
                &#8592;
              </button>
              <button
                type="button"
                className={`${styles.photoControl} ${styles.nextPhoto}`}
                onClick={() => changeFeaturedPhoto(1)}
                aria-label="Next featured photo"
              >
                &#8594;
              </button>
            </div>
            <div className={styles.widgetFooter}>
              <span>Featured Photo</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export const getStaticProps = createPublicStaticProps({});