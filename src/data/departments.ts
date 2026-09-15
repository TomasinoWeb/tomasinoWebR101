import { Department } from "../utils/departmentEnum";
import departmentDescriptions from "./departments.json";

export type DepartmentEntry = {
  id: string;
  name: Department;
  description: string;
  offeredPositions: string[];
  /** Images used by the department tile and its clicked carousel. */
  images: string[];
  icon: string;
};

const departmentImages: Record<Department, string[]> = {
  Secretariat: ["27_20260912_143255_0026.png", "28_20260912_143256_0027.png", "29_20260912_143256_0028.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/secre/${file}`,
  ),
  Finance: ["9_20260912_143255_0008.png", "10_20260912_143255_0009.png", "11_20260912_143255_0010.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/finance/${file}`,
  ),
  "External Affairs": ["21_20260912_143255_0020.png", "22_20260912_143255_0021.png", "23_20260912_143255_0022.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/exec/${file}`,
  ),
  "Human Resources": ["24_20260912_143255_0023.png", "25_20260912_143255_0024.png", "26_20260912_143255_0025.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/hr/${file}`,
  ),
  "Publicity and Communications": [
    "15_20260912_143255_0014.png",
    "16_20260912_143255_0015.png",
    "17_20260912_143255_0016.png",
  ].map((file) => `/assets/py19/about/dept-grid-images/${file}`),
  "Community Development": [
    "15_20260912_143255_0014.png",
    "16_20260912_143255_0015.png",
    "17_20260912_143255_0016.png",
  ].map((file) => `/assets/py19/about/dept-grid-images/${file}`),
  Writing: ["12_20260912_143255_0011.png", "13_20260912_143255_0012.png", "14_20260912_143255_0013.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/writing/${file}`,
  ),
  Photography: ["photogs 1.png", "photogs 2.png", "photogs 3.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/photogs/${file}`,
  ),
  Videography: ["4_20260912_143255_0003.png", "5_20260912_143255_0004.png", "6_20260912_143255_0005.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/videogs/${file}`,
  ),
  Creatives: ["7_20260912_143255_0006.png", "8_20260912_143255_0007.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/creatives/${file}`,
  ),
  "Web Technologies": ["18_20260912_143255_0017.png", "19_20260912_143255_0018.png", "20_20260912_143255_0019.png"].map(
    (file) => `/assets/py19/about/dept-grid-images/webtech/${file}`,
  ),
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
    images: departmentImages[d.name as Department],
    icon: departmentImages[d.name as Department][0],
  }));