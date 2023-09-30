import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress_bar"
        style={{ scaleX: useSpring(scrollYProgress) }}
      ></motion.div>

      <nav className="h_nav bg-slate-400">
        <NavLink to="/click">Click</NavLink>
        <NavLink to="/drag">Drag</NavLink>
        <NavLink to="/nav">Nav</NavLink>
        <NavLink to="/cnav">Cnav</NavLink>
        <NavLink to="/scroll">Scroll</NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default MainLayout;
