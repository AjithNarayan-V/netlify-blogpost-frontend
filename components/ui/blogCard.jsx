"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BlogCard = ({ id, title, subtitle, author, content, date, image, alt }) => {
  const [isDeleted, setIsDeleted] = useState(false); // Track if the post is deleted
  const router = useRouter();

  // Handle editing the post
  const handleEdit = () => {
    const queryParams = new URLSearchParams({
      id: id,
    }).toString();
    router.push(`/createPost?${queryParams}`);
  };

  // Handle deleting the post
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) {
      return; // Exit if the user doesn't confirm the deletion
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setIsDeleted(true); // Mark the post as deleted
      } else {
        console.error('Failed to delete the post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Return null if the post is deleted (it will no longer be shown)
  if (isDeleted) return null;

  return (
    <div
      className={`sm:w-full lg:w-3/4 flex items-start justify-center flex-col mb-6 shadow-lg rounded-lg overflow-hidden ${alt ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="relative w-full h-56 cursor-pointer" onClick={() => router.push(`/posts/${id}`)}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
          <ul className="flex space-x-2 text-white">
            <li>{author}</li>
            <li>{date}</li>
          </ul>
        </div>
      </div>

      <div className={"p-4 bg-white transition-all duration-300 ease-in-out h-50 overflow-hidden"}>
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push(`/posts/${id}`)}>{title}</h1>
        <div className='flex justify-between'>
          <h2 className="text-gray-600 text-sm uppercase mt-1">{subtitle}</h2>
        </div>

        <div className="mt-4 flex space-x-4">
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
