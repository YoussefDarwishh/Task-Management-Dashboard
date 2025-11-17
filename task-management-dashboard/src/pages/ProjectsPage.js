import React from 'react';
import { useTasks } from '../hooks/useTasks';
import ProjectForm from '../Components/projects/ProjectForm';
import ProjectCard from '../Components/projects/ProjectCard';

const ProjectsPage = () => {
  const { projects, addProject } = useTasks();

  return (
    <div>
      <h1>Projects</h1>
      <ProjectForm onSubmit={addProject} />
      {projects.length === 0 ? (
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          No projects yet. Create one above.
        </p>
      ) : (
        <div className="grid" style={{ marginTop: '0.5rem', gap: '1rem' }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
