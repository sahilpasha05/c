import React from 'react';
import { usePageContent } from '../hooks/usePageContent';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';

const Blog: React.FC = () => {
    const { getSectionContent } = usePageContent('Blog');
    const { posts, loading, error } = useBlogPosts();
    const isEditMode = useAdminEditMode();

    return (
        <main className="py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-center text-slate-900 mb-8">
                    <EditableText page="Blog" section="hero" field="title" isEditMode={isEditMode}>
                        {getSectionContent('hero', 'title', 'Our Latest Insights')}
                    </EditableText>
                </h1>
                <p className="text-center text-lg text-slate-600 mb-16">
                    <EditableText page="Blog" section="hero" field="description" isEditMode={isEditMode}>
                        {getSectionContent('hero', 'description', 'Keep up with news, tips, and case studies from the Queen City Growth Lab team.')}
                    </EditableText>
                </p>

                {/* Blog Posts List */}
                <div className="space-y-12">
                    {loading && (
                        <p className="text-center text-slate-500">Loading blog posts...</p>
                    )}
                    
                    {error && (
                        <p className="text-center text-red-500">Error loading blog posts</p>
                    )}
                    
                    {!loading && !error && posts.length === 0 && (
                        <p className="text-center text-slate-500">No blog posts yet. Check back soon!</p>
                    )}
                    
                    {!loading && posts.length > 0 && (
                        <div className="space-y-8">
                            {posts.map((post) => (
                                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    {post.image && (
                                        <img 
                                            src={post.image} 
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                            {post.title}
                                        </h2>
                                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                                            {post.author && <span>{post.author}</span>}
                                            <span>
                                                {new Date(post.published_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <a 
                                            href={`/blog/${post.id}`}
                                            className="inline-block text-indigo-600 hover:text-indigo-700 font-semibold"
                                        >
                                            Read More →
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Blog;
