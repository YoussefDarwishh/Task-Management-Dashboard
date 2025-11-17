// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './Components/common/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { TaskProvider } from './context/TaskContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <AuthProvider>
          <ThemeProvider>
            <TaskProvider>
              <App />
            </TaskProvider>
          </ThemeProvider>
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
