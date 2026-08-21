# Node.js Learning Workspace

This repository contains a collection of Node.js projects that demonstrate various back-end development concepts, progressively building up from basic HTTP servers to full-fledged REST APIs and web applications.

## Key Features Implemented

This workspace fulfills several key back-end development requirements, primarily showcased in the **`05-URL Shortener`** and **`06-Blog App`** projects:

- **REST API with Auth & Multiple Resources**: 
  - Both the URL Shortener (`User`, `Url`) and Blog App (`User`, `Blog`, `Comment`) expose multiple resources through API endpoints.
- **CRUD REST API with Express**: 
  - APIs are built using Express.js. Create, Read, Update, and Delete operations are implemented across various routes (e.g., `04-REST API`, `05-URL Shortener/routes/url.js`, `06-Blog App/routes/blog.js`).
- **Mongoose Schemas and Models**: 
  - MongoDB integration is handled via Mongoose. Schemas and models are explicitly defined in the `models/` directories of the respective projects.
- **JWT-Based Authentication (Register + Login)**: 
  - JSON Web Tokens (`jsonwebtoken`) are used for secure user sessions. The logic is handled in `services/` (or `service/`) and utilized in `routes/user.js` for both registration and login flows.
- **Middleware for Auth and Error Handling**: 
  - Custom Express middlewares are implemented to protect routes and handle token validation (e.g., `middlewares/auth.js` in the URL Shortener and `middlewares/authentication.js` in the Blog App).

## Projects Overview

1. **`01-Hello World`**: Basic introduction to Node.js.
2. **`02-Modules`**: Understanding Node.js module systems.
3. **`03-HTTP Server`**: Building a native HTTP server without frameworks.
4. **`04-REST API`**: Introduction to building REST APIs using Express.js.
5. **`05-URL Shortener`**: A complete URL shortening service featuring MongoDB integration, EJS templating, user authentication (JWT), and protected routes.
6. **`06-Blog App`**: A robust blogging platform featuring user authentication (JWT via cookies), blog creation, commenting system, and MongoDB integration.

## Getting Started

To run any of these projects:

1. Navigate into the specific project directory:
   ```bash
   cd "06-Blog App"
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up any necessary environment variables (like `MONGO_URL` and `PORT`).
4. Start the development server:
   ```bash
   npm start
   ```
   *(Check the `package.json` inside each project for the exact start scripts)*
