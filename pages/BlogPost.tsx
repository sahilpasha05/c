import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, loading } = useBlogPosts();

  const post = posts.find((p) => p.id === id);

  if (loading) return <div className="py-24 text-center">Loading…</div>;

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p>The post you are looking for does not exist.</p>
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-800">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-12 max-w-3xl mx-auto px-4">
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-slate-500 mb-6">
          {post.author && <span>{post.author} &bull; </span>}
          <span>
            {new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        {post.image && (
          <div className="w-full mb-6 rounded-lg overflow-hidden h-64">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12">
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-800">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
