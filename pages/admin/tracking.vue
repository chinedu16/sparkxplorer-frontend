<template>
  <div>
    <h1 class="text-blue-two font-semibold text-2xl">Order Tracking</h1>

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
        <el-table-column label="Actions">
          <template #default="scope">
            <el-button :icon="View" link type="primary" size="small" @click="handleClick">
                View
              </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mt-4 flex justify-end">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="Order Information" width="700">
    <div class="mt-4">
      <div>
        <el-steps style="max-width: 600px" :active="1">
          <el-step title="Order Created" description="2024/02/03 12:30" :icon="Edit" />
          <el-step title="Order Approved" description="2024/02/03 12:30" :icon="Upload" />
          <el-step title="Pairing" description="2024/02/03 12:30" :icon="Picture" />
          <el-step title="Delivered" description="2024/02/03 12:30" :icon="Picture" />
        </el-steps>

        <div class="p-4 mt-4 border space-y-3 rounded-lg">
          <h4 class="font-semibold">Beneficiary Details</h4>
          <div>
            <span>Name: Taiwo Ademola </span>
          </div>
          <div>
            <span>Telephone Number: 08181754074 </span>
          </div>
          <div>
            <span>Address: 20, Ikeja Street, Lagos State </span>
          </div>
          <div>
            <span
              >Purpose: I need a laptop to foster my graphic design journey
            </span>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          Close
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { Edit, Picture, Upload, Search, View } from "@element-plus/icons-vue";
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
const modalType = ref("");
const dialogVisible = ref(false);

function handleClick(params: string) {
  modalType.value = params;
  dialogVisible.value = true;
}
</script>

<style scoped></style>
