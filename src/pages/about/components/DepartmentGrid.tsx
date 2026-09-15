import { useState } from "react";
import Image from "next/image";
import { departments } from "../../../data/departments";
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
      { username: "dep_head_secretariat", text: "Grabe, ang organized natin this cycle. Keep it sharp, and always make sure the details are clean, no shortcuts." },
      { username: "secre_ops_dev", text: "Wala nang drama, this team is legit on top of everything. Asan na application form?" },
    ],
    date: "SEPTEMBER 2026",
  },
  finance: {
    likes: "24,930",
    commentsCount: "3,108",
    comments: [
      { username: "dep_head_finance", text: "Sobrang important ang financial discipline sa team. If you like numbers and making systems work, this is your lane." },
      { username: "ledger_loop_dev", text: "Lowkey obsessed with how this department keeps everything on track. Madiskarte at precise talaga." },
    ],
    date: "SEPTEMBER 2026",
  },
  external_affairs: {
    likes: "21,406",
    commentsCount: "2,671",
    comments: [
      { username: "dep_head_external_affairs", text: "This team is all about building bridges and making connections. If you love talking to people and building partnerships, apply na." },
      { username: "bridge_buzz_dev", text: "The vibe here is all warmth and networking. Puro good conversations and mad useful linkages, honestly." },
    ],
    date: "SEPTEMBER 2026",
  },
  human_resources: {
    likes: "19,855",
    commentsCount: "2,293",
    comments: [
      { username: "dep_head_hr", text: "We grow people, not just members. If you care about development, communication, and helping others level up, join us." },
      { username: "peoplepulse_dev", text: "The culture here is so supportive, feels like a safe space to grow. Sobrang ganda ng energy." },
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
      { username: "dep_head_writing", text: "We chase the truth and turn it into stories that matter. If you write with heart and grit, this is your spot." },
      { username: "wordcraft_dev", text: "The stories here hit different. Even a simple topic turns into something deep and meaningful, honestly." },
    ],
    date: "SEPTEMBER 2026",
  },
  photography: {
    likes: "32,118",
    commentsCount: "4,205",
    comments: [
      { username: "dep_head_photography", text: "We capture moments, details, and emotions that words can’t explain. If you see stories in frames, come through." },
      { username: "lensline_dev", text: "Every frame here looks like it was chosen with intention. Ang aesthetic, sobrang solid." },
    ],
    date: "SEPTEMBER 2026",
  },
  videography: {
    likes: "30,659",
    commentsCount: "3,972",
    comments: [
      { username: "dep_head_videography", text: "We make motion feel alive. If you love editing, framing, and telling stories with rhythm, this department is for you." },
      { username: "frameflow_dev", text: "The cuts here are so smooth, it feels like a music video. Edi wow, every clip hits." },
    ],
    date: "SEPTEMBER 2026",
  },
  creatives: {
    likes: "26,848",
    commentsCount: "3,541",
    comments: [
      { username: "dep_head_creatives", text: "We turn ideas into visuals that hit. If you love designing, illustrating, and creating with impact, apply now." },
      { username: "inkshift_dev", text: "This department really knows how to make things pop. Every design looks cooked, hindi lang aesthetic lang." },
    ],
    date: "SEPTEMBER 2026",
  },
  webtech: {
    likes: "34,226",
    commentsCount: "4,613",
    comments: [
      { username: "dep_head_webtech", text: "We build the digital experiences that power the org. If you’re into design systems, code, and problem-solving, this is the team." },
      { username: "stacksignal_dev", text: "This team is basically the reason the org feels smooth online. Galing ng UX, galing ng logic, straight-up elite." },
    ],
    date: "SEPTEMBER 2026",
  },
};

const normalizeDepartmentKey = (value: string) => value.toLowerCase().replace(/\s+/g, "_");

export function DepartmentGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openDepartment = departments.find((d) => d.id === openId) ?? null;
  const meta = openDepartment ? departmentCardMeta[normalizeDepartmentKey(openDepartment.id)] ?? departmentCardMeta[openDepartment.id] : null;

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
            <Image
              src={department.icon}
              alt={department.name}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className={styles.image}
            />
            <span className={styles.label}>{department.name}</span>
          </button>
        ))}
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
          />
        )}
      </Modal>
    </>
  );
}