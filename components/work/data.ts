export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: "tech-lead-kwanso",
    title: "Tech Lead",
    company: "Kwanso",
    location: "Lahore, Pakistan",
    duration: "May 2025 — Present",
    description: [
      "Leading technical architecture decisions and development teams of 5+ engineers",
      "Designing scalable backend systems and database optimization strategies",
      "Mentoring junior and mid-level developers, conducting code reviews",
      "Driving delivery of robust full-stack applications with focus on server-side performance",
      "Collaborating with product managers and stakeholders to architect efficient backend solutions",
    ],
  },
  {
    id: "senior-dev-kwanso",
    title: "Senior Software Developer",
    company: "Kwanso",
    location: "Lahore, Pakistan",
    duration: "April 2024 — May 2025",
    description: [
      "Developed and maintained scalable backend systems serving thousands of users",
      "Built robust RESTful and GraphQL APIs with complex business logic",
      "Optimized database queries for improved performance",
      "Integrated subscription and payment processing systems using Chargebee and Stripe",
      "Handled recurring billing, plan upgrades, and payment workflows",
      "Ensured data security and integrity across all systems",
    ],
  },
  {
    id: "web-team-lead-algo-alliance",
    title: "Web Team Lead",
    company: "Algo Alliance",
    location: "Remote, Dubai",
    duration: "September 2022 — March 2024",
    description: [
      "Led small team of frontend and backend developers",
      "Architected and developed various microservices for social media module",
      "Integrated smart contracts using Web3.js and Ethers.js in React.js",
      "Reviewed pull requests, maintained codebase quality and delivered the blockchain‑enabled platform Centher.io",
    ],
  },
  {
    id: "freelance-dev-germany",
    title: "Freelance Web Developer",
    company: "Crime Cases",
    location: "Remote, Germany",
    duration: "April 2022 — September 2022",
    description: [
      "Built applications using Firebase Firestore, Authentication and Hosting",
      "Implemented real-time data sync and secure auth using Firebase Cloud Functions",
      "Developed the Crime Cases Police Server and Crime Cases Tonstudio applications",
    ],
  },
  {
    id: "mern-dev-algo-alliance",
    title: "MERN Stack Developer",
    company: "Algo Alliance",
    location: "Remote, Dubai",
    duration: "December 2021 — March 2022",
    description: [
      "Built REST APIs for social media platform components",
      "Integrated Web3.js APIs with client-side React applications",
      "Developed real-time features using Socket.io and JWT authentication",
      "Worked with MongoDB, Express.js, and modern JavaScript frameworks",
      "Contributed to early development of Centher.io platform",
    ],
  },
  {
    id: "freelance-dev-early",
    title: "Freelance Web Developer",
    company: "Various Clients",
    location: "Remote",
    duration: "March 2019 — December 2021",
    description: [
      "Delivered 10+ web applications for international clients, achieving 100% project completion rate",
      "Created REST APIs using Node.js and Express.js frameworks",
      "Developed responsive UIs with React.js, Next.js and TailwindCSS",
      "Built single page applications and modern landing pages",
      "Migrated legacy Angular application to modern Next.js stack",
    ],
  },
];
