import { GenerateLayoutOptionsImpl } from "@scinorandex/layout";

export interface PublicLayoutOptions extends GenerateLayoutOptionsImpl {
  ClientSideLayoutProps: {
    is_transparent: boolean;
    header: "full" | "centered";
    footer_disable: boolean;
  };
}
