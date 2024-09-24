<template>
  <div class="rounded-3xl border shadow-lg p-6">
    <h3 class="font-bold mb-8">Skills Status Till Date</h3>

    

    <div class="">
      <div class="flex py-5 border px-4 items-center" v-for="i in 4">
        <div class="w-1/2">
          <h3 class="font-bold mb-4">Subject Distribution</h3>
          <div class="chart-container">
            <Doughnut
              v-if="chartData"
              :data="chartData"
              :options="chartOptions"
            />
          </div>
        </div>
        <div class="w-1/2 flex items-center justify-center">
          <div class="legend" v-if="chartData">
            <ul>
              <li
                v-for="(label, index) in chartData.labels"
                :key="index"
                class="flex items-center space-x-3"
              >
                <div
                  class="w-3 h-3 rounded-full"
                  :style="{
                    background: chartData.datasets[0].backgroundColor[index],
                  }"
                ></div>
                <span class="text-gray-one text-sm"> {{ label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-end">
      <base-button
        styles="w-full font-bold bg-white text-primary"
        size="large"
        type="primary"
        bgColor="#ffffff"
        textColor="#475569"
        borderColor="#475569"
      >
        <div class="flex items-center space-x-2">
          <span>Download Report</span>
          <img src="@/assets/images/icons/pdf.svg" alt="" />
        </div>
      </base-button>
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
