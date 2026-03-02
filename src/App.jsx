import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./features/posts/HomePage";
import PostDetails from "./features/posts/PostDetails";
import PostForm from "./features/posts/PostForm";
import Layout from "./components/Layout";
import { BlogContext } from "./context/BlogContext";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useContext(BlogContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/new" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
      </Routes>
    </Layout>
  );
}

export default App;
