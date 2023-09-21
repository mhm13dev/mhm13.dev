import { Metadata } from "next";

const username = "mhm13dev";
const website = "mhm13.dev";
const websiteUrl = `https://${website}`;
const title = `Mubashir Hassan - MERN Stack Web Developer | ${website}`;
const description =
  "I am a MERN Stack Web Developer. Some of the technologies I work with include React.js, Next.js, Typescript, TailwindCSS, Node.js, Express.js, Nest.js, MongoDB, Firebase, and more. I also work with Git, GitHub, Docker, AWS services, Nginx and other tools to manage and deploy code to production.";
const imageSrc = `${websiteUrl}/images/mubashir-630x630.png`;

export const defaultMetadata: Metadata = {
  title,
  description,
  keywords:
    "mubashir hassan, mubashir, mhm13dev, mhm13, mern, web developer, mern stack developer",
  metadataBase: new URL(websiteUrl),
  openGraph: {
    type: "article",
    title,
    description,
    url: websiteUrl,
    siteName: website,
    images: [
      {
        url: imageSrc,
        width: 630,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: `@${username}`,
    images: [
      {
        url: imageSrc,
        width: 630,
        height: 630,
        alt: title,
      },
    ],
  },
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/favicons/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-57x57.png",
      sizes: "57x57",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-60x60.png",
      sizes: "60x60",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-72x72.png",
      sizes: "72x72",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-76x76.png",
      sizes: "76x76",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-120x120.png",
      sizes: "120x120",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-144x144.png",
      sizes: "144x144",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicons/android-icon-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicons/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
  ],
};
