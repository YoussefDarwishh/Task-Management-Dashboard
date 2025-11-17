import React from 'react';

class ActivityFeed extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      console.log('Activity updated');
    }
  }

  render() {
    const { items } = this.props;

    if (!items || items.length === 0) {
      return (
        <div className="card">
          <h3>Recent Activity</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            No activity yet.
          </p>
        </div>
      );
    }

    return (
      <div className="card">
        <h3>Recent Activity</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
          {items.slice(0, 8).map((a) => (
            <li
              key={a.id}
              style={{
                fontSize: '0.85rem',
                marginBottom: '0.4rem',
                color: 'var(--text-muted)',
              }}
            >
              {a.message}{' '}
              <span style={{ opacity: 0.7, fontSize: '0.75rem' }}>
                ({new Date(a.createdAt).toLocaleString()})
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ActivityFeed;
