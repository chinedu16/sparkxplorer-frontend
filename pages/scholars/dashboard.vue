<template>
  <div class="max-w-screen-2xl w-full mx-auto mt-16 mb-20">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error.message || "An error occurred" }}
    </div>

    <div v-if="!loading && !error && scholars.length === 0" class="no-data">
      <p>No scholars found.</p>
    </div>

    <div class="" v-if="!loading && !error && filteredScholars.length > 0">
      <h4 class="text-xl font-semibold mb-10">Registered Information</h4>

      <div class="my-10 flex justify-end items-center">
        <el-button @click="exportData('parent')" plain size="large" :loading="parentLoading">Export Parent Number</el-button>
        <el-button @click="exportData('child')" type="primary" size="large" :loading="childLoading"> Export Child Data </el-button>
      </div>
      <el-table :data="filteredScholars" style="width: 100%">
        <el-table-column
          prop="fullName"
          label="Parent/Guardian Name"
          width="180"
          sortable
          :sort-order="sortField === 'fullName' ? sortOrder : undefined"
          @sort-change="handleSort('fullName')"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="Email"
          width="180"
          sortable
          :sort-order="sortField === 'email' ? sortOrder : undefined"
          @sort-change="handleSort('email')"
        >
        </el-table-column>
        <el-table-column
          prop="whatsappNumber"
          label="WhatsApp Number"
          width="180"
          sortable
          :sort-order="sortField === 'whatsappNumber' ? sortOrder : undefined"
          @sort-change="handleSort('whatsappNumber')"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address"
          width="180"
          sortable
          :sort-order="sortField === 'address' ? sortOrder : undefined"
          @sort-change="handleSort('address')"
        >
        </el-table-column>
        <el-table-column
          prop="isVerified"
          label="Verified"
          width="180"
          sortable
          :sort-order="sortField === 'isVerified' ? sortOrder : undefined"
          @sort-change="handleSort('isVerified')"
        >
          <template v-slot="scope">
            <span>{{ scope.row.isVerified ? "Yes" : "No" }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Children" width="600">
          <template v-slot="scope">
            <ul>
              <li v-for="child in scope.row.child" :key="child.fullName">
                {{ child.fullName }} ({{ child.dateOfBirth }}), Grade:
                {{ child.grade }}
              </li>
            </ul>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination
          @current-change="handlePageChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="scholars.length"
          layout="prev, pager, next"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import { useSparkStore } from "@/store/spark";
import { useScholarStore } from "@/store/scholar";

const scholarStore = useScholarStore();
const sparkStore = useSparkStore()

const scholars = computed(() => scholarStore.scholars);
const loading = computed(() => scholarStore.loading);
const error = computed(() => scholarStore.error as any);

const sortField = ref("");
const sortOrder = ref("ascending");
const pageSize = ref(10);
const currentPage = ref(1);
const searchQuery = ref("");
const parentLoading = ref(false);
const childLoading = ref(false)

const filteredScholars = computed(() => {
  let filtered = scholars.value;

  if (searchQuery.value) {
    filtered = filtered.filter((scholar: any) =>
      scholar.fullName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (sortField.value) {
    filtered.sort((a, b) => {
      const order = sortOrder.value === "ascending" ? 1 : -1;
      return a[sortField.value] < b[sortField.value]
        ? -1 * order
        : a[sortField.value] > b[sortField.value]
        ? order
        : 0;
    });
  }

  const start = (currentPage.value - 1) * pageSize.value;
  const end = currentPage.value * pageSize.value;
  return filtered.slice(start, end);
});

onMounted(async () => {
  await scholarStore.fetchScholars();
});

const exportData = async (params: string) => {
  params === 'parent' ? parentLoading.value = true : childLoading.value = true;
  try {
    const {data} = await sparkStore.exportScholarData(params);
    
    if (data) {
      const filePath = `https://api.sparkbridges.com/downloads/${data.fileName}`;
      const link = document.createElement('a');
      link.href = filePath;
      link.download = data.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error('Error exporting data:', error);
  } finally {
    parentLoading.value = false;
    childLoading.value = false;
  }
};


const handleSort = (field: string) => {
  if (sortField.value === field) {
    sortOrder.value =
      sortOrder.value === "ascending" ? "descending" : "ascending";
  } else {
    sortField.value = field;
    sortOrder.value = "ascending";
  }
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>

<style scoped>
.loading {
  text-align: center;
  font-size: 1.5em;
  color: #999;
}

.error {
  text-align: center;
  font-size: 1.5em;
  color: red;
}

.no-data {
  text-align: center;
  font-size: 1.2em;
  color: #aaa;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
