export interface User {
  name?: string;
  email?: string;
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
  role?: "user" | "admin";
  status: "idle" | "checking" | "authenticated" | "unauthenticated";
  loading: boolean;
  error: string | null | undefined;
}


export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: Boolean;
  message: string;
  user:any
}

export interface IregisterResponse {
  success: Boolean;
  message: string;
  data:any
}

export interface LogoutResponse{
  success:boolean;
  message:string;
}