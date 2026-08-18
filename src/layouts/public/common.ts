import { GenerateLayoutOptionsImpl } from "@scinorandex/layout";
import { Department } from "../../utils/departmentEnum";

export type Result = { name: string; department: Department; team: string | null };

export interface PublicLayoutOptions extends GenerateLayoutOptionsImpl {
  ClientSideLayoutProps: {
    dots: "subtle" | "full" | "disabled";
    header: "full_transparent" | "full_regular" | "mini";
    footer: "transparent" | "regular" | "disabled";
    nonScrollable?: boolean;
  };

  ServerSideLayoutProps: { resultsAreOut: boolean };
  ServerSidePropsContext: { results: { success: boolean; results: Result[] } };
}
