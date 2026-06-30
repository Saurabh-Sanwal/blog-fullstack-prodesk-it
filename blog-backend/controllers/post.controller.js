import Post from "../models/Post.model.js"

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body
    const post = await Post.create({ title, content })
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Post deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
