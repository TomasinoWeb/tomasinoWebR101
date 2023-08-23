import { Layout } from "../../components/Layout";
import { Titles } from "../../components/Titles";
import styles from "./departments.module.scss";
import Image from "next/image";
import { otherMembers } from "../../../public/assets/data/members-data";

export default function () {
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
