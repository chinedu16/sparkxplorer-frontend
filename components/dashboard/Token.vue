<template>
  <div class="rounded-3xl border shadow-lg p-6">
    <h3 class="font-bold mb-8">Performance Token</h3>

    <div class="">
      <div class="py-5 border px-4 items-center" v-for="i in 8">
        <div class="text-green-500 w-fit bg-green-100 rounded-full px-2 py-1 text-sm">Ongoing</div>
        <h3 class="font-semibold my-4">Score 90% in Mathematics for August</h3>

        <el-progress :percentage="50" status="success"></el-progress>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register the necessary components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Define your chart data type
const chartData = ref(null);

// Create data on mounted
onMounted(() => {
  chartData.value = {
    labels: [
      "Numbers and Operations",
      "Algebra and Algebraic Thinking",
      "Measurement and Data",
      "Statistics and Probability",
    ],
    datasets: [
      {
        data: [30, 25, 20, 25], // Example data values
        backgroundColor: ["#4F46E5", "#FBBF24", "#0F766E", "#22C55E"],
      },
    ],
  };
});

// Define options for doughnut chart
const chartOptions = ref({
  responsive: true,
  cutout: "70%", // Adjust this value to make the doughnut thinner
  plugins: {
    legend: {
      display: false, // Disable the default legend
    },
  },
});
</script>

<style scoped>
.chart-container {
  width: 180px; /* Set desired width */
  height: 180px; /* Set desired height */
  margin: 0 auto; /* Center the chart */
}

.legend {
  list-style-type: none;
  padding: 0;
}

.legend li {
  margin: 0.5em 0;
}
</style>
