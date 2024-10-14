import { defineStore } from "pinia";
const { handleError } = useErrorHandler();

export const useUsersStore = defineStore({
  id: "users-store",
  state: () => ({
    users: [] as User[],
    totalDocs: 0,
  }),
  actions: {
    async fetchUsers(query?: string) {
      const url = query ? `/users?${query}` : `/users`;
      const { data, error } = await useApiGet(url);

      if (error) {
        handleError(error.response.data.message);
      }

      this.users = data.data.results;
      this.totalDocs = data.data.total;
      return { data, error };
    },
    async updateUser(payload: any) {
      try {
        const { data, error } = await useApiPut(
          `/users/${payload.id}`,
          payload
        );
        return { data, error };
      } catch (error) {
        handleError(error);
      }
    },
  },
  getters: {
    getUsers: (state) => state.users,
  },
});

export interface User {
  user_id: number;
  picture_url: string;
  name: string;
  email: string;
  is_active: boolean;
  registered_at: string;
  role_name: "parent" | "scholar" | "tutor" | "admin";
  status: "activated" | "deactivated";
}
