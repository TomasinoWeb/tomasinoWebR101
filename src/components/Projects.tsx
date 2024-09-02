import React from "react";
import Image from "next/image";
import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ProjectsProps {
  webProjects: { name: string; src: string; alt: string }[];
}

const Projects = ({ webProjects }: ProjectsProps) => {
  return (
    <div className={styles.row_projects}>
      {webProjects.map((project, index) => (
        <div key={index} className={styles.card_responsive}>
          <div className={styles.card_web}>
            <p className={styles.card_projects_text}>{project.name}</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <Image
            className={styles.card_web_image}
            src={project.src}
            alt={project.alt}
            width={395} // Adjust width as needed
            height={250} // Adjust height as needed
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
