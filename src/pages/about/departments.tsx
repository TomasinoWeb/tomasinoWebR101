import { Layout } from "../../components/Layout";
import { Titles } from "../../components/Titles";
import styles from "./departments.module.scss";
import Image from "next/image";

export default function () {
  const otherMembers = [
    {
      name: "Maria Celestine Guerrero",
      image: "/assets/about/people/core/Secretary.png",
    },
    {
      name: "Berlice Cudia",
      image: "/assets/about/people/core/Vice President for Finance.png",
    },
    {
      name: "Claire Ann Arce",
      image:
        "/assets/about/people/core/Vice President for External Affairs.png",
    },
    {
      name: "Aelijah Jolie Jacer",
      image: "/assets/about/people/core/Vice President for Human Resources.png",
    },
    {
      name: "Jan Carlo Zamora",
      image: "/assets/about/people/core/President.png",
    },
    {
      name: "Danial Dale Santos",
      image: "/assets/about/people/core/Chief Technology Officer.png",
    },
    {
      name: "Kyle Erimae Lopez",
      image: "/assets/about/people/core/Creative Director.png",
    },
    {
      name: "Eric Eugene Rosales",
      image: "/assets/about/people/core/Executive Vice President.png",
    },
    {
      name: "Reiniel Lawrence Razo",
      image: "/assets/about/people/core/Chief Videographer.png",
    },
    {
      name: "Miguel Angelo Sumalinog",
      image: "/assets/about/people/core/Chief Photographer.png",
    },
  ];

  return (
    <Layout>
      <div className={styles.componentContainer}>
        <Titles title="Departments">Choose your era...</Titles>
        <p className={styles.subtitle}>
          Here are the departments that solidify TomasinoWeb in its pursuit to
          continue its legacy of innovation, passion, and dedication.
        </p>

        <div className={styles.memberCount}>
          <div className={styles.grid}>
            {otherMembers.map((member, index) => (
              <div key={index} className={styles.member}>
                <Image
                  src={member.image}
                  alt={`${member.name}'s Image`}
                  width={500}
                  height={500}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
