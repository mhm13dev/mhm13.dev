import { projects, type Project } from "@/components/projects/data";

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <span className="text-neutral-900 dark:text-neutral-100 font-medium">
          {project.title}
        </span>
      </div>
      <div className="text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
        {project.description}
      </div>
      <ul className="text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-1">
        {project.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-xs mt-1">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
        Projects
      </h2>
      <div className="space-y-6 text-sm">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
