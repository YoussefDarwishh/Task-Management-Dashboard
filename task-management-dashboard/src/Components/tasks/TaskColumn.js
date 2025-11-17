import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ label, status, tasks, onDropTask, onOpenTask }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData('text/plain');
    onDropTask(id, status);
  };

  return (
    <div
      className="card"
      style={{
        minHeight: '200px',
        backgroundColor: 'var(--bg)',
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>{label}</h3>
      <div style={{ marginTop: '0.5rem' }}>
        {tasks.map((t) => (
          <TaskCard
            key={t.id}
            task={t}
            onOpen={() => onOpenTask(t)}
            draggableProps={{
              onDragStart: (e) => e.dataTransfer.setData('text/plain', t.id),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
