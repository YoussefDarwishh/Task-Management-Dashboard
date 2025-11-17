// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import TasksPage from './pages/TasksPage';
import TeamPage from './pages/TeamPage';
import SettingsPage from './pages/SettingsPage';

import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import PasswordReset from './Components/auth/PasswordReset';

import Layout from './Components/common/Layout';
import ProtectedRoute from './Components/common/ProtectedRoute';

import './index.css';
import './styles/globals.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<PasswordReset />} />

      {/* Protected app */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Fallback: redirect everything else to home */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
