import Dayo from "../../public/assets/testimonials/dayo.png";
import Lagman from "../../public/assets/testimonials/lagman.png";
import Giva from "../../public/assets/testimonials/giva.png";
import Bunyi from "../../public/assets/testimonials/bunyi.png";
import Renomeron from "../../public/assets/testimonials/renomeron.png";
import Suni from "../../public/assets/testimonials/suni.png";
import Gulinao from "../../public/assets/testimonials/gulinao.png";
import { StaticImageData } from "next/image";

export type Testimonial = { imageSrc: StaticImageData; quoteText: string; authorName: string; authorDetails: string };
export const testimonials = [
  {
    authorDetails: "(Chief Technology Officer, 2024 - 2025)",
    authorName: "Andrea Louise Dayo",
    imageSrc: Dayo,
    quoteText: `Joining ***TomasinoWeb*** was probably the best decision I made in college. I initially joined with the goal of developing skills that would help my career, but I ended up gaining so much more. I found lasting friendships and had the chance to work with people who were just as passionate about technology. Most importantly, I was given the opportunity to use my skills to help tell stories that matter and uphold the truth.`,
  },
  {
    authorDetails: "(Lead Back-end Developer, 2024 - 2025)",
    authorName: "JR Gregg Victor Lagman",
    imageSrc: Lagman,
    quoteText: `Being part of ***TomasinoWeb*** connected me with some of the most passionate people I’ve ever met. I still remember the time we had to build a website completely from the ground up. All the hard work it took was worth it when we finally saw it come to life. The projects we built and the memories we made together are things I’ll carry with me for a lifetime.`,
  },
  {
    authorDetails: "(Assistant Chief Technology Officer, 2025 - 2026)",
    authorName: "Zeandarra Gaile Giva",
    imageSrc: Giva,
    quoteText: `TomWeb played a hugeeeeeee part in making me the creative person I am today. It became my creative playground, and my training wheels for communicating with teams. But the fun work for me is just the tip of the iceberg, it’s the people there who made me stay. My seniors have always been patient with me. It is their mentorship and passion to serve that truly make ***TomasinoWeb*** a great organization to grow in. Here’s to my last year in ***TomasinoWeb***!`,
  },
  {
    authorDetails: "(Blogs Editor, 2024 - 2025)",
    authorName: "Jewyz Ann Bunyi",
    imageSrc: Bunyi,
    quoteText: `Full of fear and doubt, I was a starry-eyed sophomore when I joined ***TomasinoWeb***. The blogs section was my avenue for creativity and introspection — a wholesome experience that transformed me as a writer and as a person. My time here motivated me to be on top of my game, writing commentaries and essays in hopes for meaningful conversations on pop culture, girlhood, or anything under the sun!`,
  },
  {
    authorDetails: "(President, 2016 - 2019)",
    authorName: "Julius Renomeron Jr.",
    imageSrc: Renomeron,
    quoteText: `I consider my entire stay in ***TomasinoWeb*** truly life-changing. I witnessed it grow from just a handful of members into a respected and influential organization in the university. I owe much of my knowledge in creative work and project management to the years I spent collaborating with such talented and passionate individuals here. It is inspiring to see how our optimism and vision for what ***TomasinoWeb*** could become have taken shape over the years. Being hands-on in establishing the organization’s branding and helping build a culture of storytelling that challenges dominant narratives, both inside and outside the university, taught me adaptability and curiosity—skills I later carried into my career as a storyteller in advertising and filmmaking.`,
  },
  {
    authorDetails: "(President, 2025 - 2026)",
    authorName: "Charisse Grazzelle Suni",
    imageSrc: Suni,
    quoteText: `I still remember when I was searching for organizations to join as a first-year student at UST. I eventually found my way to ***TomasinoWeb***—an organization I thought would simply be an avenue to showcase my photography skills. However, I discovered another lens to look through: the people, the impact of the organization, and the community that shaped me and continued to fight for what it’s worth. Here, I found not only a space to pursue my craft but also people who challenge, inspire, and grow with me, pouring everything into every article, coverage, and project.`,
  },
  {
    authorDetails: "(Chief Technology Officer, 2025 - 2026)",
    authorName: "Lance Owen Gulinao",
    imageSrc: Gulinao,
    quoteText: `Being able to shape the Web Technologies department into something new, and something that could even win awards outside of the University is an experience that I won't ever take for granted. I'm truly honored that I have been entrusted to re-shape and maintain the core digital infrastructure of ***TomasinoWeb***. The long hours spent making sure that every page is perfect, down to the smallest of details (literally!) will always have been worth it.`,
  },
] as Testimonial[];
