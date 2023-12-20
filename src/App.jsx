import { Children, useState } from "react";
import "./App.css";

import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Completed from "./Pages/Completed";
import Deleted from "./Pages/Deleted";

function App() {
  const [count, setCount] = useState(0);
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/reactTodo/" element={<Layout />}>
        <Route path="/reactTodo/" element={<Home />} />
        <Route path="/reactTodo/completed" element={<Completed />} />
        <Route path="/reactTodo/deleted" element={<Deleted />} />
      </Route>
    )
  );

  return (
    <>
      <div className="main w-full h-full">
        <RouterProvider router={Router} />
      </div>
    </>
  );
}

export default App;
