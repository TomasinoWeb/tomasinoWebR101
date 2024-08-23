import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import styles from "./index.module.scss";
interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full",
    is_transparent: false,
    footer_disable: false,

    children: (
      <div>
        <div>
          <img
            className={styles.image}
            src="https://images.unsplash.com/photo-1724250267025-08b545ab90dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
