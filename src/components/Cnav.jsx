import React from "react";
import { motion } from "framer-motion";

const mainVariant = {
  start: {
    scale: 0.4,
    borderRadius: 100,
    transition: {
      staggerChildren: 0.1 /* delayChildren: 0.2 */,
      when: "afterChildren",
    },
  },
  end: {
    scale: 1,
    borderRadius: 10,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const liVariant = {
  start: {
    y: 10,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: "200",
    },
  },
};
const Cnav = () => {
  const arr = [1, 2, 3, 4, 5];

  const [isI, setIs] = React.useState(true);

  return (
    <div className="s_body bg-gray-200 flexing">
      <motion.ul
        className="bg-gray-700 h_f flexing flex-col gap-2"
        variants={mainVariant}
        initial={false}
        animate={isI ? "start" : "end"}
        onClick={() => setIs(!isI)}
      >
        {arr.map((p) => (
          <motion.li
            variants={liVariant}
            whileHover={{
              scale: 1.4,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="bg-gray-500 px-10 font-bold text-white rounded-2xl "
          >
            {p}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Cnav;
