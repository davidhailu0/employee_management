import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import AddEmployee from './routes/addEmployee';
import EditEmployee,{loader} from './routes/edit';
import ListOfEmployees,{loader as employeeListLoader} from './routes/listEmployee';
import ErrorPage from './routes/error';
import './index.css';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/listOfEmployees",
    element:<ListOfEmployees/>,
    errorElement:<ErrorPage/>,
    loader:employeeListLoader
  },
  {
    path:"/addEmployee",
    element:<AddEmployee/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/edit/:id",
    element:<EditEmployee/>,
    errorElement:<ErrorPage/>,
    loader:loader
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
