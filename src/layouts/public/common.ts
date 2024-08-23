import { GenerateLayoutOptionsImpl } from "@scinorandex/layout";

export interface PublicLayoutOptions extends GenerateLayoutOptionsImpl {
  ClientSideLayoutProps: {
    isTransparent?: boolean;
    withLogo?: boolean;
    backgroundImage?: string;
  };
}
