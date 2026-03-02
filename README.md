# React Redux Blog Application

This project is a simple blog application built with React, Redux Toolkit, React Router and Tailwind CSS. It uses Context API for cross-cutting concerns and maintains data locally via Redux store.

## Features

- Display list of blog posts
- View blog post details
- Add new blog post
- Edit existing blog post
- Delete blog post
- Like blog post
- Light/Dark theme toggle using Context API

## State Management

Global posts state is managed with Redux Toolkit slices. Cross-cutting theme state uses React Context.

## Styling

Tailwind CSS v3 is used for styling. Project includes a manual `tailwind.config.js` and `postcss.config.js`.

## Scripts

- `npm start` - runs development server
- `npm run build` - compiles production build
- `npm test` - launches test runner

## Docker

A `Dockerfile` is included for building a production image:

```dockerfile
# build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t react-blog .
docker run -p 80:80 react-blog
```

## Deployment

You can deploy the built files (`build/` folder) to any static file host such as Vercel, Netlify, GitHub Pages, or use the Docker container on a cloud provider.

## Development Notes

- Data is stored in Redux state and will reset when the page reloads.
- The project uses React Router for navigation; routes are defined in `src/App.js`.

## Getting Started

1. Clone the repository
2. `cd blog-app`
3. `npm install`
4. `npm start` to launch locally

Enjoy developing your blog application!
