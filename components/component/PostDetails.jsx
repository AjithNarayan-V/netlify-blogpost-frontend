'use client'; // This is a client-side component
import Image from 'next/image';
import { useState } from 'react';

const PostDetailsClient = ({ post }) => {
  const [comment, setComment] = useState('');
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the comment (API call, etc.)
    console.log('Comment submitted:', comment);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Post Image */}
        <div
          className="relative w-full h-96 inset-0 bg-cover bg-center object-cover"
          style={{ backgroundImage: `url(${post.image || '/default-image-url.jpg'})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold drop-shadow-lg text-center">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            {/* Author & Date */}
            <div className="flex items-center space-x-2">
              <div className="text-gray-700 font-medium">By {post.author || 'Anonymous'}</div>
              <span className="text-gray-500">|</span>
              <div className="text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
            </div>

            {/* Category / Tags */}
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm">
              #Category
            </div>
          </div>

          {/* Post Body */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>

          {/* Social Share Links */}
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Share on Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500">
              Share on Twitter
            </button>
          </div>
        </div>
x
        {/* Comments Section */}
        <div className="p-6 bg-gray-50 border-t">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {/* Comment form */}
          <form onSubmit={handleCommentSubmit} className="mt-6">
            <textarea
              className="w-full p-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsClient;
