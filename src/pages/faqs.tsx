import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUser, faUsers, faTrophy, faPlus, faRightLeft, faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { createPublicPage } from '../layouts/public/frontend';
import { createPublicStaticProps } from '../layouts/public/static';
import styles from './faq.module.scss';
import landingAnnouncementStyles from '../components/LandingAnnouncement.module.scss';

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
  '@application_reader',
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
    answer: "Official recruitment results will be announced through our official Facebook and Twitter accounts."
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
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);
  const [openFaqIds, setOpenFaqIds] = useState<Set<number>>(new Set());
  const navBarRef = React.useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  React.useEffect(() => {
    const updateIndicator = () => {
      if (!navBarRef.current) return;
      const activeButton = navBarRef.current.querySelector<HTMLButtonElement>(`.${styles.active}`);
      if (activeButton) {
        setIndicatorStyle((prev) => {
          if (prev.left === activeButton.offsetLeft && prev.width === activeButton.offsetWidth) {
            return prev;
          }
          return {
            left: activeButton.offsetLeft,
            width: activeButton.offsetWidth,
          };
        });
      }
    };

    updateIndicator();
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [selectedCategory]);

  const toggleFaq = (id: number) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const visibleFAQs = selectedCategory === 'all'
    ? faqData
    : faqData.filter((faq) => faq.category === selectedCategory);

  React.useEffect(() => {
    setFeaturedPhotoIndex(Math.floor(Math.random() * featuredPhotos.length));
  }, []);

  React.useEffect(() => {
    const windowState = window as Window & { faqAnnouncementShown?: boolean };

    if (!windowState.faqAnnouncementShown) {
      windowState.faqAnnouncementShown = true;
      setIsAnnouncementOpen(true);
    }
  }, []);

  React.useEffect(() => {
    if (!isAnnouncementOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsAnnouncementOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAnnouncementOpen]);

  const safePhotoIndex = ((featuredPhotoIndex % featuredPhotos.length) + featuredPhotos.length) % featuredPhotos.length;
  const currentPhoto = featuredPhotos[safePhotoIndex] || featuredPhotos[0];

  const changeFeaturedPhoto = (direction: number) => {
    setFeaturedPhotoIndex((currentIndex) => {
      const total = featuredPhotos.length;
      if (!total) return 0;
      return ((currentIndex + direction) % total + total) % total;
    });
  };

  return (
    <main className={styles.faqPage}>
      {isAnnouncementOpen && (
        <div
          className={`${styles.announcementBackdrop} ${landingAnnouncementStyles.overlay}`}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsAnnouncementOpen(false);
            }
          }}
        >
          <div
            className={`${styles.announcementModal} ${landingAnnouncementStyles.dialog}`}
            role="dialog"
            aria-modal="true"
            aria-label="FAQ announcement"
          >
            <button
              type="button"
              className={landingAnnouncementStyles.closeButton}
              onClick={() => setIsAnnouncementOpen(false)}
              aria-label="Close announcement"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <Image
              src="/assets/py19/faqs/faqs_banner.png"
              alt="Frequently asked questions"
              width={1200}
              height={675}
              priority
            />
          </div>
        </div>
      )}
      <header className={styles.pageNavigation}>
        <h1 className={styles.pageTitle}>FAQs</h1>
      </header>
      <div className={styles.dashboardContainer}>
        {/* Main Feed Section */}
        <section className={styles.feed}>
          {/* Top Quick Bar */}
          <div className={styles.actionHeader}>
            <div className={styles.navBar} ref={navBarRef}>
              <div
                className={styles.activeIndicator}
                style={{
                  transform: `translate3d(${indicatorStyle.left}px, 0, 0)`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.width ? 1 : 0,
                }}
              />
              {faqCategories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  className={`${styles.navItem} ${selectedCategory === category.key ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.key)}
                  aria-pressed={selectedCategory === category.key}
                >
                  <span className={styles.tabLabel}>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mapped FAQ Posts */}
          {visibleFAQs.map((faq) => {
            const isOpen = openFaqIds.has(faq.id);
            return (
              <article key={faq.id} className={`${styles.postCard} ${isOpen ? styles.isOpen : ''}`}>
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
                      <FontAwesomeIcon icon={faRightLeft} className={styles.statActionIcon} />
                      <FontAwesomeIcon icon={faHeart} className={styles.statActionIcon} />
                    </div>
                  </div>
                  <div className={styles.answerDropdown}>
                    <button
                      type="button"
                      className={styles.question}
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className={styles.replyWrapper}>
                      <div className={styles.replyInner}>
                        <div className={styles.reply}>
                          <p className={styles.answer}>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Sidebar Widgets */}
        <aside className={styles.sidebar}>
          <div className={styles.statWidget}>
            <div className={`${styles.statRow} ${styles.statWebsites}`}>
              <div className={styles.labelGroup}>
                <FontAwesomeIcon icon={faGlobe} className={styles.statIcon} />
                <span>Websites</span>
              </div>
              <span className={styles.badge}>6</span>
            </div>
            <div className={`${styles.statRow} ${styles.statMembers}`}>
              <div className={styles.labelGroup}>
                <FontAwesomeIcon icon={faUser} className={styles.statIcon} />
                <span>Members</span>
              </div>
              <span className={styles.badge}>81+</span>
            </div>
            <div className={`${styles.statRow} ${styles.statAwards}`}>
              <div className={styles.labelGroup}>
                <FontAwesomeIcon icon={faTrophy} className={styles.statIcon} />
                <span>Awards</span>
              </div>
              <span className={styles.badge}>29</span>
            </div>
          </div>

          <div className={styles.featuredWidget}>
            <div className={styles.photoBox}>
              <Image
                src={featuredPhotoPath(currentPhoto)}
                alt="Featured TomasinoWeb photo"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className={styles.featuredPhoto}
                priority
              />
              <button
                type="button"
                className={`${styles.photoControl} ${styles.previousPhoto}`}
                onClick={() => changeFeaturedPhoto(-1)}
                aria-label="Previous featured photo"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                type="button"
                className={`${styles.photoControl} ${styles.nextPhoto}`}
                onClick={() => changeFeaturedPhoto(1)}
                aria-label="Next featured photo"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className={styles.widgetActions}>
              <button type="button" className={styles.actionBtn} aria-label="Add photo">
                <FontAwesomeIcon icon={faPlus} className={styles.actionIcon} />
              </button>
              <button type="button" className={styles.actionBtn} onClick={() => changeFeaturedPhoto(1)} aria-label="Switch photo">
                <FontAwesomeIcon icon={faRightLeft} className={styles.actionIcon} />
              </button>
              <button type="button" className={styles.actionBtn} aria-label="Like photo">
                <FontAwesomeIcon icon={faHeart} className={styles.actionIcon} />
              </button>
            </div>
            <div className={styles.widgetFooter}>
              <div className={styles.profileAvatar}>
                <Image src="/logo/insignia_yellow.png" alt="TomasinoWeb" width={32} height={32} className={styles.avatarImg} />
              </div>
              <div className={styles.profileText}>
                <span className={styles.profileTitle}>TomasinoWeb</span>
                <span className={styles.profileSubtitle}>R101 2026</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export const getStaticProps = createPublicStaticProps({});