import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './about.jsx';
import Contact from './pages/contact.jsx';
import Layout from './components/layout/layout.jsx';
import Milestone from './pages/milestone.jsx';
import Testimony from './pages/testimony.jsx';
import Aboutlayout from './components/layout/aboutlayout.jsx';
import NotFound from './pages/notfund.jsx';
import Blog from './pages/blog.jsx';
import Profile from './pages/profile.jsx';
import Singleblogpost from './pages/singleblogpost.jsx';
import Postcards from './pages/post-cards.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'about',
        element: <Aboutlayout />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: 'milestone',
            element: <Milestone />,
          },
          {
            path: 'testimony',
            element: <Testimony />,
          },
        ],
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:id',
        element: <Postcards />,
      },
      {
        path: "profile/:id", 
        element: <Profile />,
      },
      {
        path: 'contact us',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
