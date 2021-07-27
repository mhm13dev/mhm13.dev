// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Mubashir Hassan',
    title: 'Mubashir Hassan | mhm13.dev',
    description: `I am a MERN Stack Web Developer. I craft beautiful websites using ReactJS, NextJS on the Frontend and NodeJS, Express, MongoDB on the backend!`,
    social: [
      {
        name: 'github',
        link: 'https://github.com/mhm13dev',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/mhm13dev',
      },
      {
        name: 'instagram',
        link: 'https://instagram.com/mhm13dev',
      },
      {
        name: 'facebook',
        link: 'https://facebook.com/mhm13dev',
      },
      {
        name: 'linkedin',
        link: 'https://linkedin.com/in/mhm13dev',
      },
    ],
  });
}
