# Prompts Used For This Project (Frontend)

1. Make a simple React frontend using Vite, no Redux, no Context API, just useState and useEffect.
2. Build a normal HTML form to add a blog post: title and content fields only.
3. Connect this frontend to a Node.js/Express/MongoDB backend by replacing dummy data with real fetch calls.
4. Show a Loading state while fetching, and an error message if backend connection fails.
5. Add a Delete button on each post that removes it from both database and screen.
6. Keep the folder structure simple: just a components folder with PostForm, PostCard, PostList.
7. Store backend API URL in environment variable VITE_API_URL instead of hardcoding localhost.
8. Explain how to deploy this to Vercel and connect it to the live backend URL on Render.

## Why These Choices Were Made
- No login/signup, no JWT: earlier sprint did not include authentication.
- No Redux/Context: only one shared state (posts list), useState is enough.
- fetch instead of axios: fewer dependencies, fetch is built into the browser.
- Environment variable for API URL: needed so the app works after deployment, not just on localhost.
