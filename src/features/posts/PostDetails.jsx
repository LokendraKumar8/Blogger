import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { deletePost, likePost } from "./postsSlice";

const PostDetails = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likeAnim, setLikeAnim] = useState(false);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-4">😕</div>
        <p className="text-2xl font-bold mb-4">Post not found</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
        >
          ← Back to posts
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(id));
      navigate("/");
    }
  };

  const handleLike = () => {
    dispatch(likePost(id));
    setLikeAnim(true);
    setTimeout(() => setLikeAnim(false), 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 animate-fade-in"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition mb-8 font-semibold"
      >
        ← Back to posts
      </Link>

      <article className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-secondary h-64 rounded-xl mb-8 shadow-lg animate-pulse"></div>

        <header className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">📅 Recently updated</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="whitespace-pre-wrap break-words text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {post.content}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-pink-600 transition duration-300 font-semibold shadow-md hover:shadow-lg ${likeAnim ? "animate-bounce-in" : ""}`}
          >
            ❤️ Like ({post.likes})
          </button>
          <Link
            to={`/edit/${post.id}`}
            className="flex items-center gap-2 btn-secondary"
          >
            ✏️ Edit
          </Link>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 btn-secondary bg-red-600 hover:bg-red-700 text-white"
          >
            🗑️ Delete
          </button>
        </div>
      </article>
    </motion.div>
  );
};

export default PostDetails;
