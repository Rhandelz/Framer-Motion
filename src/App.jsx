import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Click, Drag, Nav, Cnav, Scroll } from "./components";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/click" element={<Click />} />
        <Route path="/drag" element={<Drag />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/cnav" element={<Cnav />} />
        <Route path="/scroll" element={<Scroll />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
