"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HomeBtns = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 1, ease:"backIn" }}
      className="flex gap-2 w-full justify-center p-4"
    >
      <Link
        href="/stamp/create_stamp"
        className="p-3 border border-gray-700 rounded-md hover:bg-gray-400 transition-all duration-100 ease-in"
      >
        Add Stamp
      </Link>
      <Link
        href="/stamp"
        className="p-3 bg-white text-black border border-gray-700 rounded-md hover:bg-gray-400 transition-all duration-100 ease-in"
      >
        Explore Gallery
      </Link>
    </motion.div>
  );
};

export default HomeBtns;
