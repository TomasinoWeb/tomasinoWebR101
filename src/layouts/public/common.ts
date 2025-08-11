import { GenerateLayoutOptionsImpl } from "@scinorandex/layout";

export interface PublicLayoutOptions extends GenerateLayoutOptionsImpl {
  ClientSideLayoutProps: {
    dots: "subtle" | "full";
    header: "full_transparent" | "full_regular" | "mini";
    footer: "transparent" | "regular" | "disabled";
  };
}
