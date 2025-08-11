import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "mini",
    footer: "transparent",
    dots: "full",

    children: (
      <>
        <h2>Main</h2>
      </>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
