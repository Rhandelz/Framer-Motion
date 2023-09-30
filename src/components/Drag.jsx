import { motion } from "framer-motion";
import React from "react";

const Drag = () => {
  return (
    <div>
      <motion.div
        className="h-20 w-20 bg-green-500 rounded-xl leaf flexing font-bold cursor-grab"
        drag
      >
        drag me
      </motion.div>
    </div>
  );
};

export default Drag;
