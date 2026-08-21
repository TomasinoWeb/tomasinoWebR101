import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { AboutShell } from "./components/AboutShell";
import { DepartmentGrid } from "./components/DepartmentGrid";
import styles from "./about.module.scss";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",

    children: (
      <AboutShell>
        <div className={styles.theDepartments}>
          <DepartmentGrid />
        </div>
      </AboutShell>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
