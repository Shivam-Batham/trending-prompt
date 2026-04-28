export interface User {
  name?: string;
  email?: string;
  role?: "user" | "admin";
  contact?:string | null;
  location?:string;
  isActive?:boolean;
  isverified?:boolean;
  avatar?:string;
  bookmarks?:[];
  createdAt?:string;
}

export interface AuthState {
  userId: string | null;
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
