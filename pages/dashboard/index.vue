<template>
  <div class="space-y-6">
    <DashboardStatisticsCard />
    <div class="flex justify-between space-x-6">
      <DashboardPerformance class="w-1/2" />
      <DashboardPerformance class="w-1/2" />
    </div>
    <div class="flex justify-between space-x-6">
      <DashboardStatusExpectation class="w-1/2" />
      <DashboardStatusExpectation class="w-1/2" />
    </div>
    <div class="flex justify-between space-x-6">
      <DashboardSkillStatus class="w-1/2" />
      <DashboardToken class="w-1/2" />
    </div>
    <div class="flex justify-between space-x-6">
      <DashboardNextLesson class="w-1/2" />
      <DashboardNextLesson class="w-1/2" />
    </div>
    <DashboardLeaderboard />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped></style>
