export type Role = "parent" | "scholar" | "tutor" | "admin";

export type Status = "activated" | "deactivated";

export interface User {
  sn?: number;
  user_id: number;
  picture_url: string;
  name: string;
  email: string;
  is_active: boolean;
  registered_at: string;
  role_name: Role;
  status: Status;
}

export type UsersResponse = { results: User[]; totalDocs: number };

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  code?: string;
  data?: T;
}
