'use client'; // Required in app directory for client-side data fetching
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // For app directory routing, if using pages directory use 'useRouter'
import Image from 'next/image';

const PostDetails = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="text-center text-gray-600 text-xl py-10">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Post Image */}
        <div className="relative">
          <Image width={400} // specify width
            height={200}
            src={post.image || '/default-image-url.jpg'}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold drop-shadow-lg text-center">{post.title}</h1>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            {/* Author & Date */}
            <div className="flex items-center space-x-2">
              <div className="text-gray-700 font-medium">By {post.author || 'Anonymous'}</div>
              <span className="text-gray-500">|</span>
              <div className="text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
            {/* Category / Tags (Optional, add if your posts have categories or tags) */}
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm">
              #Category
            </div>
          </div>

          {/* Post Body */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-800 leading-relaxed">
              {post.content}
            </p>
          </div>

          {/* Social Share Links (Optional) */}
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Share on Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500">
              Share on Twitter
            </button>
          </div>
        </div>

        {/* Comments Section (Optional) */}
        <div className="p-6 bg-gray-50 border-t">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          {/* Comments list */}
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-md shadow-md">
              <p className="text-gray-700">This is a sample comment.</p>
              <span className="text-gray-500 text-sm">Posted by User on 12th Sep, 2024</span>
            </div>
            {/* Add more comment blocks here */}
          </div>

          {/* Comment form */}
          <form className="mt-6">
            <textarea
              className="w-full p-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your comment here..."
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

export default PostDetails;
