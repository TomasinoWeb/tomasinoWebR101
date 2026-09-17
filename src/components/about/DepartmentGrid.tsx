import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faClone } from "@fortawesome/free-solid-svg-icons";
import { departments } from "../../data/departments";
import { DepartmentPostCard } from "./DepartmentPostCard";
import { Modal } from "./Modal";
import styles from "./DepartmentGrid.module.scss";

const departmentCardMeta: Record<
  string,
  {
    likes: string;
    commentsCount: string;
    comments: Array<{ username: string; text: string }>;
    date: string;
  }
> = {
  secretariat: {
    likes: "18,742",
    commentsCount: "2,184",
    comments: [
      { username: "Secretariat_head", text: "Every detail matters! Join us in keeping TomasinoWeb organized, efficient, and always moving forward!" },
      { username: "Thomasian_secretariat", text: "Can't wait to submit my application!" },
    ],
    date: "SEPTEMBER 2026",
  },
  finance: {
    likes: "24,930",
    commentsCount: "3,108",
    comments: [
      { username: "Finance_head", text: "Attentive to details and numbers? Join finance!" },
      { username: "Thomasian_finance", text: "Can't wait to submit my application!" },
    ],
    date: "SEPTEMBER 2026",
  },
  external_affairs: {
    likes: "21,406",
    commentsCount: "2,671",
    comments: [
      { username: "ExternalAffairs_VP", text: "I did not manifest for this to show up on the website, so kapag nakita niyo to mag-apply na kayo" },
      { username: "Tomasino_freshie", text: "May collab po ba kayo with aldub?" },
    ],
    date: "SEPTEMBER 2026",
  },
  human_resources: {
    likes: "19,855",
    commentsCount: "2,293",
    comments: [
      { username: "HR_VP", text: "Keep calm and join HR 👑" },
      { username: "Tomasino67", text: "Okay lang po ba sainyo if madaldal po mag-aapply sa HR??" },
    ],
    date: "SEPTEMBER 2026",
  },
  publicity_and_communications: {
    likes: "27,168",
    commentsCount: "3,482",
    comments: [
      { username: "dep_head_publicity", text: "We do storytelling with strategy. If you love content, campaigns, and making people stop and notice, this is it." },
      { username: "signal_spot_dev", text: "Ang lakas ng online presence ng team na to. Every post feels intentional at may punch talaga." },
    ],
    date: "SEPTEMBER 2026",
  },
  community_development: {
    likes: "16,904",
    commentsCount: "2,039",
    comments: [
      { username: "dep_head_cd", text: "We build actual impact beyond campus. If you want to help communities and make meaningful changes, this is the move." },
      { username: "roots_route_dev", text: "This team is the real heart of the org. Parang every activity has purpose, hindi lang for show." },
    ],
    date: "SEPTEMBER 2026",
  },
  writing: {
    likes: "29,471",
    commentsCount: "3,760",
    comments: [
      { username: "Man_Ed", text: "Have stories to tell? Join writing!" },
      { username: "Thomasian_writing", text: "Can't wait to submit my application!" },
    ],
    date: "SEPTEMBER 2026",
  },
  photography: {
    likes: "32,118",
    commentsCount: "4,205",
    comments: [
      { username: "Chief_photogs", text: "Bring your vision to life, one frame at a time!" },
      { username: "Thomasian_photogs", text: "Can't wait to submit my application!" },
    ],
    date: "SEPTEMBER 2026",
  },
  videography: {
    likes: "30,659",
    commentsCount: "3,972",
    comments: [
      { username: "Chief_videogs", text: "New pub year, new feels, new vibes. Join videogs, it will be lit AF. 🔥👯 #SquadGoals #JustGirlyThings" },
      { username: "Tomasino_videogs", text: "Submitting my application form! I luv u TW" },
    ],
    date: "SEPTEMBER 2026",
  },
  creatives: {
    likes: "26,848",
    commentsCount: "3,541",
    comments: [
      { username: "Creative_Director", text: "Go! go! go! Show your creativity." },
      { username: "Thomasian_creatives", text: "#ReadyToDesign" },
    ],
    date: "SEPTEMBER 2026",
  },
  web_technologies: {
    likes: "34,226",
    commentsCount: "4,613",
    comments: [
      { username: "Chief_tech", text: "1... 2... 3... go apply and join us on the Web!" },
      { username: "Thomasian_tech", text: "Yoohoo! I sent my application." },
    ],
    date: "SEPTEMBER 2026",
  },
  special_projects: {
    likes: "22,406",
    commentsCount: "2,918",
    comments: [
      { username: "SpecialProjects_Head", text: "Got an idea? Let's turn it into reality! 👀" },
      { username: "Thomasian_543", text: "Ready to make things happen! 🙌" },
    ],
    date: "SEPTEMBER 2026",
  },
};

const normalizeDepartmentKey = (value: string) => value.toLowerCase().replace(/[\s-]+/g, "_");

export function DepartmentGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openDepartment = departments.find((d) => d.id === openId) ?? null;
  const meta = openDepartment ? departmentCardMeta[normalizeDepartmentKey(openDepartment.id)] ?? departmentCardMeta[openDepartment.id] : null;

  return (
    <>
      <div className={styles.grid}>
        {departments.map((department) => {
          const key = normalizeDepartmentKey(department.id);
          const itemMeta = departmentCardMeta[key] ?? departmentCardMeta[department.id];
          return (
            <button
              type="button"
              key={department.id}
              className={styles.tile}
              onClick={() => setOpenId(department.id)}
            >
              <Image
                src={department.icon}
                alt={department.name}
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className={styles.image}
              />
              <div className={styles.carouselBadge} aria-hidden="true">
                <FontAwesomeIcon icon={faClone} className={styles.badgeIcon} />
              </div>
              <div className={styles.overlay}>
                <div className={styles.overlayItem}>
                  <FontAwesomeIcon icon={faHeart} className={styles.overlayIcon} />
                  <span>{itemMeta?.likes ?? "24.9k"}</span>
                </div>
                <div className={styles.overlayItem}>
                  <FontAwesomeIcon icon={faComment} className={styles.overlayIcon} />
                  <span>{itemMeta?.commentsCount ?? "3.1k"}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Modal isOpen={openDepartment != null} onClose={() => setOpenId(null)} size="wide">
        {openDepartment && meta && (
          <DepartmentPostCard
            avatar="/logo/insignia_yellow.png"
            name="tomasinoweb"
            images={openDepartment.images}
            likes={meta.likes}
            caption={openDepartment.description}
            offeredPositions={openDepartment.offeredPositions}
            hashtags="#TomasinoWeb #TWRecruitment2026 #JoinTW #UST"
            date={meta.date}
            commentsCount={meta.commentsCount}
            comments={meta.comments}
            onClose={() => setOpenId(null)}
          />
        )}
      </Modal>
    </>
  );
}