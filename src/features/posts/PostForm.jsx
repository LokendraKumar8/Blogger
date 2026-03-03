import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { addPost, editPost } from "./postsSlice";

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const existingPost = useSelector((state) =>
    state.posts.find((p) => p.id === id),
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setContent(existingPost.content);
      setCategory(existingPost.category || "General");
    }
  }, [existingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      if (existingPost) {
        dispatch(editPost({ id, title, content, category }));
      } else {
        dispatch(addPost(title, content, category));
      }
      navigate("/");
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition mb-8 font-semibold"
      >
        ← Back to posts
      </Link>

      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-slide-up">
            {existingPost ? "✏️ Edit Post" : "✨ Create New Post"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Share your thoughts and ideas
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-bold text-gray-900 dark:text-white mb-2 text-lg">
                Post Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter an engaging title..."
                className="w-full border-2 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-900 dark:text-white mb-2 text-lg">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border-2 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition"
              >
                <option>General</option>
                <option>Tech</option>
                <option>Life</option>
                <option>News</option>
                <option>Tutorial</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-gray-900 dark:text-white mb-2 text-lg">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here..."
                className="w-full border-2 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 h-56 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none transition"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {content.length} characters
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Saving..."
                  : existingPost
                    ? "💾 Save Changes"
                    : "📝 Publish Post"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default PostForm;
