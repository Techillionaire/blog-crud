import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")

  const blogEndPoint = "http://localhost:3000/blogs"
  const navigate = useNavigate()

  const addBlog = async (e) => {
    e.preventDefault();


    

    try {
           
     const newBlog = {
       title,
       body,
       author,
     }

      const postresponse = await fetch(blogEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      })

      if (!postresponse.ok) {
        throw new Error('Failed to add blog');
      }
      alert("blog added successfully!!!")
      navigate('/')

      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
   <main className=' min-h-screen flex justify-center items-center '>
     <div className="min-w-[700px] mx-auto  p-6 bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Blog</h2>
      <form onSubmit={addBlog}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm outline-none focus:ring"
            placeholder="Understanding Asynchronous JavaScript"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Body</label>
          <textarea
            name="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            className="mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md shadow-sm  focus:ring"
            placeholder="Asynchronous JavaScript is a key concept that allows developers to...."
            rows="5"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 ">Author</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring outline-none"
            placeholder="John Doe"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white p-2 rounded-md shadow-md hover:bg-purple-400 focus:ring focus:ring-purple-700 focus:bg-purple-700 "
        >
          Add Blog
        </button>
      </form>
    </div>
   </main>
  )
}

export default Create
