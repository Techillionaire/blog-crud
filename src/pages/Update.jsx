import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams(); // Fetching blog id from URL params
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const updateBlog = async (e) => {
    e.preventDefault();

    try {
      const updatedBlog = {
        title,
        body,
        author,
      };

      const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog');
      }
      alert('Blog updated successfully!!!');
      navigate('/');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <main className='min-h-screen flex justify-center items-center'>
      <div className='min-w-[700px] mx-auto p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Update Blog</h2>
        <form onSubmit={updateBlog}>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Title</label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm outline-none focus:ring'
              placeholder='Understanding Asynchronous JavaScript'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Body</label>
            <textarea
              name='body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className='mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md shadow-sm focus:ring'
              placeholder='Asynchronous JavaScript is a key concept that allows developers to....'
              rows='5'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Author</label>
            <input
              type='text'
              name='author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring outline-none'
              placeholder='John Doe'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-purple-500 text-white p-2 rounded-md shadow-md hover:bg-purple-400 focus:ring focus:ring-purple-700 focus:bg-purple-700'
          >
            Update Blog
          </button>
        </form>
      </div>
    </main>
  );
};

export default Update;
