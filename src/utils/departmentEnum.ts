export const departmentsEnum = [
  "Secretariat",
  "Finance",
  "External Affairs",
  "Human Resources",
  "Publicity and Communications",
  "Community Development",
  "Writing",
  "Photography",
  "Videography",
  "Creatives",
  "Web Technologies",
] as const;

export type Department = (typeof departmentsEnum)[number];
