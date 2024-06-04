<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error.message || 'An error occurred' }}</div>

    <div v-if="!loading && !error && scholars.length === 0" class="no-data">
      <p>No scholars found.</p>
    </div>

    <el-table v-if="!loading && !error && filteredScholars.length > 0" :data="filteredScholars" style="width: 100%">
      <el-table-column prop="fullName" label="Parent/Guardian Name" width="180" sortable :sort-order="sortField === 'fullName' ? sortOrder : undefined" @sort-change="handleSort('fullName')">
      </el-table-column>
      <el-table-column prop="email" label="Email" width="180" sortable :sort-order="sortField === 'email' ? sortOrder : undefined" @sort-change="handleSort('email')">
      </el-table-column>
      <el-table-column prop="whatsappNumber" label="WhatsApp Number" width="180" sortable :sort-order="sortField === 'whatsappNumber' ? sortOrder : undefined" @sort-change="handleSort('whatsappNumber')">
      </el-table-column>
      <el-table-column prop="address" label="Address" width="180" sortable :sort-order="sortField === 'address' ? sortOrder : undefined" @sort-change="handleSort('address')">
      </el-table-column>
            <el-table-column prop="isVerified" label="Verified" width="180" sortable :sort-order="sortField === 'isVerified' ? sortOrder : undefined" @sort-change="handleSort('isVerified')">
        <template v-slot="scope">
          <span>{{ scope.row.isVerified ? 'Yes' : 'No' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Children" width="600">
        <template v-slot="scope">
          <ul>
            <li v-for="child in scope.row.child" :key="child.fullName">
              {{ child.fullName }} ({{ child.dateOfBirth }}), Grade: {{ child.grade }}
            </li>
          </ul>
        </template>
      </el-table-column>
    </el-table>

    <div v-if="!loading && !error && filteredScholars.length > 0" class="pagination">
      <el-pagination
        @current-change="handlePageChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="scholars.length"
        layout="prev, pager, next"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useSparkStore } from '@/store/sparkstore';

const sparkStore = useSparkStore();

const scholars = computed(() => sparkStore.scholars);
const loading = computed(() => sparkStore.loading);
const error = computed(() => sparkStore.error);

const sortField = ref('');
const sortOrder = ref('ascending');
const pageSize = ref(10);
const currentPage = ref(1);
const searchQuery = ref('');

const filteredScholars = computed(() => {
  console.log('Filtering scholars:', scholars.value); // Debugging log
  let filtered = scholars.value;

  if (searchQuery.value) {
    filtered = filtered.filter(scholar =>
      scholar.fullName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (sortField.value) {
    filtered.sort((a, b) => {
      const order = sortOrder.value === 'ascending' ? 1 : -1;
      return a[sortField.value] < b[sortField.value] ? -1 * order : a[sortField.value] > b[sortField.value] ? order : 0;
    });
  }

  const start = (currentPage.value - 1) * pageSize.value;
  const end = currentPage.value * pageSize.value;
  console.log('Paginated scholars:', filtered.slice(start, end)); // Debugging log
  return filtered.slice(start, end);
});

onMounted(async () => {
  console.log('Component mounted, fetching scholars...');
  await sparkStore.fetchScholars();
  console.log('Fetched scholars:', scholars.value);
});

const handleSort = (field: string) => {
  if (sortField.value === field) {
    sortOrder.value = sortOrder.value === 'ascending' ? 'descending' : 'ascending';
  } else {
    sortField.value = field;
    sortOrder.value = 'ascending';
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
