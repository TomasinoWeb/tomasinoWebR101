import { Layout } from "../../components/Layout";
import { Titles } from "../../components/Titles";
import styles from "./departments.module.scss";
import Image from "next/image";
import { otherMembers } from "../../../public/assets/data/members-data";
import { useState } from "react";
import { HoverableImage } from "../../components/HoverableImage";

type Member = {
  name: string;
  image: string;
  title: string;
  description: string;
  background: string;
  foreground: string;
  hoverColor: string;
};

export default function MyComponent() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleImageClick = (member: Member) => {
    window.scrollTo({ top: 0, behavior: "smooth", left: 0 });

    if (selectedMember?.background === member.background) setSelectedMember(null);
    else setSelectedMember(member);
  };

  return (
    <Layout departmentBackground={selectedMember?.background} textColor={selectedMember?.foreground}>
      <div className={styles.componentContainer} style={{ backgroundColor: selectedMember?.background }}>
        <div className={styles.title}>
          <Titles title="Departments">
            <span style={{ color: selectedMember?.foreground }}>
              {selectedMember ? selectedMember.title : "Choose your era..."}
            </span>
          </Titles>
          <p
            className={styles.description}
            style={{ color: selectedMember?.foreground }}
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
              <div key={index} className={styles.member} onClick={() => handleImageClick(member)}>
                <HoverableImage
                  hoverColor={member.hoverColor}
                  image={member.image}
                  alt={`${member.name}'s image`}
                  active={member.name === selectedMember?.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
