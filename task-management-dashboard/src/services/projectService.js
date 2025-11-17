export const getStoredProjects = () =>
  JSON.parse(localStorage.getItem('tmd_projects') || '[]');

export const saveProjects = (projects) =>
  localStorage.setItem('tmd_projects', JSON.stringify(projects));