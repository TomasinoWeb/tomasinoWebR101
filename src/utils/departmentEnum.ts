export const departments = [
  "Human Resources",
  "Finance",
  "Publicity and Communications",
  "Community Development",
  "External Affairs",
  "Special Projects",
  "Secretariat",
  "Writing",
  "Photography",
  "Videography",
  "Creatives",
  "Web Technologies",
  "Executive Assistant to the President",
  "Executive Assistant to the Executive Vice President",
  "Executive Assistant to the Executive Editor",
] as const;
export type Department = (typeof departments)[number];
