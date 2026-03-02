import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "Welcome to the Blog",
    content: "This is your first post. Feel free to edit or delete it.",
    likes: 0,
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
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            likes: 0,
          },
        };
      },
    },
    editPost(state, action) {
      const { id, title, content } = action.payload;
      const existing = state.find((post) => post.id === id);
      if (existing) {
        existing.title = title;
        existing.content = content;
      }
    },
    deletePost(state, action) {
      return state.filter((post) => post.id !== action.payload);
    },
    likePost(state, action) {
      const existing = state.find((p) => p.id === action.payload);
      if (existing) {
        existing.likes += 1;
      }
    },
  },
});

export const { addPost, editPost, deletePost, likePost } = postsSlice.actions;
export default postsSlice.reducer;
