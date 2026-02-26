import { supabase } from './supabaseClient';
import type { BlogPost } from '../types';

export interface PageContent {
  id: string;
  page: string;
  section: string;
  content: Record<string, string>;
  updated_at: string;
}

type ContentCallback = (data: PageContent) => void;

const subscriptions: Map<string, any> = new Map();

export const contentService = {
  // Subscribe to real-time updates for a section
  subscribeToSection(
    page: string,
    section: string,
    callback: ContentCallback
  ): () => void {
    const key = `${page}:${section}`;
    
    const channel = supabase
      .channel(`page_content:${page}:${section}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'page_content',
          filter: `page=eq.${page}`,
        },
        (payload) => {
          if (payload.new && typeof payload.new === 'object') {
            const data = payload.new as PageContent;
            if (data.page === page && data.section === section) {
              callback(data);
            }
          }
        }
      )
      .subscribe();

    subscriptions.set(key, channel);

    // Return unsubscribe function
    return () => {
      supabase.removeChannel(channel);
      subscriptions.delete(key);
    };
  },

  // Fetch all content for a page
  async getPageContent(page: string): Promise<PageContent[]> {
    const { data, error } = await supabase
      .from('page_content')
      .select('*')
      .eq('page', page);

    if (error) throw error;
    return data || [];
  },

  // Fetch a specific section
  async getSectionContent(page: string, section: string): Promise<PageContent | null> {
    const { data, error } = await supabase
      .from('page_content')
      .select('*')
      .eq('page', page)
      .eq('section', section)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  },

  // Update or create content
  async updateContent(
    page: string,
    section: string,
    content: Record<string, string>
  ): Promise<PageContent> {
    const existing = await this.getSectionContent(page, section);

    if (existing) {
      const { data, error } = await supabase
        .from('page_content')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', existing.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('page_content')
        .insert({
          page,
          section,
          content,
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    }
  },

  // Delete content
  async deleteContent(id: string): Promise<void> {
    const { error } = await supabase
      .from('page_content')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Blog posts methods
  async getBlogPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getBlogPost(id: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  },
};
