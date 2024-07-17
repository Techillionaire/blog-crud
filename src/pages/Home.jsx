import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import { Link } from 'react-router-dom'

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const fetchBlog = async () => {
    try {
      const response = await fetch('http://localhost:3000/blogs')
      const data = await response.json()
      // console.log(data);
      setBlogs(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [])

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }
      // Remove the deleted blog from the state
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <main className='px-[100px]'>
        <div className='flex  items-center justify-between  py-12'>
            <h1 className='text-3xl font-bold text-slate-600'>All Blogs</h1>
            <Link to='/create' className='rounded border ring px-6 py-1'>Add Blog +</Link>
        </div>
        
        
        {/* {
          blogs && blogs.map((b) => (
            <Blog key={b.id}  title={b.title} author={b.author} body={b.body} />
          ))
        } */}

{
  blogs && blogs.map((b) => (
    <Blog key={b.id} id={b.id} title={b.title} author={b.author} body={b.body}  onDelete={() => deleteBlog(b.id)} />
  ))
}

    </main>
  )
}

export default Home
