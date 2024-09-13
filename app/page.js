import Blog from "@/components/component/blog";

// This is now a server-side component that fetches the posts
export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    cache: 'no-store',
  });
  const data = await res.json();

  // console.log('Fetched posts:', data); // Debugging
  const validateImageUrl = async (url, fallback) => {
    try {
      const imgRes = await fetch(url);
      if (imgRes.ok) {
        return url;
      }
      return fallback;
    } catch (error) {
      return fallback;
    }
  };

  // Validate each post's image URL
  const validatedPosts = await Promise.all(
    data.map(async (post) => {
      const validImage = await validateImageUrl(post.image, '/blank.png');
      return { ...post, image: validImage };
    })
  );

  return (
    <>
      <Blog posts={validatedPosts} />
    </>
  );
}
