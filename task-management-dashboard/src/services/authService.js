export const getStoredUsers = () =>
  JSON.parse(localStorage.getItem('tmd_users') || '[]');

export const saveUsers = (users) =>
  localStorage.setItem('tmd_users', JSON.stringify(users));