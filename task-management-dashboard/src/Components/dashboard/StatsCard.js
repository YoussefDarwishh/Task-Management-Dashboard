import React from 'react';

class StatsCard extends React.Component {
  render() {
    const { label, value, subtitle } = this.props;
    return (
      <div className="card">
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {label}
        </div>
        <div style={{ fontSize: '1.6rem', fontWeight: 700, marginTop: '0.3rem' }}>
          {value}
        </div>
        {subtitle && (
          <div
            style={{
              marginTop: '0.2rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    );
  }
}

export default StatsCard;
