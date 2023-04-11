import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Error from './components/Errror/Error';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path:"/:id",
    element:<JobDetails></JobDetails>,
    loader: () => fetch('jobData.json')
  },
  {
    path:"statistics",
    element: <Statistics></Statistics>
  },
  {
    path:"applied-jobs",
    element: <AppliedJobs></AppliedJobs>,
    loader: () => fetch('jobData.json')
  },
  {
    path: "blog",
    element: <Blog></Blog>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
