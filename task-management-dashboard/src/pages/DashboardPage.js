import React from 'react';
import { useTasks } from '../hooks/useTasks';
import StatsCard from '../Components/dashboard/StatsCard.js';
import ActivityFeed from '../Components/dashboard/ActivityFeed.js';
import UpcomingTasks from '../Components/dashboard/UpcomingTasks.js';

const DashboardPage = () => {
  const { tasks, projects, activity } = useTasks();

  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((t) => t.status === 'done').length;
  const inProgress = tasks.filter((t) => t.status === 'in-progress').length;

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        <StatsCard
          label="Total Tasks"
          value={totalTasks}
          subtitle={`${doneTasks} completed`}
        />
        <StatsCard
          label="In Progress"
          value={inProgress}
          subtitle="Active tasks"
        />
        <StatsCard
          label="Projects"
          value={projects.length}
          subtitle="Total projects"
        />
      </div>

      <div className="grid" style={{ marginTop: '1.2rem' }}>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '2fr 1fr' }}>
          <ActivityFeed items={activity} />
          <UpcomingTasks tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
