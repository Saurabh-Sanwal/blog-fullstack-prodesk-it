function PostCard({ post, deletePost }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => deletePost(post._id)}>Delete</button>
    </div>
  )
}

export default PostCard
