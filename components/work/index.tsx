import { workExperiences, type WorkExperience } from "@/components/work/data";

interface WorkItemProps {
  experience: WorkExperience;
}

function WorkItem({ experience }: WorkItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <span className="text-neutral-900 dark:text-neutral-100 font-medium">
          {experience.title}
        </span>
        <span className="text-neutral-500 dark:text-neutral-500 text-xs">
          {experience.duration}
        </span>
      </div>
      <div className="text-neutral-600 dark:text-neutral-400 mb-2">
        {experience.company} • {experience.location}
      </div>
      <ul className="text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-1">
        {experience.description.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-neutral-400 dark:text-neutral-500 mr-2 text-xs">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Work() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
        Work
      </h2>
      <div className="space-y-6 text-sm">
        {workExperiences.map((experience) => (
          <WorkItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
