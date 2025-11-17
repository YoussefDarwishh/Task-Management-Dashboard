import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <h3>{project.name}</h3>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          marginTop: '0.3rem',
        }}
      >
        {project.description || 'No description'}
      </p>
      <div
        style={{
          marginTop: '0.5rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}
      >
        Created{' '}
        {project.createdAt &&
          new Date(project.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ProjectCard;
