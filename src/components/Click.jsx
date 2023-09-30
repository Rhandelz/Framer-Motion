import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const varr = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Click = () => {
  const [is, setIs] = React.useState(true);

  const art = is ? { x: 20, opacity: 1 } : { x: 100, opacity: 1 };
  return (
    <motion.div className="s_body bg-gray-200">
      <AnimatePresence>
        <motion.h1
          className="font-bold"
          animate={art}
          variants={varr}
          initial="hidden"
          transition={{ type: "spring", stiffness: 100, duration: 1 }}
          exit={{ scale: 0, y: -200 }}
        >
          {is ? "true" : "false"}
        </motion.h1>
        <motion.button
          className="bg-blue-700 text-white font-bold p-4 rounded-xl cursor-pointer "
          onClick={() => setIs(!is)}
          animate={art}
        >
          {is ? "<" : ">"}
        </motion.button>
      </AnimatePresence>
    </motion.div>
  );
};

export default Click;
