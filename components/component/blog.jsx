import BlogCard from '@/components/ui/blogCard';

const Blog = ({ posts }) => {
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
        />
      ))}
    </div>
  );
};

export default Blog;
