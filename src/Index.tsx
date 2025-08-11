import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './theme/global';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomePage from './pages/Home/Index';
import AboutPage from './pages/About/Index';
import ProjectsPage from './pages/Projects/Index';
import ContactPage from './pages/Contact/Index';
// import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "About", element: <AboutPage /> },
      { path: "Projects", element: <ProjectsPage /> },
      { path: "Contact", element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
);
