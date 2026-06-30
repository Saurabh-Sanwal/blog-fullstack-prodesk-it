import { useState, useEffect } from "react"
import PostForm from "./components/PostForm.jsx"
import PostList from "./components/PostList.jsx"
import "./App.css"

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const res = await fetch(import.meta.env.VITE_API_URL)
      const data = await res.json()
      setPosts(data)
      setError("")
    } catch (err) {
      setError("Cannot connect to server")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const addPost = async (title, content) => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
      })
      const data = await res.json()
      setPosts([data, ...posts])
    } catch (err) {
      setError("Could not add post")
    }
  }

  const deletePost = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE"
      })
      setPosts(posts.filter(post => post._id !== id))
    } catch (err) {
      setError("Could not delete post")
    }
  }

  return (
    <div className="container">
      <h1>Blog App</h1>
      <PostForm addPost={addPost} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  )
}

export default App
