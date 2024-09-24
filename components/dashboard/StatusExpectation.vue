<template>
  <div class="rounded-3xl border shadow-lg p-6">
    <h3 class="font-bold">Week to Date Status by Expectation</h3>

    <div class="flex space-x-2 my-8">
      <img
        class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-10 w-10"
        src="@/assets/images/illustrations/avatar-male.png"
        alt=""
      />
      <div>
        <h4 class="font-bold">Amanda Cortez</h4>
        <p class="text-gray-one text-sm capitalize">Grade 2</p>
      </div>
    </div>
    <div class="border rounded-xl">
      <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
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
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// Define your chart data
const chartData = ref(null);

// Create data on mounted
onMounted(() => {
  chartData.value = {
    labels: ["Mathematics", "Language Arts", "Science", "Social Studies"],
    datasets: [
      {
        label: "Sequentially Achieved",
        backgroundColor: "#312E81",
        data: [40, 20, 30, 50, 80],
      },
      {
        label: "Actual Achieved",
        backgroundColor: "#4F46E5",
        data: [30, 50, 20, 70, 60],
      },
      {
        label: "Expected Daily Target",
        backgroundColor: "#A5B4FC",
        data: [20, 30, 50, 40, 30],
      },
    ],
  };
});


// Define options for stacked bar chart
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
});
</script>

<style scoped></style>
