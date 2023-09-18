import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage.jsx';
import ProjectPage from './Pages/ProjectPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBarResponsive from './Components/NavBarResponsive.jsx';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBarResponsive />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/project', element: <ProjectPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
