# Task Management Dashboard (React)

A Trello/Asana-style task management dashboard built with modern React patterns: hooks, context, routing, theming, and localStorage persistence.  
This project is designed as a **portfolio-ready** example that demonstrates core and advanced React concepts end to end.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Screens & Functionality](#screens--functionality)
  - [Authentication](#authentication)
  - [Dashboard](#dashboard)
  - [Projects](#projects)
  - [Tasks](#tasks)
  - [Team](#team)
  - [Settings](#settings)
- [Architecture & Concepts](#architecture--concepts)
  - [State Management](#state-management)
  - [Hooks](#hooks)
  - [Class Components](#class-components)
  - [Forms & Validation](#forms--validation)
  - [Routing](#routing)
  - [Theming](#theming)
  - [Persistence](#persistence)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

**Core App Features**

- 🔐 User registration, login, and fake password reset
- 🧑‍💻 Personal dashboard with key metrics and activity
- 📁 Project creation and management (list view)
- ✅ Task creation, editing (via status changes), and deletion
- 📌 Kanban-style task board (To Do / In Progress / Done)
- 🔍 Task search and filtering
- 👥 Basic team view
- 🗨️ Task comments in a detail modal
- ⏰ Due dates & upcoming deadlines list
- 🧾 Recent activity feed (projects & tasks)
- 🌓 Light/Dark theme toggle
- 📱 Responsive layout (desktop-first with mobile-friendly grid behavior)

**Technical / React Features**

- React functional components with hooks
- Class components (legacy support + lifecycle)
- Context API for global state (auth, theme, tasks/projects)
- Custom hooks for reusable logic
- Formik + Yup form handling & validation
- React Router v6 for navigation & protected routes
- LocalStorage integration for data persistence
- Error boundary to catch runtime errors
- Simple performance optimization with `useMemo` where relevant
- CSS variables–based theming + responsive layout

> ⚠️ **Note**: This is a front-end only demo. “Authentication” and data storage are simulated using browser `localStorage`; there is no real backend.

---

## Tech Stack

- **React** (Create React App)
- **React Router v6**
- **React Context API**
- **Formik** + **Yup** (forms & validation)
- **date-fns** (date formatting)
- **CSS (with custom properties / CSS variables)**

---

## Project Structure

```bash
task-management-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Sidebar.js
│   │   │   ├── Footer.js
│   │   │   ├── Loading.js
│   │   │   └── ErrorBoundary.js
│   │   ├── auth/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── PasswordReset.js
│   │   ├── dashboard/
│   │   │   ├── StatsCard.js
│   │   │   ├── ActivityFeed.js
│   │   │   └── UpcomingTasks.js
│   │   ├── projects/
│   │   │   ├── ProjectList.js (optional, simplified in page)
│   │   │   ├── ProjectCard.js
│   │   │   └── ProjectForm.js
│   │   └── tasks/
│   │       ├── TaskBoard.js
│   │       ├── TaskColumn.js
│   │       ├── TaskCard.js
│   │       ├── TaskDetail.js
│   │       └── TaskForm.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── DashboardPage.js
│   │   ├── ProjectsPage.js
│   │   ├── TasksPage.js
│   │   ├── TeamPage.js
│   │   └── SettingsPage.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useLocalStorage.js
│   │   ├── useTasks.js
│   │   └── useTheme.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   ├── ThemeContext.js
│   │   └── TaskContext.js
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── taskService.js
│   │   └── projectService.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── validators.js
│   ├── styles/
│   │   ├── globals.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
