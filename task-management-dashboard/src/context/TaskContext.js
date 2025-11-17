import React, { createContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [projects, setProjects] = useLocalStorage('tmd_projects', []);
  const [tasks, setTasks] = useLocalStorage('tmd_tasks', []);
  const [activity, setActivity] = useLocalStorage('tmd_activity', []);
  const [team, setTeam] = useLocalStorage('tmd_team', [
    { id: '1', name: 'You', role: 'Owner' },
  ]);

  const logActivity = (message, type = 'info') => {
    const entry = {
      id: Date.now().toString(),
      message,
      type,
      createdAt: new Date().toISOString(),
    };
    setActivity((prev) => [entry, ...prev].slice(0, 50));
  };

  // Projects
  const addProject = (data) => {
    const project = {
      id: Date.now().toString(),
      name: data.name,
      description: data.description || '',
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    setProjects((prev) => [...prev, project]);
    logActivity(`Project created: ${project.name}`, 'project');
  };

  const updateProject = (id, updates) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
    logActivity(`Project updated`, 'project');
  };

  // Tasks
  const addTask = (data) => {
    const task = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description || '',
      status: data.status || 'todo',
      projectId: data.projectId || null,
      assigneeId: data.assigneeId || null,
      dueDate: data.dueDate || null,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, task]);
    logActivity(`Task created: ${task.title}`, 'task');
  };

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
    logActivity(`Task updated`, 'task');
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    logActivity(`Task deleted`, 'task');
  };

  const addCommentToTask = (id, comment) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              comments: [
                {
                  id: Date.now().toString(),
                  text: comment,
                  createdAt: new Date().toISOString(),
                },
                ...(t.comments || []),
              ],
            }
          : t
      )
    );
    logActivity(`Comment added to task`, 'task');
  };

  const value = useMemo(
    () => ({
      projects,
      tasks,
      activity,
      team,
      addProject,
      updateProject,
      addTask,
      updateTask,
      deleteTask,
      addCommentToTask,
      logActivity,
      setTeam,
    }),
    [projects, tasks, activity, team]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
