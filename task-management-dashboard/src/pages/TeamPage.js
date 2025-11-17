import React from 'react';
import { useTasks } from '../hooks/useTasks';

const TeamPage = () => {
  const { team } = useTasks();

  return (
    <div>
      <h1>Team</h1>
      <div className="card" style={{ marginTop: '1rem' }}>
        {team.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            No team members.
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {team.map((m) => (
              <li
                key={m.id}
                style={{
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.9rem',
                }}
              >
                <span>{m.name}</span>
                <span style={{ color: 'var(--text-muted)' }}>{m.role}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
