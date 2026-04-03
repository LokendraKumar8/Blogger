import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const posts = useSelector((state) => state.posts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    const term = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term)
    );
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold mb-2 text-gray-900 dark:text-white">
              All Stories
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Explore amazing blog posts
            </p>
          </div>

          <Link to="/new" className="btn-primary">
            ✨ Create Post
          </Link>
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
          className="w-full border rounded-lg px-4 py-2 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl font-semibold">
            {posts.length === 0 ? "No posts yet" : "No posts match your search"}
          </p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <Link
                to={`/post/${post.id}`}
                className="block bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 dark:border dark:border-gray-700"
              >
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {post.category || "General"}
                </p>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.content}
                </p>
                <p>❤️ {post.likes}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePage;
