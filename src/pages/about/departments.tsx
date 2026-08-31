import React from "react";
import { createPublicPage } from "../../layouts/public/frontend";
import { createPublicStaticProps } from "../../layouts/public/static";
import styles from "./departments.module.scss";
import departmentsData from "../../data/departments.json";
import DefaultImage from "../../../public/assets/about/departments/DefaultImage.png";
import Image from "next/image";
import { Button } from "../../components/Button";

export default createPublicPage(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",
    children: <DepartmentPage />,
  };
});

export const getStaticProps = createPublicStaticProps({});

function DepartmentPage() {
  const [selectedDepartment, setSelectedDepartment] = React.useState<(typeof departmentsData)[0] | null>(null);

  const handleBlockClick = (department: string) => {
    // scroll back to scroll-target
    window.scrollTo({
      top: document.getElementById("scroll-target")!.offsetTop,
      behavior: "smooth",
    });

    setSelectedDepartment(departmentsData.find((e) => e.id === department)!);
  };

  return (
    <div className={styles.page}>
      <section className={`${styles.hero}`}>
        <h2 className={styles.pageTitle}>DEPARTMENTS</h2>
        <p className={styles.pageDescription} id="scroll-target">
          Here are the departments that solidify TomasinoWeb in its pursuit to continue its legacy of innovation,
          passion, and dedication.
        </p>
      </section>

      <div className={styles.section}>
        <div className={styles.left}>
          <p className={styles.title}>AND THE CREW YOU PICK IS...</p>
          <h2 className={styles.subtitle}>{selectedDepartment ? selectedDepartment.name : "Nobody Yet"}</h2>

          <Image
            src={selectedDepartment ? `/assets/about/departments/${selectedDepartment.id}-active.png` : DefaultImage}
            alt="Default image"
            width={1000}
            height={1000}
            className={styles.defaultImage}
          />

          <p className={styles.disclaimer}>
            {selectedDepartment ? selectedDepartment.description : "Pick your preferred crew to join..."}
          </p>

          {selectedDepartment?.id === "Random" && (
            <div className={styles.rail}>
              <Button href="/quiz" variant="rectangle" maxWidth>
                TAKE THE QUIZ
              </Button>
            </div>
          )}
        </div>

        <div className={styles.right}>
          <div className={styles.blocks}>
            {departmentsData.map(({ id, name }) => (
              <div
                className={`${styles.block} ${selectedDepartment?.id === id ? styles.selectedBlock : ""}`}
                key={id}
                onClick={() => handleBlockClick(id)}
              >
                <div className={styles.overlay}>
                  <p>{name}</p>
                </div>
                <Image
                  // make this cleaner
                  src={`/assets/about/departments/${id === "Random" ? "Random" : id}-inactive.png`}
                  alt={id}
                  width={500}
                  height={500}
                  className={styles.inactiveImage}
                />

                <Image
                  src={`/assets/about/departments/${id === "Random" ? "Random" : id}-active.png`}
                  alt={id}
                  width={500}
                  height={500}
                  className={styles.activeImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
