export interface ServiceMetric {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface ImageEditState {
  originalImage: string | null; // base64 data url
  originalMimeType: string | null;
  generatedImage: string | null; // base64 data url
  prompt: string;
  isLoading: boolean;
  error: string | null;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  author?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}