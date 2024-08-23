import React from "react";
import Image from "next/image";
import styles from "./OCProjectCards.module.scss";

interface ProjectCard {
  src: string;
  alt: string;
  title: string;
  description: string;
  fontColor: string;
  backgroundColor: string;
  borderColor: string;
}

interface ProjectCardsProps {
  projectCards: ProjectCard[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ projectCards }) => {
  return (
    <div className={styles["layout-card-projects"]}>
      {projectCards.map((project, index) => (
        <div
          className={styles["card-projects"]}
          key={index}
          style={{
            backgroundColor: project.backgroundColor,
            borderColor: project.borderColor,
          }}
        >
          <Image
            className={styles["card-projects-image"]}
            src={project.src}
            alt={project.alt}
            width={300}
            height={200}
          />
          <h3
            className={styles["fun-text-title"]}
            style={{
              color: project.fontColor,
            }}
          >
            {project.title}
          </h3>
          <p
            className={styles["fun-text"]}
            style={{
              color: project.fontColor,
            }}
          >
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
