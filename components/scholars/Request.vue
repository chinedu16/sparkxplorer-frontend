<template>
  <div>
    <el-table :data="tableData" style="width: 100%" v-loading="loading" border>
      <el-table-column prop="tutor" label="Tutors" />
      <el-table-column prop="subject" label="Subject" />
      <el-table-column label="Type">
        <template #default="{ row }">
          <el-tag
            v-for="(type, index) in row.type"
            :key="index"
            :type="type === 'Online' ? 'info' : 'success'"
          >
            {{ type }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Date" />
      <el-table-column label="Action">
        <template #default="{ row }">
          <el-button @click="approve(row)" type="success" size="small">
            Approve
          </el-button>
          <el-button @click="deleteRow(row)" type="danger" size="small">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="total"
      :page-size="pageSize"
      v-model:current-page="currentPage"
      @current-change="fetchData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Tutor {
  tutor: string;
  subject: string;
  type: string[];
  date: string;
}

const loading = ref(true);
const tableData = ref<Tutor[]>([]);
const total = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);

const fetchData = async (page = 1) => {
  loading.value = true;
  try {
    // Simulate fetching data (replace with your API call)
    const response = await new Promise<Tutor[]>((resolve) => {
      setTimeout(() => {
        const data: Tutor[] = Array.from({ length: 50 }, (_, index) => ({
          tutor: `Tutor ${index + 1}`,
          subject: `Subject ${index + 1}`,
          type: ["Online", "Offline"][Math.floor(Math.random() * 2)],
          date: new Date().toLocaleDateString(),
        }));
        resolve(data);
      }, 1000);
    });

    // Update table data and total based on pagination
    tableData.value = response.slice(
      (page - 1) * pageSize.value,
      page * pageSize.value
    );
    total.value = response.length;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};

const approve = (row: Tutor) => {
  console.log("Approved:", row);
};

const deleteRow = (row: Tutor) => {
  console.log("Deleted:", row);
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.el-table {
  margin-bottom: 20px;
}
</style>
