import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import Deleted from "./Pages/Deleted.jsx";
import { Provider } from "react-redux";
import {Store} from './App/Store/Store'
import Completed from "./Pages/Completed.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/reactTodo/" element={<Layout />}>
      <Route path="/reactTodo/" element={<Home />} />
      <Route path="/reactTodo/completed" element={<Completed />} />
      <Route path="/reactTodo/deleted" element={<Deleted />} />
      <Route path="/" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
