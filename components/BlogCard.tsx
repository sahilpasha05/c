import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full"
    >
      {post.image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
          {post.title}
        </h2>
        <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
          {post.author && <span>{post.author}</span>}
          <span>
            {new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <p className="text-slate-600 mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <span className="mt-auto inline-block text-indigo-600 group-hover:text-indigo-700 font-semibold">
          Read More →
        </span>
      </div>
    </Link>
  );
};
