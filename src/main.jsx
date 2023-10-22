import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import RepositoryList from './routes/RepositoryLists.jsx';
import Repository from './routes/Repository.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getRepo } from './utils/index.js';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <RepositoryList />,
      },
      {
        path: 'repository/:id',
        element: <Repository />,
        loader: getRepo,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
