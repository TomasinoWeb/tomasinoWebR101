import { Layout } from "../../components/Layout";
import { Titles } from "../../components/Titles";
import styles from "./departments.module.scss";
import Image from "next/image";
import { otherMembers } from "../../../public/assets/data/members-data";
import { useState } from "react";

export default function MyComponent() {
  const [departmentBackground, setDepartmentBackground] = useState<string | undefined>(
    undefined
  );
  const [textColor, setTextColor] = useState<string | undefined>(undefined);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  const handleImageClick = (member: any) => {
    if (departmentBackground === member.background) {
      setDepartmentBackground(undefined);
      setTextColor(undefined);
      setSelectedMember(null);
    } else {
      setDepartmentBackground(member.background);
      setTextColor(member.foreground);
      setSelectedMember(member);
    }
  };

  return (
    <Layout departmentBackground={departmentBackground} textColor={textColor}>
      <div
        className={styles.componentContainer}
        style={{ backgroundColor: departmentBackground }}
      >
        <div className={styles.title}>
          <Titles title="Departments">
            <span style={{ color: textColor }}>
              {selectedMember ? selectedMember.title : "Choose your era..."}
            </span>
          </Titles>
          <p
            className={styles.description}
            style={{
              color: textColor,
            }}
            dangerouslySetInnerHTML={{
              __html: selectedMember
                ? selectedMember.description.replace(/\n/g, "<br>")
                : "Here are the departments that solidify TomasinoWeb in its pursuit to continue its legacy of innovation, passion, and dedication.",
            }}
          ></p>
        </div>

        <div className={styles.memberCount}>
          <div className={styles.grid}>
            {otherMembers.map((member, index) => (
              <div key={index} className={styles.member}>
                <Image
                  src={member.image}
                  alt={`${member.name}'s Image`}
                  width={500}
                  height={500}
                  onClick={() => handleImageClick(member)}
                  className={styles.image}
                  style={{
                    backgroundColor:
                      departmentBackground === member.background
                        ? member.background
                        : "transparent",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
