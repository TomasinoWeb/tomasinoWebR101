import styles from "./LifeSection.module.scss";

interface LifeSectionProps {
  title: string;
  text?: string;
  children: React.ReactNode;
}

export function LifeSection({ title, text, children }: LifeSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.content}>
        <p>{text}</p>
        {children}
        </div>
    </section>
  );
}
