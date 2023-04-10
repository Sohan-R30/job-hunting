import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Error from './components/Errror/Error';

const router = createBrowserRouter([
  {
    path:"/",
    element:<p>home</p>,
    errorElement: <Error></Error>
  },
  {
    path:"statistics",
    element: <p>Statistics</p>
  },
  {
    path:"applied-jobs",
    element:<p>Applied Jobs</p>
  },
  {
    path: "blog",
    element:<p>Blog</p>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
