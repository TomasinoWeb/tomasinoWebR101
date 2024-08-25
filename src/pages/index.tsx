import { Button } from "../components/Buttons";
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
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="black_n_white" maxWidth>
              <p>QUIZ</p>
            </Button>
          </div>

          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button onClick={() => alert("Testing")} theme="glass" maxWidth>
              <p>CLICK ME FOR ALERT</p>
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="black_n_white">
              <p>QUIZ</p>
            </Button>
          </div>

          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="glass">
              <p>QUIZ</p>
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div style={{ maxWidth: "500px", flex: 1 }}>
            <Button href="/quiz" theme="black_n_white" outline="small">
              <p>QUIZ</p>
            </Button>
          </div>
        </div>
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
