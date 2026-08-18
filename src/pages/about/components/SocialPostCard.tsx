import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { ImageCarousel } from "./ImageCarousel";
import styles from "./SocialPostCard.module.scss";

export interface SocialPostComment {
  username: string;
  text: string;
}

interface SocialPostCardProps {
  avatar: string;
  name: string;
  images: string[];
  likes: string;
  caption: React.ReactNode;
  offeredPositions?: string[];
  comments?: SocialPostComment[];
}

export function SocialPostCard({ avatar, name, images, likes, caption, offeredPositions, comments }: SocialPostCardProps) {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Image src={avatar} alt={`${name} avatar`} width={36} height={36} className={styles.avatar} />
        <span className={styles.name}>{name}</span>
        <span className={styles.following}>Following</span>
        <FontAwesomeIcon icon={faEllipsis} className={styles.more} />
      </header>

      <ImageCarousel images={images} alt={name} />

      <div className={styles.captionContainer}>
        <div className={styles.likes}>{likes} likes</div>
        <p className={styles.caption}>
          <span className={styles.captionName}>{name}</span> {caption}
        </p>
      </div>

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

      {comments && comments.length > 0 && (
        <div className={styles.comments}>
          {comments.map((comment, i) => (
            <p key={i} className={styles.comment}>
              <span className={styles.name}>{comment.username}</span> {comment.text}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}