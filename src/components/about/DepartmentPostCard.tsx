import Image from "next/image";
import { ImageCarousel } from "./ImageCarousel";
import type { SocialPostComment } from "./SocialPostCard";
import styles from "./DepartmentPostCard.module.scss";

interface DepartmentPostCardProps {
  avatar: string;
  name: string;
  images: string[];
  likes: string;
  caption: React.ReactNode;
  offeredPositions?: string[];
  hashtags?: string;
  date?: string;
  commentsCount?: string;
  comments?: SocialPostComment[];
  onClose?: () => void;
}

export function DepartmentPostCard({
  avatar,
  name,
  images,
  likes,
  caption,
  offeredPositions,
  hashtags,
  date,
  commentsCount,
  comments,
  onClose,
}: DepartmentPostCardProps) {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image src={avatar} alt={`${name} avatar`} width={32} height={32} className={styles.avatar} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.following}>Following</span>
          {onClose && (
            <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close department details">
              &times;
            </button>
          )}
        </div>
      </header>

      <div className={styles.media}>
        <ImageCarousel images={images} alt={name} variant="fill" />
      </div>

      <div className={styles.content}>
        <div className={styles.body}>
          <div className={styles.likes}>{likes} likes</div>

          <div className={styles.caption}>
            <p>
              <span className={styles.captionName}>{name}</span> {caption}
            </p>

            {offeredPositions && offeredPositions.length > 0 && (
              <div className={styles.positions}>
                <span className={styles.positionsTitle}>Offered Positions:</span>
                <ul>
                  {offeredPositions.map((position) => (
                    <li key={position}>{position}</li>
                  ))}
                </ul>
              </div>
            )}

            {hashtags && <p className={styles.hashtags}>{hashtags}</p>}
            {date && <p className={styles.date}>{date}</p>}
          </div>
        </div>

        {comments && comments.length > 0 && (
          <div className={styles.comments}>
            {commentsCount && <p className={styles.viewAll}>view all {commentsCount} comments</p>}
            {comments.map((comment, index) => (
              <p key={index} className={styles.comment}>
                <span className={styles.commentName}>{comment.username}</span> {comment.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
