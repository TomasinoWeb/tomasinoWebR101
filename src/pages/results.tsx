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

type DepartmentResults = { name: string; team: string | null }[];
type ResultsObject = { [key in Department]: DepartmentResults };
type Props = {
  results: ResultsObject;
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
            onChange={(e) => setDepartment(e!.value)}
            options={departments
              .filter((d) => results[d].length > 0)
              .map((department) => ({ value: department, label: department }))}
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
          {department != null ? (
            <Block key={department} results={results[department]} department={department} />
          ) : (
            departments.map(
              (department) =>
                results[department].length > 0 && (
                  <Block key={department} results={results[department]} department={department} />
                )
            )
          )}
        </div>
      </div>
    ),
  };
});

function Block({ results, department }: { department: Department; results: DepartmentResults }) {
  const [isOpen, setIsOpen] = useState(false);

  const sorted = results.sort((a, b) => {
    if (a.team != null && b.team != null) {
      const compared = a.team.localeCompare(b.team);
      if (compared != 0) return compared;
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <div className={styles.block + " " + (isOpen ? styles.opened : "")} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.block_header}>
        <div className={styles.left}>
          <Image src={Placeholder} alt="placeholder" width={100} height={100} />
          <h2>{department}</h2>
        </div>

        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className={styles.block_body}>
        <ol>
          {sorted.map((result, idx) => (
            <li key={idx}>
              {result.name}
              {result.team != null ? ` - ${result.team}` : ""}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export const getStaticProps = PublicLayoutBackend.use<Props>({
  async getStaticProps(ctx, { results }) {
    if (!results.success) return { notFound: true, revalidate: 900 };

    const resultsObject = {} as ResultsObject;
    for (const department of departments) resultsObject[department] = [];
    for (const applicant of results.results) resultsObject[applicant.department].push(applicant);

    return { props: { results: resultsObject } };
  },
});
