import React from 'react';
import { format } from 'date-fns';

const UpcomingTasks = ({ tasks }) => {
  const upcoming = tasks
    .filter((t) => t.dueDate)
    .sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    )
    .slice(0, 5);

  return (
    <div className="card">
      <h3>Upcoming Deadlines</h3>
      {upcoming.length === 0 ? (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          No upcoming tasks with due dates.
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.6rem' }}>
          {upcoming.map((t) => (
            <li
              key={t.id}
              style={{
                fontSize: '0.85rem',
                marginBottom: '0.4rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{t.title}</span>
              <span style={{ color: 'var(--text-muted)' }}>
                {format(new Date(t.dueDate), 'MMM d')}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingTasks;
