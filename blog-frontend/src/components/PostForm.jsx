import { useState } from "react"

function PostForm({ addPost }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !content) return
    addPost(title, content)
    setTitle("")
    setContent("")
  }

  return (
    <div className="form-box">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  )
}

export default PostForm
