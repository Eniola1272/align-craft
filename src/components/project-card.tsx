import { projects } from "@/content/site";
import { ProjectArt } from "@/content/project-art";
export function ProjectCard({ index }: { index: number }) {
  const project = projects[index];
  if (!project) return null;
  return (
    <article
      className={`studio-project studio-project-${index}`}
      id={`project-${project.name.toLowerCase()}`}
    >
      <button
        className="studio-project-visual"
        data-project={index}
        aria-label={`Explore ${project.name}, a ${project.industry.toLowerCase()} studio concept`}
      >
        <ProjectArt index={index} />
        <span className="project-open" aria-hidden="true">
          ↗
        </span>
      </button>
      <div className="studio-project-heading">
        <h3>
          <button data-project={index}>
            {project.name}
            <span aria-hidden="true">↗</span>
          </button>
        </h3>
        <span>{project.industry} / Concept</span>
      </div>
      <p>{project.description}</p>
      <ul className="project-disciplines" aria-label="Concept scope">
        {project.deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
