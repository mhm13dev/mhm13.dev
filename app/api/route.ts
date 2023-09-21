import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Mubashir Hassan",
    title: "Mubashir Hassan | mhm13.dev",
    description:
      "I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend!",
    social: [
      {
        name: "github",
        link: "https://github.com/mhm13dev",
      },
      {
        name: "twitter",
        link: "https://twitter.com/mhm13dev",
      },
      {
        name: "linkedin",
        link: "https://linkedin.com/in/mhm13dev",
      },
      {
        name: "resume",
        link: "https://bit.ly/mern-cv-mhm13dev",
      },
    ],
  });
}
