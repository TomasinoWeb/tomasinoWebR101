import { GenerateLayoutOptionsImpl } from "@scinorandex/layout";

export interface PublicLayoutOptions extends GenerateLayoutOptionsImpl {
  ClientSideLayoutProps: {
    dots: "subtle" | "full" | "disabled";
    header: "full_transparent" | "full_regular" | "mini";
    footer: "transparent" | "regular" | "disabled";
    footerClassName?: string;
    nonScrollable?: boolean;
  };

  ServerSideLayoutProps: Record<string, never>;
  ServerSidePropsContext: Record<string, never>;
}
