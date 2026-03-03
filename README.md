# Blog App

A modern, interactive blog application built with React and Redux Toolkit featuring smooth animations and dark mode support.

## 📋 Features

- ✨ Create, read, edit, and delete blog posts
- 🏷️ Categorize posts (General, Tech, Life, News, Tutorial)
- ❤️ Like posts
- 🔍 Search and filter posts
- 🌙 Dark mode support
- ⚡ Smooth animations with Framer Motion
- 📱 Responsive design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **React 19.2.4** - UI framework for building interactive user interfaces
- **Redux Toolkit 2.11.2** - State management for predictable and centralized state
- **React Redux 9.2.0** - Official React bindings for Redux
- **React Router DOM 7.13.1** - Client-side routing and navigation
- **Framer Motion 12.34.3** - Animation library for smooth UI transitions

### Styling

- **Tailwind CSS 3.4.19** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.5.6** - CSS transformation tool
- **Autoprefixer 10.4.27** - Automatically adds vendor prefixes to CSS

### Testing

- **@testing-library/react 16.3.2** - Testing utilities for React components
- **@testing-library/jest-dom 6.9.1** - Custom matchers for DOM elements
- **@testing-library/user-event 13.5.0** - User interaction simulation

### Build & Development

- **React Scripts 5.0.1** - Build and dev scripts for Create React App
- **Prettier 3.8.1** - Code formatter

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone or navigate to the project directory:**

   ```bash
   cd blog-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

## 📊 Application Flow

### User Journey

```
Home Page
├── View all posts with categories
├── Search/filter posts
└── Click "Create Post" → Post Form
    ├── Fill title, content, and category
    ├── Submit
    └── Redirect to Home

Post Card (Home)
└── Click to view → Post Details
    ├── View full post content with category
    ├── Like, Edit, or Delete
    └── Edit → Post Form (pre-filled)
```

### State Management Flow

```
Redux Store (postsSlice)
├── State: Array of posts
│   └── Post: { id, title, content, category, likes }
├── Actions:
│   ├── addPost(title, content, category)
│   ├── editPost({ id, title, content, category })
│   ├── deletePost(id)
│   └── likePost(id)
└── Selectors: used in components to read state

Components
├── HomePage
│   ├── Displays all posts with search filter
│   └── Shows category tags on each card
├── PostForm
│   ├── Create new or edit existing posts
│   ├── Category dropdown selector
│   └── Validates title and content
├── PostDetails
│   ├── Shows full post with category badge
│   ├── Like, Edit, Delete buttons
│   └── Post metadata
└── Layout
    └── Common header/navigation wrapper
```

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.jsx           # Wrapper component for layout
├── features/
│   └── posts/
│       ├── HomePage.jsx     # Post listing page
│       ├── PostDetails.jsx  # Single post view
│       ├── PostForm.jsx     # Create/Edit form
│       └── postsSlice.jsx   # Redux slice for posts
├── context/
│   └── BlogContext.jsx      # Theme context (dark mode)
├── app/
│   └── store.js             # Redux store configuration
├── App.jsx                  # Main app component
├── index.js                 # Entry point
└── index.css               # Global styles
```

## 🎯 How to Use

### Creating a Post

1. Click "✨ Create Post" button on the home page
2. Enter post title, content, and select a category
3. Click "📝 Publish Post"

### Editing a Post

1. Navigate to the post detail page
2. Click "✏️ Edit" button
3. Modify title, content, or category
4. Click "💾 Save Changes"

### Deleting a Post

1. Go to the post detail page
2. Click "🗑️ Delete" button
3. Confirm deletion

### Liking a Post

1. Open any post from the detail page
2. Click "❤️ Like" button to increment likes counter

### Searching Posts

1. Use the search bar on the home page
2. Type keywords to filter by title or content

## 🌙 Dark Mode

Dark mode is automatically available through the `BlogContext`. The app uses Tailwind's dark mode utilities (`dark:` prefixes) for seamless theme switching.

## 📝 Notes

- All posts are stored in Redux state (in-memory)
- Categories help organize posts by topic
- Search filters work on both title and content
- Animation and smooth transitions enhance user experience

## 📄 License

This project is open source and available under the MIT License.
