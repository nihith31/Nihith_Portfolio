export const site = {
  name: "Nihith Konakalla",
  role: "Product Management · AI Products",
  tagline:
    "I spent 18 months in the part of the product lifecycle where requirements meet reality. Now I write the requirements.",
  summary:
    "QA and automation engineer turned product manager, building AI products for users the industry usually designs past.",
  email: "nihinihith@gmail.com",
  phone: "+91 97015 53734",
  location: "Jangareddygudem, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/nihith-konakalla-89004821a/",
  github: "https://github.com/nihith31",
  url: "https://nihithkonakalla.vercel.app",
  resumePath: "/Nihith_Konakalla_Resume.pdf",
} as const;

export const sakhi = {
  url: "https://trysakhiai.vercel.app/",
  label: "Product site",
  /** The landing page and APK are live; the backend is not currently running. */
  status:
    "The product site and Android APK are live. The backend is not currently running, so the app is not usable end to end.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
] as const;
