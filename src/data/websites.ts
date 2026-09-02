export type WebsiteEntry = {
  name: string;
  icon: string;
  href: string;
};

// MeReserve and R101 don't have dedicated icon exports yet — reusing the org insignia
// as a placeholder until real icons come from Figma.
export const websites: WebsiteEntry[] = [
  { name: "TomasinoWeb", icon: "/assets/about/org-culture/tw.png", href: "https://tomasinoweb.org/" },
  { name: "Draft143", icon: "/assets/about/org-culture/draft143.png", href: "https://draft143.com" },
  { name: "Lamona", icon: "/assets/about/org-culture/lamona.png", href: "https://lamona.lol" },
  { name: "ThomScore", icon: "/assets/about/org-culture/thomscore.png", href: "https://uaap.tomasinoweb.org/" },
  { name: "MeReserve", icon: "/logo/insignia_yellow.png", href: "https://mereserve-git-main-tw-webtechs-projects.vercel.app" },
  { name: "R101", icon: "/logo/insignia_yellow.png", href: "/r101" },
];