import type { Project } from '../data';

export function ProjectShowcase({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <span className="project-number mono">{project.number}</span>
      <div className="project-content">
        <div className="project-topline"><h3>{project.title}</h3><span className="project-context">{project.context}</span></div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`Technologies for ${project.title}`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}

export function SectionHeading({ eyebrow, title, note, headingId }: { eyebrow: string; title: React.ReactNode; note?: string; headingId?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2 id={headingId}>{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>;
}
