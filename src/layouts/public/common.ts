import { GenerateLayoutOptionsImpl } from "@scinorandex/layout";
import { Department } from "../../utils/departmentEnum";

export type Result = { name: string; department: Department; team: string[] };

export interface PublicLayoutOptions extends GenerateLayoutOptionsImpl {
  ClientSideLayoutProps: {
    dots: "subtle" | "full";
    header: "full_transparent" | "full_regular" | "mini";
    footer: "transparent" | "regular" | "disabled";
  };

  ServerSideLayoutProps: { resultsAreOut: boolean };
  ServerSidePropsContext: { results: { success: boolean; results: Result[] } };
}
