export type Role = "parent" | "scholar" | "tutor" | "admin";

export type Status = "activated" | "deactivated";

export interface User {
  user_id: number;
  picture_url: string;
  name: string;
  email: string;
  is_active: boolean;
  registered_at: string;
  role_name: Role;
  status: Status;
}
