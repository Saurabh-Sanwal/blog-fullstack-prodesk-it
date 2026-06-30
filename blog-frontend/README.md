Set-Content README.md @"
# Blog Frontend

Simple React app (Vite) that shows, adds, and deletes blog posts by calling the backend API.

## Tech Stack
- React (Vite)
- useState and useEffect only (no Redux, no Context API)
- fetch (no axios)

## Folder Structure
blog-frontend/
- src/components/PostForm.jsx -> form to add a post
- src/components/PostCard.jsx -> shows one post
- src/components/PostList.jsx -> shows all posts
- src/App.jsx -> main file, holds state, calls the API
- .env -> stores backend API URL

## How Frontend Connects To Backend
.env file has: VITE_API_URL=https://blog-fullstack-prodesk-it.onrender.com

In code we read it as: import.meta.env.VITE_API_URL

Step by step:
1. Page loads -> useEffect runs fetchPosts()
2. fetchPosts() sends GET request to VITE_API_URL
3. Backend returns posts as JSON from MongoDB
4. React saves it using setPosts(data) -> shows on screen

When you submit form:
1. addPost() sends POST request with title and content in JSON body
2. Backend saves it to MongoDB and returns the new post
3. Frontend adds it to the posts list on screen

When you click Delete:
1. deletePost(id) sends DELETE request to VITE_API_URL/id
2. Backend removes it from MongoDB
3. Frontend removes it from screen using filter()

## Run Locally
1. npm install
2. Make sure .env has VITE_API_URL=http://localhost:5000/api/posts
3. Make sure backend is running first
4. npm run dev

## Deploy to Vercel
1. Push this folder to GitHub
2. Go to vercel.com, sign in with GitHub
3. Add New -> Project -> select your repo
4. Before deploying, add Environment Variable:
   Key: VITE_API_URL
   Value: your live Render backend URL (not localhost)
5. Deploy
6. Test by opening the live URL, add a post, refresh page, confirm it stays

## Common Errors
- CORS error -> backend needs cors() middleware
- Posts dont load after deploy -> check VITE_API_URL points to live Render URL, then redeploy
- Blank page -> check env variable name starts with VITE_
"@