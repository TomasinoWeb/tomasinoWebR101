import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import styles from "./r101.module.scss";
import TomWegg from "../../public/assets/tomweggs/WithShades.png";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {}

interface BlockProps {
  title: string;
  children: ReactNode;
  number: number;
  backgroundColor?: string;
}

function Block({ title, children, number, backgroundColor }: BlockProps) {
  return (
    <div className={styles.block} style={{ backgroundColor: backgroundColor }}>
      <div className={styles.number}>
        <h1>{number}</h1>
      </div>

      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>{children}</p>
    </div>
  );
}

export default PublicLayoutFrontend.use<Props>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",
    children: (
      <div className={styles.page}>
        <h1 className={styles.header}>
          THE <br /> APPLICATION PROCESS
        </h1>

        <div className={styles.blocks}>
          <div className={styles.img}>
            <Image src={TomWegg} alt="snoopy" width={1000} height={500} />
          </div>

          <Block title="Application" number={1}>
            Applicants must first accomplish the <Link href="/apply">Google Form</Link>.
          </Block>

          <Block title="Take the Exam" number={2} backgroundColor="var(--secondary-light-blue)">
            The department exam will be sent through TomWeb's recruitment platform. Skip this step if your department
            does not have an exam.
          </Block>

          <Block title="Interview" number={3} backgroundColor="var(--secondary-light-yellow)">
            After passing your requirements, you will be asked to schedule your interview on the recruitment platform.
          </Block>

          <Block title="Results" number={4} backgroundColor="var(--primary-lightbrown-yellow)">
            The results will be sent to you in less than a week by our Human Resources department.
          </Block>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<Props>({});
