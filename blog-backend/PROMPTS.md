# Prompts Used For This Project (Backend)

1. Make a simple Node.js + Express + MongoDB backend for a blog app. Only need title and content fields, no authentication, no image upload.
2. Use ES Modules (import/export) instead of CommonJS (require/module.exports).
3. Create 3 REST API routes: GET all posts, POST a new post, DELETE a post by id.
4. Add CORS middleware so the React frontend can call this API without errors.
5. Use Mongoose to connect to MongoDB Atlas using a connection string stored in .env.
6. Keep the folder structure simple: config, models, routes, controllers, no extra layers.
7. Explain how to deploy this backend to Render.

## Why These Choices Were Made
- No authentication: earlier sprint did not have login/signup, so it was not added.
- No image upload: kept the project to mandatory CRUD scope only.
- ES Modules: matches modern Node.js convention and was explicitly requested.
- Simple MVC folders: keeps code organized without extra complexity.
