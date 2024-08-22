import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent({ internalProps, layoutProps }) {
    return (
      <div className={`frontend`}>
        <Navbar type="full" color="white" />

        {layoutProps.children}

        <Footer theme="white" />
      </div>
    );
  },
});
