import { motion } from "framer-motion";
import React from "react";

const variants = {
  start: {
    x: "-100vw",
  },
  end: {
    x: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const listVar = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const Nav = () => {
  const arr = [1, 2, 3];
  return (
    <div className="s_body flexing">
      <motion.ul
        className="bg-gray-700 h_f rounded-xl flexing flex-col gap-4 "
        variants={variants}
        animate="end"
        initial="start"
      >
        {arr.map((data) => (
          <motion.li className="py-2 px-4 bg-white" variants={listVar}>
            {data}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Nav;
