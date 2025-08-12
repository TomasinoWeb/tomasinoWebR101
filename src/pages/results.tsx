import { useState } from "react";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Placeholder from "../../public/assets/landing/peanut.png";
import styles from "./results.module.scss";
import Select from "react-select";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { departments, Department } from "../utils/departmentEnum";

type Props = {
  results: {
    [key in Department]: { name: string; team: string | null }[];
  };
};

export default PublicLayoutFrontend.use<Props>(({ results }) => {
  const [department, setDepartment] = useState<Department | null>(null);

  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",
    children: (
      <div className={styles.page}>
        <h1 className={styles.header}>RESULTS</h1>

        <div className={styles.description}>
          <h2>
            Welcome to Planet TomasinoWeb! <br /> Go ahead, scroll through and see if your name made the list. <br />
            Whether you're smiling wide or crossing fingers, we're proud of you for taking the leap.
          </h2>
        </div>

        <div className={styles.selector}>
          <Select
            className={styles.selector_inner}
            placeholder="Select your Department"
            options={departments.map((department) => ({ value: department, label: department }))}
            onChange={(e) => setDepartment(e!.value)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "100%",
                padding: "5px 10px",
                borderRadius: "12px",
              }),
            }}
          />
        </div>

        <div className={styles.blocks}>
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    ),
  };
});

function Block() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.block + " " + (isOpen ? styles.opened : "")} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.block_header}>
        <div className={styles.left}>
          <Image src={Placeholder} alt="placeholder" width={100} height={100} />
          <h2>Web Technologies</h2>
        </div>

        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className={styles.block_body}>
        <ol>
          <li>Lance Owen Gulinao</li>
          <li>Lance Owen Gulinao</li>
          <li>Lance Owen Gulinao</li>
          <li>Lance Owen Gulinao</li>
        </ol>
      </div>
    </div>
  );
}

export const getStaticProps = PublicLayoutBackend.use<Props>({
  async getStaticProps(ctx, { results }) {
    if (!results.success) return { notFound: true, revalidate: 900 };

    return { props: {} as any };
  },
});
