export const siteConfig = {
  name: "Afrokokoroot Foundation",
  description: "Empowering communities through music, art, and cultural exchange. A 501(c)(3) nonprofit organization.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://afrokokoroot.org",
  ogImage: "https://afrokokoroot.org/og-image.jpg",
  links: {
    twitter: "https://twitter.com/afrokokoroot",
    facebook: "https://facebook.com/afrokokoroot",
    instagram: "https://instagram.com/afrokokoroot",
  },
  keywords: [
    "Nonprofit",
    "Music Education",
    "Cultural Exchange",
    "Community Empowerment",
    "Afrokokoroot",
    "Arts",
    "Culture",
    "Africa",
    "Drumming",
    "Dance",
  ],
};

export type SiteConfig = typeof siteConfig;
