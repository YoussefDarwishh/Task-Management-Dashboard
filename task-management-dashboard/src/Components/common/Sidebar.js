import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '0.6rem 0.9rem',
    marginBottom: '0.2rem',
    borderRadius: '0.5rem',
    fontSize: '0.9rem',
    backgroundColor: isActive ? 'var(--primary-soft)' : 'transparent',
    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
  });

  return (
    <aside
      style={{
        width: '240px',
        borderRight: '1px solid var(--border)',
        padding: '1rem',
        backgroundColor: 'var(--bg-alt)',
      }}
    >
      <nav>
        <NavLink to="/app/dashboard" style={linkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/app/projects" style={linkStyle}>
          Projects
        </NavLink>
        <NavLink to="/app/tasks" style={linkStyle}>
          Tasks
        </NavLink>
        <NavLink to="/app/team" style={linkStyle}>
          Team
        </NavLink>
        <NavLink to="/app/settings" style={linkStyle}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
