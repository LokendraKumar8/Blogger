import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "Welcome to the Blog",
    content: "This is your first post. Feel free to edit or delete it.",
    likes: 0,
    category: "General",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, category = "General") {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            category,
            likes: 0,
          },
        };
      },
    },
    editPost(state, action) {
      const { id, title, content, category } = action.payload;
      const existing = state.find((post) => post.id === id);
      if (existing) {
        existing.title = title;
        existing.content = content;
        if (category !== undefined) existing.category = category;
      }
    },
    deletePost(state, action) {
      return state.filter((post) => post.id !== action.payload);
    },
    likePost(state, action) {
      const existing = state.find((p) => p.id === action.payload);
      if (existing) {
        existing.likes = existing.likes === 0 ? 1 : 0;
      }
    },
  },
});

export const { addPost, editPost, deletePost, likePost } = postsSlice.actions;
export default postsSlice.reducer;
