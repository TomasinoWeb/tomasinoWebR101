import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";
import { AboutShell } from "./components/AboutShell";
import { DepartmentGrid } from "./components/DepartmentGrid";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full_regular",
    footer: "regular",
    dots: "full",

    children: (
      <AboutShell>
        <DepartmentGrid />
      </AboutShell>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
