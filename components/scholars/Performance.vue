<template>
  <div class="space-y-6">
    <div class="flex space-x-6">
      <img src="../../assets/images/illustrations/avatar-male.png" alt="" />
      <div>
        <h2 class="font-bold text-xl">Amanda Cortez</h2>
        <p class="text-gray-one text-sm">Grade 2</p>
      </div>
    </div>
    <DashboardStatisticsCard />
    <div class="flex justify-between space-x-8">
      <div class="w-4/12 rounded-3xl border shadow-lg">
        <div class="px-6 pt-6">
          <h3 class="font-bold">Performance by Subject</h3>
          <p class="text-gray-one mt-2 mb-4 text-sm">
            Based on questions answered
          </p>
          <base-select
            v-model="selectedSubject"
            name="grade"
            :options="subjects"
            label=""
            placeholder="Select Subject"
          />
        </div>

        <div class="border text-sm text-gray-one font-semibold">
            <div class="chart-container-pie p-6">
            <Doughnut
              v-if="chartDataPie"
              :data="chartDataPie"
              :options="chartOptionsPie"
            />
          </div>
          <div class="p-6">
            <div>
              <span>Total Questions:</span>
              <span>2324</span>
            </div>
            <div>
              <span>Answered correctly: </span>
              <span>1678</span>
            </div>
          </div>
        </div>

        <div class="p-6">
          <CommonTabButton
            class="w-2/3"
            :items="['1 Day', '1 Week', '1 Month', '1 Year', 'All Time']"
          />
        </div>
      </div>

      <div class="w-8/12 rounded-3xl border shadow-lg">
        <div class="px-6 flex items-center space-x-4 pt-6">
          <div
            class="bg-purple-one flex items-center justify-center rounded-full h-10 w-10"
          >
            <img src="@/assets/images/icons/questions.svg" alt="" />
          </div>
          <h3 class="m-0 font-bold">Performance by Subject</h3>

          <div class="w-2/3 perf">
            <base-select
              v-model="selectedSubject"
              name="grade"
              class="w-full"
              :options="subjects"
              label=""
              placeholder="Select Subject"
            />
          </div>
        </div>
        <div class="border mt-10 p-6 text-sm text-gray-one font-semibold">
          <div class="chart-container">
            <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
          </div>
        </div>
        <div class="p-6 flex justify-between">
          <CommonTabButton
            class="w-4/12"
            :items="['1 Day', '1 Week', '1 Month', '1 Year', 'All Time']"
          />
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
    </div>

    <div class="flex justify-between space-x-6">
      <ScholarsLeaderboard class="w-1/2" />
      <ScholarsAssessment class="w-1/2" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Bar, Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from "chart.js";

// Register the necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

// Define your chart data
const chartData = ref(null);
const chartDataPie = ref(null);

onMounted(() => {
  chartData.value = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Answered Questions",
        backgroundColor: "#FBBF24", // Adjust color as needed
        data: [30, 50, 20, 70, 60, 80, 90, 100, 70, 50, 60, 80], // Example data for each month
      },
      {
        label: "Missed Questions",
        backgroundColor: "#6366F1", // Adjust color as needed
        data: [20, 30, 50, 40, 30, 20, 10, 15, 25, 30, 20, 15], // Example data for each month
      },
    ],
  };
  chartDataPie.value = {
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
const chartOptionsPie = ref({
  responsive: true,
  cutout: "70%", // Adjust this value to make the doughnut thinner
  plugins: {
    legend: {
      display: false, // Disable the default legend
    },
  },
});

const selectedSubject = ref();
const subjects = ref([
  {
    value: "Mathematics",
    label: "Mathematics",
  },
  {
    value: "Science",
    label: "Science",
  },
  {
    value: "Language Art",
    label: "Language Art",
  },
  {
    value: "Social Studies",
    label: "Social Studies",
  },
  {
    value: "All subjects",
    label: "All subjects",
  },
]);
</script>

<style>
.perf .el-form-item {
  margin-bottom: 0 !important;
}

.chart-container {
  height: 400px;
}

.chart-container-pie {
  height: 300px;
}
</style>
