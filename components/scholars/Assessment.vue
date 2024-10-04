<template>
    <div class="rounded-3xl border shadow-lg p-6">
      <h3 class="font-bold">Recent Assements</h3>
      <p class="text-gray-one mt-2 text-sm">
        Assessment performance
      </p>
  
      <!-- Expectations Table -->
      <div class="border rounded-xl mt-8 mb-6">
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
        
      </el-table>
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
      
    },
    {
      position: 2,
      avatar: "../../assets/images/illustrations/avatar-male.png",
      name: "Liam Johnson",
      grade: "Grade 2",
     
    },
    {
      position: 3,
      avatar: "../../assets/images/illustrations/avatar-male.png",
      name: "Mason Lee",
      grade: "Grade 2",
      
    },
    {
      position: 1,
      avatar: "../../assets/images/illustrations/avatar-female.png",
      name: "Sophia Smith",
      grade: "Grade 2",
      
    },
    {
      position: 2,
      avatar: "../../assets/images/illustrations/avatar-male.png",
      name: "Liam Johnson",
      grade: "Grade 2",
     
    },
    {
      position: 3,
      avatar: "../../assets/images/illustrations/avatar-male.png",
      name: "Mason Lee",
      grade: "Grade 2",
      
    },
    {
      position: 1,
      avatar: "../../assets/images/illustrations/avatar-female.png",
      name: "Sophia Smith",
      grade: "Grade 2",
      
    }
  ]);
  
  // Function to determine the tag type based on actual achieved value
  const getTagType = (value: number) => {
    if (value >= 8) return "success";
    if (value >= 5) return "info";
    return "danger";
  };
  </script>
  
  <style scoped></style>
  