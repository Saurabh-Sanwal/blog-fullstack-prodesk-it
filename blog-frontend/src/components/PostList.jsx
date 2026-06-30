import PostCard from "./PostCard.jsx"

function PostList({ posts, deletePost }) {
  if (posts.length === 0) {
    return <p>No posts yet. Add one!</p>
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard key={post._id} post={post} deletePost={deletePost} />
      ))}
    </div>
  )
}

export default PostList
