import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
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
}: DepartmentPostCardProps) {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Image src={avatar} alt={`${name} avatar`} width={36} height={36} className={styles.avatar} />
        <span className={styles.name}>{name}</span>
        <span className={styles.following}>Following</span>
        <FontAwesomeIcon icon={faEllipsis} className={styles.more} />
      </header>

      <div className={styles.media}>
        <ImageCarousel images={images} alt={name} variant="fill" />
      </div>

      <div className={styles.bodyWrap}>
        <div className={styles.body}>
          <div className={styles.likes}>{likes} likes</div>

          <p className={styles.caption}>
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

        {comments && comments.length > 0 && (
          <div className={styles.comments}>
            {commentsCount && <p className={styles.viewAll}>view all {commentsCount} comments</p>}
            {comments.map((comment, i) => (
              <p key={i} className={styles.comment}>
                <span className={styles.commentName}>{comment.username}</span> {comment.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
