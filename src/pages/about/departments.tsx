import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import styles from "./departments.module.scss";
import Image from "next/image";
import { useState } from "react";
import RepeatingHeader from "../../components/RepeatHeader";

type Department = {
  image: string
  color: string
  name: string
  description: string
  branch: string
}

/* TODO: complete the rest of the departments, double check descriptions then move to another file */

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
    image:"/assets/about/departments/sec.png",
    color:"#D35C5F", 
    branch:"Executive Affairs",
    name:"Secretariat",
    description:"Efficient and adaptable, secretaries ensure that documents and transactions are kept and created through organized systems."
  },
  {
    image:"/assets/about/departments/finance.png",
    color: "#392B42", // to change later
    branch:"Executive Affairs",
    name: "Finance",
    description:
      "With great attention to detail and numbers, the Finance department manages the financial needs and demands of the premier digital media organization of the University.",
  },
  {
    image:"/assets/about/departments/extaff.png",
    branch:"Executive Affairs",
    color: "#6B675C",
    name: "External Affairs",
    description:
    "Through the power of linkages and partnerships, the External Affairs department connects digital journalism to people of various affiliations, as well as managing it's brand identity online.",
  },
  // fix image and branches from here, kulang pa pala ng isa lol
  {
    image:"/assets/about/departments/hr.png",
    branch:"Executive Affairs",
    name: "Human Resources",
    description:
      "Internal communication and development are two of the greatest assets of any organization. With the Human Resources department, members are assessed and empowered to grow as budding young professionals.",
    color: "#BAA357"
  },
  {
    image:"/assets/about/departments/writing.png",
    branch:"Executive Affairs",
    name: "Writing",
    description:
      "Writing are not just limited to telling stories. They disturb the undisturbed, and take it upon themselves to make sure that the necessary truths see the light of day.\n\nSECTIONS: Reports, Stories (Features and Literary), Blogs, and Sports",
    color: "#333234"
  },
  {
    image:"/assets/about/departments/pubcomm.png",
    branch:"Executive Affairs",
    name: "Publicity and Communications",
    description:
      "Garnering a wide audience, publicists tackle the spread of projects, engagements, and content of the organization to reach every single member of the Thomasian community.",
    color: "#E59B99"
  },
  {
    image:"/assets/about/departments/videogs.png",
    branch:"Publication",
    name: "Videography",
    description:
      "Videographers tell stories through frames in motion and angles you've never seen before.\n\nTEAMS: Offline Editors, Online Editors, and Videographers",
    color: "#6991A7"
  },
  {
    image:"/assets/about/departments/photogs.png",
    branch:"Executive Affairs",
    name: "Photography",
    description:
      "Photographers are able to tell a story beyond words, and capture the unseen facets of the dominant narratives from all angles and perspectives.\n\nTEAMS: Events, Sports, Portraits, and Photojournalism",
    color: "#815E4C"
  },
  {
    image:"/assets/about/departments/creatives.png",
    branch:"Executive Affairs",
    name: "Creatives",
    description:
      "Artists narrate stories through their impactful artworks. They draw, create, and make the impossible possible.\n\nTEAMS: Graphic design and Illustration",
    color: "#B0424B"
  },
  // webtech is fixed already
  {
    image:"/assets/about/departments/webtech.png",
    color: "#5E877D",
    branch: "Web Technologies",
    name: "Web Technologies",
    description:
      "Web Technologists are the competitive game changers in the modern world. They innovate, lead, and evolve the way we tell stories today.\n\nTEAMS: Front-end, Back-end, and UI/UX Design",
  }
]

export default function Page() {
  return ( 
    <div
      style={{display: "flex", flexDirection: "column", width:"100vw", overflowX: "hidden"}}
    > 
      {/* TODO: add proper layout */}
      <main className={styles.container}>
        <section
          className={styles.section}
        >
          <RepeatingHeader title="DEPARTMENTS"/>
          
          <p>
            Here are the departments that solidify TomasinoWeb in its pursuit to continue its legacy of innovation, passion, and dedication.
          </p>
        </section>
        <DepartmentReel />
        <section className={styles.section}>
          <p>Still not sure which department is right for you? 
          Take our quick quiz to find your perfect fit!</p>
          <button>Take Quiz</button>
        </section>
      </main>
    </div>
  );
}


function DepartmentReel() {

  const [selectedDepartment, changeDepartment] = useState<Department| null>(null)

  const handleDepartmentChange = (department : Department) => {
    console.log(department.name)

    if (department.name === selectedDepartment?.name) 
      changeDepartment(null)
    else
      changeDepartment(department)
  }

  return(
    <div className={styles.reel}>
        {
          departments.map(
            (department) => (
              <div onClick={() => handleDepartmentChange(department)}>
                <DepartmentBlock 
                  color={department.color} 
                  image={department.image} 
                  branch={department.branch} 
                  department={department.name} 
                  description={department.description}
                  isActive={selectedDepartment?.name === department.name}
                />
              </div>
              
            )
          )
        }
      </div>
  );
}

interface blockProps {
  color: string,
  image: string,
  branch: string, // idk what this should be called
  department: string,
  description: string,
  isActive?: boolean
}

function DepartmentBlock(props: blockProps) {
  return(
  <span className={styles.deptBlock}>
    <h4 className={styles.branch}>{props.branch.toUpperCase()}</h4>
    <div className={`${styles.imgContainer} ${props.isActive ? styles.expand : ""}`}>
      <Image 
        src={props.image} 
        alt={props.department} 
        width={395}
        height={173}
      />
    </div>
    

    <span className={styles.textBlock} style={{color:props.color}}>
      <h2 className={styles.name}> {props.department.toUpperCase()} </h2>
      <p className={`${styles.description} ${props.isActive ? styles.visible : styles.notVisible}`}> 
        {props.description} 
      </p>
    </span>  

    <h4 className={styles.status}>
      {props.isActive ? "CLOSE" : "OPEN"}
    </h4>
  </span>
  )
}

