import React from "react";
import styles from "./behindscene.module.scss";

const OrgCulture = ({ images }) => {
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
        <button className={` ${styles["behind-scene-button"]}`}>Meet our Community</button>
      </div>
    </div>
  );
};

export default OrgCulture;
