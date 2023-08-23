import { Layout } from "../../components/Layout";
import { Titles } from "../../components/Titles";
import styles from "./departments.module.scss";
import Image from "next/image";
import { otherMembers } from "../../../public/assets/data/members-data";
import { useState } from "react";

export default function MyComponent() {
  const [departmentBackground, setDepartmentBackground] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleImageClick = (member) => {
    if (departmentBackground === member.background) {
      setDepartmentBackground(null);
      setTextColor(null);
      setSelectedMember(null);
    } else {
      setDepartmentBackground(member.background);
      setTextColor(member.foreground);
      setSelectedMember(member);
    }
  };

  const ColoredText = ({ color, children }) => (
    <span style={{ color }}>{children}</span>
  );

  return (
    <Layout departmentBackground={departmentBackground}>
      <div
        className={styles.componentContainer}
        style={{ backgroundColor: departmentBackground }}
      >
        <div className={styles.title}>
          <Titles title="Departments">
            <ColoredText color={textColor}>
              {selectedMember ? selectedMember.title : "Choose your era..."}
            </ColoredText>
          </Titles>
          <p
            className={styles.description}
            style={{
              color: textColor,
            }}
          >
            {selectedMember
              ? selectedMember.description
              : "Here are the departments that solidify TomasinoWeb in its pursuit to continue its legacy of innovation, passion, and dedication."}
          </p>
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
