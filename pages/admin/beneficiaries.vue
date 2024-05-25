<template>
    <div>
      <h1 class="text-blue-two font-semibold text-2xl">My Beneficiaries</h1>
  
      <div class="mt-8">
        <el-input
          v-model="search"
          style="width: 440px"
          size="large"
          class="mr-4"
          placeholder="Search by Order name or Order ID"
          :suffix-icon="Search"
        />
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          size="large"
        />
      </div>
      <div class="mt-10 border">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date Created" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="package" label="Package" />
          <el-table-column prop="phone" label="Phone Number" />
          <el-table-column prop="purpose" label="Purpose" />
         
        </el-table>
      </div>
      <div class="mt-4 flex justify-end">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
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
  