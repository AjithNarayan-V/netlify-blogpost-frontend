  'use client'; // Mark this as a Client Component
  import { useState } from 'react';
  import { useRouter } from 'next/navigation';

  const CreatePostForm = ({ post: initialPost, isEdit }) => {
    const [post, setPost] = useState(initialPost);
    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${isEdit ? post._id : ''}`, {
          method: isEdit ? 'PUT' : 'POST',
          headers: {  
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
        });

        if (res.ok) {
          router.push('/'); // Redirect after successful post creation/editing
          router.refresh();
        } else {
          console.error('Failed to submit the post');
        }
      } catch (error) {
        console.error('Error submitting post:', error);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="m-3 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
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
            value={post.subtitle}
            onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
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
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
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
            value={post.image}
            onChange={(e) => setPost({ ...post, image: e.target.value })}
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
    );
  };

  export default CreatePostForm;
