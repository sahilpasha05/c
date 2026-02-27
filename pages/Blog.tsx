import React from 'react';
import { usePageContent } from '../hooks/usePageContent';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useAdminEditMode } from '../hooks/useAdminEditMode';
import { EditableText } from '../components/EditableText';
import { BlogCard } from '../components/BlogCard';

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
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
                
            </div>
        </main>
    );
};

export default Blog;
