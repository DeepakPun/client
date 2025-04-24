import { useState } from 'react'
import './App.css'
const posts = [
  {
    id: 1,
    title: 'React',
    body: 'React is a supercool and awesome technology',
  },
  {
    id: 2,
    title: 'GitHub Actions',
    body: 'GitHub Actions is a supercool and awesome technology',
  },
  {
    id: 3,
    title: 'Docker',
    body: 'Docker is a supercool and awesome technology',
  },
  {
    id: 4,
    title: 'Amazon Web Services',
    body: 'Amazon Web Services is a supercool and awesome technology',
  },
]

function App() {
  // const [posts, setPosts] = useState(posts)

  const renderedPosts = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))

  return (
    <>
      <h2>Blog posts</h2>
      <hr />
      {renderedPosts}
    </>
  )
}

export default App
