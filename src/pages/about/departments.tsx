import styles from "./departments.module.scss";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import RepeatingHeader from "../../components/RepeatHeader";
import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { Button } from "../../components/Buttons";
import CommDev from "../../../public/assets/about/departments/commdev.png";
import Creatives from "../../../public/assets/about/departments/creatives.png";
import ExtAff from "../../../public/assets/about/departments/extaff.png";
import Finance from "../../../public/assets/about/departments/finance.png";
import HR from "../../../public/assets/about/departments/hr.png";
import Photogs from "../../../public/assets/about/departments/photogs.png";
import PubComm from "../../../public/assets/about/departments/pubcomm.png";
import Sec from "../../../public/assets/about/departments/sec.png";
import Videogs from "../../../public/assets/about/departments/videogs.png";
import WebTech from "../../../public/assets/about/departments/webtech.png";
import Writing from "../../../public/assets/about/departments/writing.png";

type Department = {
  image: StaticImageData;
  color: string;
  name: string;
  description: string;
  branch: string;
};

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    footer_disable: false,
    header: "full",
    is_transparent: false,
    children: (
      <main className={styles.container}>
        <section className={styles.section}>
          <RepeatingHeader title="DEPARTMENTS" />

          <div className={styles.text}>
            <p>
              Here are the departments that solidify TomasinoWeb in its pursuit to continue its legacy of innovation,
              passion, and dedication.
            </p>
          </div>
        </section>
        <DepartmentReel />

        <section className={styles.section}>
          <div className={styles.text}>
            <p>Still not sure which department is right for you?</p>
            <p>Take our quick quiz to find your perfect fit!</p>
          </div>

          <Button href="/quiz" theme="black_n_white" outline="small">
            <p>TAKE QUIZ</p>
          </Button>
        </section>
      </main>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});

function DepartmentReel() {
  const [selectedDepartment, changeDepartment] = useState<Department | null>(null);

  const handleDepartmentChange = (department: Department) => {
    console.log(department.name);

    if (department.name === selectedDepartment?.name) changeDepartment(null);
    else changeDepartment(department);
  };

  return (
    <div className={styles.reel}>
      {departments.map((department) => (
        <div onClick={() => handleDepartmentChange(department)} key={department.name}>
          <DepartmentBlock
            color={department.color}
            image={department.image}
            branch={department.branch}
            department={department.name}
            description={department.description}
            isActive={selectedDepartment?.name === department.name}
          />
        </div>
      ))}
    </div>
  );
}

interface blockProps {
  color: string;
  image: StaticImageData;
  branch: string; // idk what this should be called
  department: string;
  description: string;
  isActive?: boolean;
}

function DepartmentBlock(props: blockProps) {
  return (
    <span className={styles.deptBlock}>
      <h4 className={styles.branch}>{props.branch.toUpperCase()}</h4>
      <div className={`${styles.imgContainer} ${props.isActive ? styles.expand : ""}`}>
        <Image src={props.image} alt={props.department} />
      </div>

      <span className={styles.textBlock} style={{ color: props.color }}>
        <h2 className={styles.name}> {props.department.toUpperCase()} </h2>
        <p className={`${styles.description} ${props.isActive ? styles.visible : styles.notVisible}`}>
          {props.description}
        </p>
      </span>

      <h4 className={styles.status}>{props.isActive ? "CLOSE" : "OPEN"}</h4>
    </span>
  );
}

/* TODO: Double check departments then move to another file */

// all the colors for reference
// sec: "#D35C5F"
// fin: "#392B42"
// ext: "#6B675C"
// hr_: "#BAA357"
// pcm: "#E59B99"
// cdv: "#15204B"
// wrt: "#333234"
// ptg: "#815E4C"
// vdg: "#6991A7"
// crt: "#B0424B"
// wbt: "#5E877D"

const departments = [
  {
    image: Sec,
    color: "#D35C5F",
    branch: "Executive Affairs",
    name: "Secretariat",
    description:
      "Efficient and adaptable, secretaries ensure that documents and transactions are kept and created through organized systems.",
  },
  {
    image: Finance,
    color: "#392B42", // to change later
    branch: "Executive Affairs",
    name: "Finance",
    description:
      "With great attention to detail and numbers, the Finance department manages the financial needs and demands of the premier digital media organization of the University.",
  },
  {
    image: ExtAff,
    branch: "Executive Affairs",
    color: "#6B675C",
    name: "External Affairs",
    description:
      "Through the power of linkages and partnerships, the External Affairs department connects digital journalism to people of various affiliations, as well as managing it's brand identity online.",
  },
  // fix image and branches from here, kulang pa pala ng isa lol
  {
    image: HR,
    branch: "Executive Affairs",
    name: "Human Resources",
    description:
      "Internal communication and development are two of the greatest assets of any organization. With the Human Resources department, members are assessed and empowered to grow as budding young professionals.",
    color: "#BAA357",
  },
  {
    image: PubComm,
    branch: "Executive Affairs",
    name: "Publicity and Communications",
    description:
      "Garnering a wide audience, publicists tackle the spread of projects, engagements, and content of the organization to reach every single member of the Thomasian community.",
    color: "#E59B99",
  },
  {
    image: CommDev,
    branch: "Executive Affairs",
    name: "Community Development",
    description:
      "The team plans and organizes outreach activities that will benefit TomasinoWeb's partner communities.",
    color: "#15204B",
  },
  {
    image: Writing,
    branch: "Publication",
    name: "Writing",
    description:
      "Writing are not just limited to telling stories. They disturb the undisturbed, and take it upon themselves to make sure that the necessary truths see the light of day.\n\nSECTIONS: Reports, Stories (Features and Literary), Blogs, and Sports",
    color: "#333234",
  },
  {
    image: Videogs,
    branch: "Publication",
    name: "Videography",
    description:
      "Videographers tell stories through frames in motion and angles you've never seen before.\n\nTEAMS: Offline Editors, Online Editors, and Videographers",
    color: "#6991A7",
  },
  {
    image: Photogs,
    branch: "Executive Affairs",
    name: "Photography",
    description:
      "Photographers are able to tell a story beyond words, and capture the unseen facets of the dominant narratives from all angles and perspectives.\n\nTEAMS: Events, Sports, Portraits, and Photojournalism",
    color: "#815E4C",
  },
  {
    image: Creatives,
    branch: "Executive Affairs",
    name: "Creatives",
    description:
      "Artists narrate stories through their impactful artworks. They draw, create, and make the impossible possible.\n\nTEAMS: Graphic design and Illustration",
    color: "#B0424B",
  },
  {
    image: WebTech,
    color: "#5E877D",
    branch: "Web Technologies",
    name: "Web Technologies",
    description:
      "Web Technologists are the competitive game changers in the modern world. They innovate, lead, and evolve the way we tell stories today.\n\nTEAMS: Front-end, Back-end, and UI/UX Design",
  },
];
