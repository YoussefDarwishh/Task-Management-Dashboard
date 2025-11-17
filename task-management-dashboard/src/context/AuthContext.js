import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [storedUser, setStoredUser] = useLocalStorage('tmd_user', null);
  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    setStoredUser(user);
  }, [user, setStoredUser]);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('tmd_users') || '[]');
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) throw new Error('Invalid email or password');
    setUser(found);
  };

  const register = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem('tmd_users') || '[]');
    if (users.some((u) => u.email === email)) {
      throw new Error('Email already registered');
    }
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };
    const updated = [...users, newUser];
    localStorage.setItem('tmd_users', JSON.stringify(updated));
    setUser(newUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
