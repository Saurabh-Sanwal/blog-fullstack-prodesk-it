# Blog Backend

Simple REST API for a blog app using Node.js, Express, and MongoDB.

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- CORS
- dotenv

## Folder Structure
blog-backend/
- config/db.js -> connects to MongoDB
- models/Post.model.js -> defines what a post looks like
- routes/post.routes.js -> defines the API endpoints
- controllers/post.controller.js -> the logic for each endpoint
- server.js -> starts the server

## How It Works
Browser -> routes -> controller -> model -> MongoDB -> response back as JSON

## API Endpoints
GET /api/posts -> get all posts
POST /api/posts -> create a new post (send title, content in body)
DELETE /api/posts/:id -> delete a post by id

## Run Locally
1. npm install
2. Create .env with MONGO_URI and PORT
3. node server.js

## Deploy to Render
1. Push this folder to GitHub
2. Go to render.com, sign in with GitHub
3. New + -> Web Service -> select your repo
4. Build Command: npm install
5. Start Command: node server.js
6. Add Environment Variable: MONGO_URI = your mongodb connection string
7. Deploy -> copy the live URL it gives you
8. Use that live URL in frontend .env file

## Common Errors
- MongoDB connection failed -> check MONGO_URI and allow 0.0.0.0/0 in MongoDB Atlas network access
- CORS error -> make sure cors() is used in server.js
- req.body undefined -> make sure express.json() is used in server.js
