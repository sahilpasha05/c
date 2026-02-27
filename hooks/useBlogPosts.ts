import { useState, useEffect } from 'react';
import type { BlogPost } from '../types';
import staticPosts from '../data/blogPosts';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>(staticPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // The blog posts are static and shipped with the site. This hook could be
  // extended to fetch additional entries from Supabase in the future, but the
  // core requirement is that articles are added through code changes.
  useEffect(() => {
    // Simulate async load for consistency with previous API
    setLoading(true);
    setTimeout(() => {
      setPosts(staticPosts);
      setLoading(false);
    }, 50);
  }, []);

  return { posts, loading, error };
};
