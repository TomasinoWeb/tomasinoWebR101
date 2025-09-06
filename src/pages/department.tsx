import React from "react";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import styles from "./department.module.scss";
import departmentsData from "../data/departments.json";

export default PublicLayoutFrontend.use(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",
    children: <DepartmentPage />,
  };
});

export const getStaticProps = PublicLayoutBackend.use({});

function DepartmentPage() {
  const [selectedDepartment, setSelectedDepartment] = React.useState<(typeof departmentsData)[0] | null>(null);

  const handleBlockClick = (department: (typeof departmentsData)[0]) => {
    setSelectedDepartment(department);
  };

  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <h1 className={styles.header}>DEPARTMENTS</h1>
        <p className={styles.description}>
          Here are the departments that solidify TomasinoWeb in its pursuit to continue its legacy of innovation,
          passion, and dedication.
        </p>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      <div className={styles.blockContainer}>
        {/* Left Block */}
        <div className={styles.selectedBlock}>
          <p className={styles.pickText}>And the crew you pick is...</p>
          <p className={styles.roleTitle}>{selectedDepartment ? selectedDepartment.name : "Nobody Yet"}</p>
          <div className={styles.imageContainer}>
            {selectedDepartment ? (
              <img src={selectedDepartment.image} alt={selectedDepartment.name} className={styles.selectedImage} />
            ) : (
              <div className={styles.placeholderImage}></div>
            )}
          </div>
          <p className={styles.roleDescription}>
            {selectedDepartment ? selectedDepartment.description : "Pick your preferred crew to join..."}
          </p>
        </div>

        {/* Right Blocks */}
        <div className={styles.blocks}>
          {departmentsData.map((department) => (
            <div
              key={department.id}
              className={styles.block}
              onClick={() => handleBlockClick(department)}
              style={{
                backgroundImage: `url(${department.image})`,
              }}
              onMouseEnter={(e) => {
                if (department.hoverImage) {
                  e.currentTarget.style.backgroundImage = `url(${department.hoverImage})`;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = `url(${department.image})`;
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
