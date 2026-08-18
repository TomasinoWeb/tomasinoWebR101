import { useState } from "react";
import Image from "next/image";
import { departments } from "../../../data/departments";
import { SocialPostCard } from "./SocialPostCard";
import { Modal } from "./Modal";
import styles from "./DepartmentGrid.module.scss";

const sampleComments = [
  { username: "dep_head", text: "Include here the dep_head/dep officers encouraging short message for applicants." },
  { username: "thomasino_dev", text: "Can't wait to submit my application!" },
];

export function DepartmentGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openDepartment = departments.find((d) => d.id === openId) ?? null;

  return (
    <>
      <div className={styles.grid}>
        {departments.map((department) => (
          <button
            type="button"
            key={department.id}
            className={styles.tile}
            onClick={() => setOpenId(department.id)}
          >
            <Image src={department.icon} alt={department.name} fill className={styles.image} />
            <span className={styles.label}>{department.name}</span>
          </button>
        ))}
      </div>

      <Modal isOpen={openDepartment != null} onClose={() => setOpenId(null)}>
        {openDepartment && (
          <SocialPostCard
            avatar="/logo/insignia_yellow.png"
            name="tomasinoweb"
            images={openDepartment.images}
            likes="1,464,381"
            caption={openDepartment.description}
            offeredPositions={openDepartment.offeredPositions}
            comments={sampleComments}
          />
        )}
      </Modal>
    </>
  );
}