import PostDetailsClient from "@/components/component/PostDetails";

export default async function PostDetailsPage({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
  const post = await res.json();

  // Format the date on the server-side
  if (post) {
    post.date = new Date(post.date).toLocaleDateString('en-GB'); // Change to your desired format
  }

  return <PostDetailsClient post={post} />;
}
