import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import MainSection from "./Components/MainSection.jsx";
import Recent from "./Pages/Recent.jsx";
import Archived from "./Pages/Archived.jsx";
import Home from "./Pages/Home.jsx";
import Deleted from "./Pages/Deleted.jsx";
import { Provider } from "react-redux";
import {Store} from './App/Store/Store'
import Completed from "./Pages/Completed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
          {
            path:"",
            element: <Home />
          },         
          {
            path: "completed",
            element: <Completed />,
          },{
            path: 'deleted',
            element: <Deleted />
          }

          
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
