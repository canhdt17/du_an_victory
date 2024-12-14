export interface IUser {
  id: number;
  fullname: string;
  username: string;
  email: string;
  email_verified_at: string | null;
  password?: string;
  phone: string;
  gender: string;
  role: {
    role_id: number;
    role: string;
    description?: string;
  };
  status: string;
  created_at?: string | null;
  updated_at?: string | null;
}
export interface AuthResponse {
  token: string;
}