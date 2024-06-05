import { defineStore } from 'pinia';
import axios from 'axios';

export const useSparkStore = defineStore('sparkstore', {
  state: () => ({
    scholars: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchScholars() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('https://api.sparkbridges.com/api/v1/spark/scholars');
        console.log('API response:', response.data); // Debugging log
        this.scholars = response.data;
      } catch (error) {
        console.error('Error fetching scholars:', error); // Debugging log
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
