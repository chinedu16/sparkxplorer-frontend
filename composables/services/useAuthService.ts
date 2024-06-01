export const useAuthService = () => {
  return {
    async getUserToken() {
      try {
        const token = localStorage.getItem("TOKEN");
        return token;
      } catch (error) {
        throw error;
      }
    },

    async logout() {
      try {
        localStorage.removeItem("TOKEN");
        navigateTo("/portal");
      } catch (error) {
        throw error;
      }
    },
  };
};
