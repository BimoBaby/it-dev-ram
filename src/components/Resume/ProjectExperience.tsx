import type { ProjectExperience as ProjectExperienceItem } from '@/data/resume/projectExperience';

interface ProjectExperienceProps {
  data: ProjectExperienceItem[];
}

export default function ProjectExperience({ data }: ProjectExperienceProps) {
  return (
    <div className="project-experience">
      <div className="title">
        <h2>Project Experience</h2>
      </div>
      <ul className="project-experience-list">
        {data.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
