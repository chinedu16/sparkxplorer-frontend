<template>
    <div class="rounded-3xl border shadow-lg p-6">
      <h3 class="font-bold">Scholar Leaderboard</h3>
      <p class="text-gray-one mt-2 text-sm">
        Keep practicing to come on top
      </p>
  
      <div class="flex justify-center  my-8">
        <div class="flex flex-col items-center">
            <img src="../../assets/images/illustrations/crown.png" class="mb-10" alt="">
            <img src="../../assets/images/illustrations/leaderboard.png" alt="">
        </div>
      </div>
  
      <!-- Expectations Table -->
      <div class="border rounded-xl mb-6">
        <el-table
        :data="leaderboardData"
        style="width: 100%"
      >
        <el-table-column prop="position" label="Position" />
        <el-table-column label="Scholars">
          <template #default="{ row }">
            <div class="flex items-center">
              <!-- <img
                class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-10 w-10 mr-2"
                :src="row.avatar"
                alt=""
              /> -->
              <img
                class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-10 w-10 mr-2"
                src="../../assets/images/illustrations/avatar-male.png"
                alt=""
              />
              <span>{{ row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="grade" label="Grade" />
        <el-table-column prop="minExpectation" label="Min Expectation Sequentially" />
        <el-table-column prop="totalSkillsCompletedSequentially" label="Total Skills Completed Sequentially" />
        <el-table-column prop="totalSkillsCompletedUnsequentially" label="Total Skills Completed Unsequentially" />
        <el-table-column prop="totalSkillsCompleted" label="Total Skills Completed" />
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
          View all
        </base-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  

  // Sample data for leaderboard
  const leaderboardData = ref([
    {
      position: 1,
      avatar: "../../assets/images/illustrations/avatar-female.png",
      name: "Sophia Smith",
      grade: "Grade 2",
      minExpectation: 800,
      totalSkillsCompletedSequentially: 100,
      totalSkillsCompletedUnsequentially: 10,
      totalSkillsCompleted: 110,
    },
    {
      position: 2,
      avatar: "../../assets/images/illustrations/avatar-male.png",
      name: "Liam Johnson",
      grade: "Grade 2",
      minExpectation: 750,
      totalSkillsCompletedSequentially: 95,
      totalSkillsCompletedUnsequentially: 8,
      totalSkillsCompleted: 103,
    },
    {
      position: 3,
      avatar: "../../assets/images/illustrations/avatar-male.png",
      name: "Mason Lee",
      grade: "Grade 2",
      minExpectation: 700,
      totalSkillsCompletedSequentially: 90,
      totalSkillsCompletedUnsequentially: 9,
      totalSkillsCompleted: 99,
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
  