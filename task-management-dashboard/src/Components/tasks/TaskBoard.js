import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import TaskColumn from './TaskColumn';
import TaskDetail from './TaskDetail';

const TaskBoard = () => {
  const { tasks, updateTask } = useTasks();
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDropTask = (taskId, newStatus) => {
    updateTask(taskId, { status: newStatus });
  };

  const byStatus = (status) => tasks.filter((t) => t.status === status);

  return (
    <>
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '1rem',
        }}
      >
        <TaskColumn
          label="To Do"
          status="todo"
          tasks={byStatus('todo')}
          onDropTask={handleDropTask}
          onOpenTask={setSelectedTask}
        />
        <TaskColumn
          label="In Progress"
          status="in-progress"
          tasks={byStatus('in-progress')}
          onDropTask={handleDropTask}
          onOpenTask={setSelectedTask}
        />
        <TaskColumn
          label="Done"
          status="done"
          tasks={byStatus('done')}
          onDropTask={handleDropTask}
          onOpenTask={setSelectedTask}
        />
      </div>
      <TaskDetail task={selectedTask} onClose={() => setSelectedTask(null)} />
    </>
  );
};

export default TaskBoard;
