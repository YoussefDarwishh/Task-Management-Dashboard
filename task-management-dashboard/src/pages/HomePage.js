import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <div>
      <h1>Settings</h1>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h3>User Settings</h3>
        {user ? (
          <div
            style={{
              marginTop: '0.5rem',
              fontSize: '0.9rem',
            }}
          >
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
          </div>
        ) : null}
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h3>Theme</h3>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
          }}
        >
          Current theme: {theme}
        </p>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h3>Notifications</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          In this demo, notifications are represented by upcoming tasks and
          activity logs on the dashboard.
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;
