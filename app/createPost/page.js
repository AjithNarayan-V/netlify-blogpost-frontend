'use client'; // If you're using the app directory structure
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter(); 
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we are editing an existing post
    const postId = searchParams.get('id');
    if (postId) {
      setIsEdit(true);  // We are in "edit" mode
      // Pre-fill the form with the existing post data
      setTitle(searchParams.get('title') || '');
      setSubtitle(searchParams.get('subtitle') || '');
      setContent(searchParams.get('content') || '');
      setAuthor(searchParams.get('author') || '');
      setImage(searchParams.get('image') || '');
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the backend
    const postData = {
      title,
      subtitle,
      content,
      author,
      image,
    };

    try {
      const postId = searchParams.get('id');
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${isEdit ? postId : ''}`, {
        method: isEdit ? 'PUT' : 'POST',  // Use PUT if editing, POST if creating a new post
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        // Redirect to the homepage after successful post creation/editing
        router.push('/');
      } else {
        console.error('Failed to submit the post');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (

    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Post' : 'Create New Post'}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
            Sub Title
          </label>
          <textarea
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {isEdit ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>

  );
};

const CreatePost = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CreatePostPage />
  </Suspense>
);

export default CreatePost;