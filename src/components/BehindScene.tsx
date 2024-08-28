import React from "react";
import { Button } from "../components/Buttons";
import styles from "./BehindScene.module.scss";

const OrgCulture = ({ images }: { images: string[] }) => {
  const displayedImages = images.slice(0, 8);

  return (
    <div className={`${styles["behind-scene-row"]}`}>
      <div className={`${styles["inside"]}`}>
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className={`${styles["behind-scene-images"]}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className={`${styles["behind-scene-column"]}`}>
        <h4 className={styles["behind-scene-text"]}>Who are the people behind the scenes?</h4>
        <Button href="/people" theme="black_n_white" outline="small">
          MEET OUR COMMUNITY
        </Button>
      </div>
    </div>
  );
};

export default OrgCulture;
