import { Department } from "../utils/departmentEnum";
import departmentDescriptions from "./departments.json";

export type DepartmentEntry = {
  id: string;
  name: Department;
  description: string;
  offeredPositions: string[];
  /** Carousel images for this department's post. Placeholder: reuses the existing active/inactive icons until real photos are exported from Figma. */
  images: string[];
  icon: string;
};

const offeredPositionsByName: Record<Department, string[]> = {
  Secretariat: ["Documentation Officer", "Records Coordinator"],
  Finance: ["Budget Analyst", "Treasury Assistant"],
  "External Affairs": ["Partnerships Officer", "Community Liaison"],
  "Human Resources": ["Talent Development Officer", "Member Engagement Lead"],
  "Publicity and Communications": ["Social Media Manager", "Brand Strategist"],
  "Community Development": ["Outreach Coordinator", "Program Officer"],
  Writing: ["Staff Writer", "Copy Editor"],
  Photography: ["Staff Photographer", "Photo Editor"],
  Videography: ["Staff Videographer", "Video Editor"],
  Creatives: ["Graphic Designer", "Illustrator"],
  "Web Technologies": ["Frontend Web Developer", "UI/UX Product Designer", "Backend Systems Engineer"],
};

// Consolidates description copy from departments.json (which also has a non-department "Random" quiz
// tile left over from the retired quiz feature) with the image/name shape from utils/departments.ts.
export const departments: DepartmentEntry[] = departmentDescriptions
  .filter((d) => d.id !== "Random")
  .map((d) => ({
    id: d.id,
    name: d.name as Department,
    description: d.description,
    offeredPositions: offeredPositionsByName[d.name as Department] ?? [],
    images: [`/logo/logo_yellow.png`],
    icon: `/logo/insignia_yellow.png`,
  }));