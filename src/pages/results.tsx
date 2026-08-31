import { useState } from "react";
import { createPublicPage } from "../layouts/public/frontend";
import { createPublicStaticProps } from "../layouts/public/static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./results.module.scss";
import Select from "react-select";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { departmentsEnum, Department } from "../utils/departmentEnum";
import { departments } from "../utils/departments";

type DepartmentResults = { name: string; team: string | null }[];
type ResultsObject = { [key in Department]: DepartmentResults };
type Props = {
  results: { public: true; data: ResultsObject } | { public: false };
};

export default createPublicPage<Props>(({ results }) => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",
    children: <GoodResultPage results={results} />,
  };
});

function GoodResultPage({ results }: Props) {
  const [department, setDepartment] = useState<Department | null>(null);

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>RESULTS</h1>

      <div className={styles.description}>
        <h2>
          Welcome to Planet TomasinoWeb! <br /> Go ahead, scroll through and see if your name made the list. <br />
          Whether you're smiling wide or crossing fingers, we're proud of you for taking the leap.
        </h2>
      </div>

      <h3>This list is updated as new applicants are accepted.</h3>

      {!results.public || Object.values(results.data).every((d) => d.length == 0) ? (
        <div className={styles.na}>
          <h1>Results are not available yet.</h1>
        </div>
      ) : (
        <>
          <div className={styles.selector}>
            <Select
              className={styles.selector_inner}
              placeholder="Select your Department"
              onChange={(e) => setDepartment(e!.value)}
              options={departmentsEnum
                .filter((d) => results.data[d].length > 0)
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
              <Block key={department} results={results.data[department]} department={department} />
            ) : (
              departmentsEnum.map(
                (department) =>
                  results.data[department].length > 0 && (
                    <Block key={department} results={results.data[department]} department={department} />
                  )
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Block({ results, department }: { department: Department; results: DepartmentResults }) {
  const [isOpen, setIsOpen] = useState(false);

  const sorted = results.sort((a, b) => {
    if (a.team != null && b.team != null) {
      const compared = a.team.localeCompare(b.team);
      if (compared != 0) return compared;
    }

    return a.name.localeCompare(b.name);
  });

  const Icon = departments.find((d) => d.name === department)?.image ?? "/assets/quiz/results/Snoopy.png";

  return (
    <div className={styles.block + " " + (isOpen ? styles.opened : "")} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.block_header}>
        <div className={styles.left}>
          <div className={styles.image_wrapper}>
            <Image src={Icon} alt="placeholder" width={100} height={100} />
          </div>
          <h2>{department}</h2>
        </div>

        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className={styles.block_body}>
        <ol>
          {sorted.map((result) => (
            <li key={`${result.name}-${result.team ?? department}`}>
              {result.name}
              {result.team != null ? ` - ${result.team}` : ""}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export const getStaticProps = createPublicStaticProps<Props>({
  async getStaticProps(ctx, { results }) {
    if (!results.success) return { props: { results: { public: false } }, revalidate: 600 };

    const resultsObject = {} as ResultsObject;
    for (const department of departmentsEnum) resultsObject[department] = [];
    for (const applicant of results.results) resultsObject[applicant.department].push(applicant);

    return { props: { results: { public: true, data: resultsObject } } };
  },
});
