"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BlogCard = ({ id, title, subtitle, author,content, date, image, alt ,handleDeletePost }) => {
  const router = useRouter();
  // Handle editing the post
  const handleEdit = () => {
    const queryParams = new URLSearchParams({
      id: id,
      title: title,
      subtitle: subtitle,
      content: content,
      author: author,
      image: image,
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
      console.log("delete request")

      if (res.ok) {
        handleDeletePost(id); // Call the parent delete handler to update the state
      }else {
        console.error('Failed to delete the post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div
      className={`w-3/4 flex items-start justify-center flex-col mb-6 shadow-lg rounded-lg overflow-hidden ${alt ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Image with onClick handler for redirection */}
      <div className="relative w-full h-56 cursor-pointer" onClick={() => router.push(`/posts/${id}`)}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
          <ul className="flex space-x-2 text-white">
            <li>{author}</li>
            <li>{date}</li>
          </ul>
        </div>
      </div>

      {/* Blog details */}
      <div className={"p-4 bg-white transition-all duration-300 ease-in-out h-50 overflow-hidden"}>
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push(`/posts/${id}`)}>{title}</h1>
        <div className='flex justify-between'>
          <h2 className="text-gray-600 text-sm uppercase mt-1">{subtitle}</h2>
        </div>

        {/* Edit and Delete Buttons */}
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => {
              handleEdit();  // Trigger the edit handler
            }}
            className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete();  // Trigger the delete handler
            }}
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
