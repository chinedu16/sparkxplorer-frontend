<template>
  <div>
    <h1 class="text-blue-two font-semibold text-2xl">Welcome, Taiwo Ademola</h1>
    <p class="text-gray-500 text-sm">Here is the information about our causes</p>

    
    <!-- <div class="mt-10 border">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date Created" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="package" label="Package" />
        <el-table-column prop="phone" label="Phone Number" />
        <el-table-column prop="purpose" label="Purpose" />
       
      </el-table>
    </div> -->

    
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";

definePageMeta({
  layout: "admin",
});

const search = ref("");
const dateRange = ref("");
const tableData = [
  {
    date: "2016-05-03",
    name: "Juwon AJ ",
    package: "SPARK LAPTOP",
    phone: "080037373737",
    purpose: "I need a laptop for digital marketing",
  },
  {
    date: "2016-05-03",
    name: "Juwon AJ ",
    package: "SPARK LAPTOP",
    phone: "080037373737",
    purpose: "I need a laptop for digital marketing",
  },
  {
    date: "2016-05-03",
    name: "Juwon AJ ",
    package: "SPARK LAPTOP",
    phone: "080037373737",
    purpose: "I need a laptop for digital marketing",
  },
  {
    date: "2016-05-03",
    name: "Juwon AJ ",
    package: "SPARK LAPTOP",
    phone: "080037373737",
    purpose: "I need a laptop for digital marketing",
  },
  {
    date: "2016-05-03",
    name: "Juwon AJ ",
    package: "SPARK LAPTOP",
    phone: "080037373737",
    purpose: "I need a laptop for digital marketing",
  },
  
  
];
</script>

<style scoped></style>
