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

const imageSet = (folder: string, files: string[]) => files.map((file) => `/assets/py19/about/dept-grid-images/${folder}/${file}`);

const departmentImages: Partial<Record<Department, string[]>> = {
  Secretariat: imageSet("secre", ["27_20260912_143255_0026.png", "28_20260912_143256_0027.png", "29_20260912_143256_0028.png"]),
  Finance: imageSet("finance", ["9_20260912_143255_0008.png", "10_20260912_143255_0009.png", "11_20260912_143255_0010.png"]),
  "External Affairs": imageSet("exec", ["21_20260912_143255_0020.png", "22_20260912_143255_0021.png", "23_20260912_143255_0022.png"]),
  "Human Resources": imageSet("hr", ["24_20260912_143255_0023.png", "25_20260912_143255_0024.png", "26_20260912_143255_0025.png"]),
  Writing: imageSet("writing", ["12_20260912_143255_0011.png", "13_20260912_143255_0012.png", "14_20260912_143255_0013.png"]),
  Photography: imageSet("photogs", ["photogs 1.png", "photogs 2.png", "photogs 3.png"]),
  Videography: imageSet("videogs", ["4_20260912_143255_0003.png", "5_20260912_143255_0004.png", "6_20260912_143255_0005.png"]),
  Creatives: imageSet("creatives", ["7_20260912_143255_0006.png", "8_20260912_143255_0007.png"]),
  "Web Technologies": imageSet("webtech", ["18_20260912_143255_0017.png", "19_20260912_143255_0018.png", "20_20260912_143255_0019.png"]),
  "Special Projects": [
    "/assets/py19/about/dept-grid-images/15_20260912_143255_0014.png",
    "/assets/py19/about/dept-grid-images/16_20260912_143255_0015.png",
    "/assets/py19/about/dept-grid-images/17_20260912_143255_0016.png",
  ],
};

const defaultDepartmentImage = "/assets/py18/about/departments/DefaultImage.png";

const offeredPositionsByName: Record<Department, string[]> = {
  Secretariat: [],
  Finance: [],
  "External Affairs": [],
  "Human Resources": [],
  Writing: ["Editorial Assistant", "News Writers", "Features Writers", "Sports Writers", "Stories Writers", "Blogs Writers"],
  Photography: ["Events", "Sports", "Portraits", "Photojournalism"],
  Videography: ["Offline Editor", "Online Editor (Motion Graphics)", "Videographer", "Screenwriter"],
  Creatives: ["Graphic Designers", "Illustrators"],
  "Web Technologies": ["Frontend Web Developer", "UI/UX Product Designer", "Backend Systems Engineer"],
  "Special Projects": [],
};

// Consolidates description copy from departments.json (which also has a non-department "Random" quiz
// tile left over from the retired quiz feature) with the image/name shape from utils/departments.ts.
export const departments: DepartmentEntry[] = departmentDescriptions
  .filter((d) => d.id !== "Random")
  .map((d) => {
    const images = departmentImages[d.name as Department] ?? [defaultDepartmentImage];

    return {
      id: d.id,
      name: d.name as Department,
      description: d.description,
      offeredPositions: offeredPositionsByName[d.name as Department] ?? [],
      images,
      icon: images[0],
    };
  });