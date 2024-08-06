import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";

export const PublicLayoutFrontend =
  implementLayoutFrontend<PublicLayoutOptions>({
    layoutComponent({ internalProps, layoutProps }) {
      return (
        <div>
          <header>this is the header</header>
          {layoutProps.children}
          <footer>this is the footer</footer>
        </div>
      );
    },
  });
