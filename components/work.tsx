export default function Work() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
        Work
      </h2>
      <div className="space-y-6 text-sm">
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">
              Tech Lead
            </span>
            <span className="text-neutral-500 dark:text-neutral-500 text-xs">
              May 2025 — Present
            </span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 mb-1">
            Kwanso
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Leading technical architecture decisions and development teams of 5+
            engineers. Designing scalable backend systems and database
            optimization strategies. Mentoring junior and mid-level developers,
            conducting code reviews, and overseeing the delivery of robust
            full-stack applications with a focus on server-side performance
            using Node.js, Nest.js, and TypeScript. Collaborating closely with
            product managers and stakeholders to architect efficient backend
            solutions that meet business requirements.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">
              Senior Software Developer
            </span>
            <span className="text-neutral-500 dark:text-neutral-500 text-xs">
              April 2024 — May 2025
            </span>
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 mb-1">
            Kwanso
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Developed and maintained scalable backend systems serving thousands
            of users. Built robust RESTful and GraphQL APIs, implemented complex
            business logic, and optimized database queries for improved
            performance. Integrated subscription and payment processing systems
            using Chargebee and Stripe, handling recurring billing, plan
            upgrades, and payment workflows. Ensured data security and
            integrity, collaborated with frontend teams to design efficient API
            contracts and worked on full-stack features using Node.js, Nest.js,
            TypeScript, and modern databases like PostgreSQL, Redis and
            Elasticsearch.
          </p>
        </div>
      </div>
    </section>
  );
}
