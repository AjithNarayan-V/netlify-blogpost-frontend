"use client";
import BlogCard from '@/components/ui/blogCard';
import { useEffect, useState } from 'react';
import NextImage from 'next/image';


// Helper function to check if an image URL is valid
const validateImageUrl = (url, fallback) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => resolve(fallback);
    img.src = url;
  });
};

const Blog = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
      const data = await res.json();

      const validatedPosts = await Promise.all(data.map(async (post) => {
        const validImage = await validateImageUrl(post.image, '/blank.png');
        return { ...post, image: validImage };
      }));

      setPosts(validatedPosts);
    };
    fetchPosts();
  }, []);

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6">
      {posts.map((post) => (
        <BlogCard 
          key={post._id}
          id={post._id}
          title={post.title}
          subtitle={post.subtitle.substring(0, 100) + '...'}
          author={post.author || 'Anonymous'}
          date={new Date(post.date).toLocaleDateString()}
          content={post.content}
          image={post.image}
          handleDeletePost={handleDeletePost} // Pass down the delete handler

        />
      ))}
    </div>
  );  
};

export default Blog;
