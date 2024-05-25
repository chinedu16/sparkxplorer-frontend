<template>
  <div>
    <h1 class="text-blue-two font-semibold text-2xl">My Orders</h1>

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
        <el-table-column prop="order_id" label="Order ID" width="180" />
        <el-table-column prop="order" label="Order" />
        <el-table-column prop="description" label="Description" />
        <el-table-column prop="quantity" label="Quantity" />
        <el-table-column prop="amount" label="Amount" />
        <el-table-column label="Order Status">
          <template #default="scope">
            
            <el-tag v-if="scope.row.status === 'Processing'" type="warning" effect="light" round>
              {{ scope.row.status }}
            </el-tag>
            <el-tag v-if="scope.row.status === 'Failed'" type="danger" effect="light" round>
              {{ scope.row.status }}
            </el-tag>
            <el-tag v-if="scope.row.status === 'Approved'" type="success" effect="light" round>
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
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
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Processing",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Failed",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Approved",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Processing",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Failed",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Approved",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Processing",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Failed",
  },
  {
    date: "2016-05-03",
    order_id: "34344545",
    order: "SPARK LAPTOP",
    description: "HP SPARK LAPTOP",
    quantity: "3",
    amount: "$2,000",
    status: "Approved",
  },
];
</script>

<style scoped></style>
