
export const getStoredTasks = () =>
  JSON.parse(localStorage.getItem('tmd_tasks') || '[]');

export const saveTasks = (tasks) =>
  localStorage.setItem('tmd_tasks', JSON.stringify(tasks));
