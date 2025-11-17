import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        display: 'flex',
        padding: '0.75rem 1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-alt)',
      }}
    >
      <div style={{ fontWeight: 700 }}>Task Management Dashboard</div>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button className="btn btn-outline" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {user && (
          <>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {user.name} ({user.email})
            </span>
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
