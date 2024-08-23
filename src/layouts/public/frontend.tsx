import { implementLayoutFrontend } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const PublicLayoutFrontend = implementLayoutFrontend<PublicLayoutOptions>({
  layoutComponent({ internalProps, layoutProps }) {
    const { isTransparent = false, withLogo = true, backgroundImage, children } = layoutProps;

    const containerStyle = backgroundImage
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {};

    return (
      <div className="frontend" style={containerStyle}>
        <Navbar isNavTransparent={isTransparent} withLogo={withLogo} />
        <div
          style={{
            maxWidth: "1300px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {children}
        </div>
        <Footer isFooterTransparent={isTransparent} />
      </div>
    );
  },
});
