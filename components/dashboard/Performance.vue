<template>
  <div class="rounded-3xl border shadow-lg p-6">
    <h3 class="font-bold">Previous Day Status by Expectations</h3>
    <p class="text-gray-one mt-2 text-sm">
      Here you can track your scholar’s performance.
    </p>

    <div class="flex space-x-2 my-8">
      <img
        class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-10 w-10"
        src="../../assets/images/illustrations/avatar-male.png"
        alt=""
      />
      <div>
        <h4 class="font-bold">Amanda Cortez</h4>
        <p class="text-gray-one text-sm capitalize">Grade 2</p>
      </div>
    </div>
    <div class="border rounded-xl">
      <el-table
        class="border-r rounded-xl"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="subject" label="Subject" />
        <el-table-column prop="expectedTarget" label="Expected Daily Target" />
        <el-table-column prop="actualAchieved" label="Actual Achieved">
          <template #default="{ row }">
            <el-tag
              v-if="row.actualAchieved"
              :type="getTagType(row.actualAchieved)"
            >
              {{ row.actualAchieved }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="sequentiallyAchieved"
          label="Sequentially Achieved"
        />
      </el-table>
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

<script setup lang="ts">
import { ref } from "vue";

// Sample data
const tableData = ref([
  {
    subject: "Math",
    expectedTarget: 8,
    actualAchieved: 7,
    sequentiallyAchieved: 5,
  },
  {
    subject: "Science",
    expectedTarget: 9,
    actualAchieved: 8,
    sequentiallyAchieved: 6,
  },
  {
    subject: "History",
    expectedTarget: 7,
    actualAchieved: 9,
    sequentiallyAchieved: 10,
  },
]);

// Function to determine the tag type based on actual achieved value
const getTagType = (value: number) => {
  if (value >= 8) return "success";
  if (value >= 5) return "info";
  return "danger";
};
</script>

<style scoped></style>
