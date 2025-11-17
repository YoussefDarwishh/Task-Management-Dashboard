import React, { useState } from 'react';
import TaskForm from '../Components/tasks/TaskForm';
import TaskBoard from '../Components/tasks/TaskBoard';
import { useTasks } from '../hooks/useTasks';

const TasksPage = () => {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState('');

  const filteredTasks = filter
    ? tasks.filter((t) =>
        t.title.toLowerCase().includes(filter.toLowerCase())
      )
    : tasks;

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm />
      <div
        style={{
          marginBottom: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Total tasks: {tasks.length}
        </div>
        <input
          className="input"
          style={{ maxWidth: '240px' }}
          placeholder="Search tasks..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <TaskBoard tasks={filteredTasks} />
    </div>
  );
};

export default TasksPage;
