export interface User {
  userId: string | null;
  name: string | null;
  email: string | null;
  passwordChangedAt: string | null;
  contact: string | null;
  role: string | null;
  location: string | null;
  isActive: boolean | null;
  isVerified: boolean | null;
  lastLogin: string | null;
  avatar: string | null;
  bookmarks: [] | null;
  createdAt:string | null;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}