export interface Post {
  _id: string;
  title: string;
  ai_model: string;
  prompt_text: string;
  prompt_description: string;
  raw_image: string;
  prompt_image: string;
  tags: string[];
  views: number;
  likes: number;
  created_by: string;
  author: string;
  is_featured: boolean;
  status: string;
  is_verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FeedResponse {
  success: boolean;
  page: number;
  limit: number;
  totalPost: number;
  totalPages: number;
  data: Post[];
}

export interface FeedState {
  feedData: Post[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}