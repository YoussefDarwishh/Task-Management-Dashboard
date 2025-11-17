import React from 'react';

const statusClass = (status) => {
  if (status === 'todo') return 'badge badge-todo';
  if (status === 'in-progress') return 'badge badge-inprogress';
  if (status === 'done') return 'badge badge-done';
  return 'badge';
};

const TaskCard = ({ task, onOpen, draggableProps }) => {
  return (
    <div
      className="card"
      style={{
        padding: '0.6rem 0.7rem',
        marginBottom: '0.5rem',
        cursor: 'grab',
      }}
      onClick={onOpen}
      draggable={true}
      {...draggableProps}
    >
      <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{task.title}</div>
      <div
        style={{
          marginTop: '0.2rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}
      >
        {task.description || 'No description'}
      </div>
      <div style={{ marginTop: '0.35rem', display: 'flex', gap: '0.4rem' }}>
        <span className={statusClass(task.status)}>{task.status}</span>
        {task.dueDate && (
          <span
            className="badge"
            style={{
              backgroundColor: 'var(--primary-soft)',
              color: 'var(--primary)',
            }}
          >
            Due {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
