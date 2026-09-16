export const departmentsEnum = [
  "Secretariat",
  "Finance",
  "External Affairs",
  "Human Resources",
  "Writing",
  "Photography",
  "Videography",
  "Creatives",
  "Web Technologies",
  "Special Projects",
] as const;

export type Department = (typeof departmentsEnum)[number];
