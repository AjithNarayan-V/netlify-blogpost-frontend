import CreatePostForm from '@/components/component/CreatePostForm' // Import the client-side form

export default async function CreatePostPage({ searchParams }) {
  const postId = searchParams.id || null; // Get post ID from URL parameters
  let post = { title: '', subtitle: '', author: '', content: '', image: '' };

  if (postId) {
    // Fetch post details for editing
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${postId}`);
    post = await res.json();
  }

  return (
    <div className=" max-w-2xl mx-auto mt-10">
      <h1 className="m-3 text-2xl font-bold mb-4">{postId ? 'Edit Post' : 'Create New Post'}</h1>
      <CreatePostForm post={post} isEdit={Boolean(postId)} /> {/* Pass props to the client-side form */}
    </div>
  );
}
