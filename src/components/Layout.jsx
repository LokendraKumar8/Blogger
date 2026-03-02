import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogContext } from "../context/BlogContext";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(BlogContext);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div
      className={
        theme === "dark"
          ? "bg-background-dark text-white min-h-screen"
          : "bg-background-light text-gray-900 min-h-screen"
      }
    >
      {/* top navigation bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed w-full z-50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light hover:from-primary-dark hover:to-secondary-dark transition"
            >
              📖 Blogger
            </Link>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/new" className="btn-primary">
                ✍️ New
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ rotate: 20 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* content area with optional sidebar */}
      <div className="pt-16 flex">
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={sidebarVariants}
          className="hidden md:block w-64 bg-white dark:bg-gray-800 h-screen border-r border-gray-200 dark:border-gray-700"
        >
          <div className="p-6 space-y-4">
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/"
                className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition"
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }}>
              <Link
                to="/new"
                className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-secondary dark:hover:text-secondary-light transition"
              >
                Create Post
              </Link>
            </motion.div>
          </div>
        </motion.aside>

        <motion.main
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="flex-1 p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
