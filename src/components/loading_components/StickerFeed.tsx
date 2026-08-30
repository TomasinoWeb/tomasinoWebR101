import React from "react";
import Image from "next/image";
import styles from "./Loading.module.scss";
import bgWallpaper from "../../../public/assets/loading/bg_wallpaper_transparent.png";

export const StickerFeed: React.FC = () => {
  return (
    <div className={styles.stickerFeedOverlay}>
      <Image
        src={bgWallpaper}
        alt="Sticker feed wallpaper"
        priority
        fill
        sizes="100dvw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default StickerFeed;
