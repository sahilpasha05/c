import { useState, useEffect } from 'react';
import { contentService, type PageContent } from '../services/contentService';

interface ContentData {
  [section: string]: {
    [key: string]: string;
  };
}

export const usePageContent = (page: string) => {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await contentService.getPageContent(page);
        
        const contentMap: ContentData = {};
        data.forEach((item: PageContent) => {
          contentMap[item.section] = item.content;
        });
        
        setContent(contentMap);
      } catch (err) {
        console.error(`Error loading content for ${page}:`, err);
        setError('Failed to load content');
        // Don't fail - let pages display with default content
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [page]);

  const getSectionContent = (section: string, field: string, defaultValue: string = '') => {
    return content[section]?.[field] || defaultValue;
  };

  return {
    content,
    loading,
    error,
    getSectionContent,
  };
};
