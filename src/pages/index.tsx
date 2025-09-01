import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import { Button } from "../components/Button";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "mini",
    footer: "transparent",
    dots: "subtle",

    children: <>testing!</>,
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
