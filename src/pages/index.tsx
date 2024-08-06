import { PublicLayoutFrontend } from "@/layouts/public/frontend";
import { PublicLayoutBackend } from "@/layouts/public/static";

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    children: <div>this is the page</div>,
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
