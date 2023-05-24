import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdadeCoffee from './components/UpdadeCoffee';
import DisplayCoffee from './components/DisplayCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader:()=> fetch('http://localhost:3000/coffee')
 
  },{
    path:'addCoffee',
    element:<AddCoffee></AddCoffee>
  },{
    path:'updateCoffee/:id',
    element:<UpdadeCoffee></UpdadeCoffee>,
    loader: ({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
  },{
    path:'displayCoffee',
    element:<DisplayCoffee></DisplayCoffee>
    

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
