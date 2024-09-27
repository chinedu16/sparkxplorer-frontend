<template>
  <div>
    <div
      class="flex justify-between items-center mb-6 border-b pb-6 border-gray-five"
    >
      <h2 class="font-extrabold text-gray-two text-3xl">Scholars</h2>
      <div class="flex items-center space-x-4">
        <base-button
          styles="w-full font-bold bg-white text-primary"
          size="large"
          type="primary"
          @click="addScholarHandler"
          class="m-0"
        >
          <div class="flex items-center space-x-2">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7962 3.11113L9.29625 0.611127C9.10417 0.546291 8.89613 0.546291 8.70406 0.611127L1.20406 3.11113C1.0251 3.1704 0.86817 3.28224 0.753748 3.43206C0.639326 3.58189 0.57273 3.76272 0.562653 3.95097C0.561798 3.96737 0.561798 3.98379 0.562653 4.00019V10.2502C0.562653 10.4988 0.661425 10.7373 0.83724 10.9131C1.01306 11.0889 1.25151 11.1877 1.50015 11.1877C1.74879 11.1877 1.98725 11.0889 2.16307 10.9131C2.33888 10.7373 2.43765 10.4988 2.43765 10.2502V5.30097L4.29 5.91816C3.71512 7.01855 3.54428 8.28567 3.80722 9.49902C4.07016 10.7124 4.75023 11.7951 5.72906 12.5588C4.44814 13.1904 3.36408 14.16 2.5939 15.3627C2.52455 15.4658 2.47637 15.5816 2.45218 15.7035C2.42798 15.8253 2.42825 15.9508 2.45297 16.0726C2.47769 16.1943 2.52637 16.3099 2.59617 16.4127C2.66597 16.5155 2.75551 16.6034 2.85957 16.6713C2.96363 16.7391 3.08015 16.7857 3.20235 16.8081C3.32455 16.8306 3.44999 16.8285 3.57138 16.802C3.69278 16.7756 3.8077 16.7252 3.90947 16.654C4.01124 16.5827 4.09784 16.4919 4.16421 16.3869C5.27906 14.6713 7.04703 13.6877 9.00015 13.6877C10.9533 13.6877 12.7212 14.6713 13.84 16.3869C13.9064 16.4919 13.993 16.5827 14.0947 16.654C14.1965 16.7252 14.3114 16.7756 14.4328 16.802C14.5542 16.8285 14.6797 16.8306 14.8019 16.8081C14.9241 16.7857 15.0406 16.7391 15.1446 16.6713C15.2487 16.6034 15.3382 16.5155 15.408 16.4127C15.4778 16.3099 15.5265 16.1943 15.5512 16.0726C15.576 15.9508 15.5762 15.8253 15.552 15.7035C15.5278 15.5816 15.4797 15.4658 15.4103 15.3627C14.6394 14.1586 13.5539 13.1881 12.2712 12.5564C13.2501 11.7928 13.9301 10.71 14.1931 9.49667C14.456 8.28333 14.2852 7.0162 13.7103 5.91581L16.7962 4.88691C16.9827 4.82454 17.1448 4.70514 17.2596 4.54559C17.3745 4.38605 17.4363 4.19443 17.4363 3.99785C17.4363 3.80126 17.3745 3.60964 17.2596 3.4501C17.1448 3.29056 16.9827 3.17116 16.7962 3.10878V3.11113ZM9.00015 2.48613L13.5353 4.00019L9.00015 5.51191L4.4689 4.00019L9.00015 2.48613ZM12.4377 8.37519C12.4378 8.90912 12.3135 9.43574 12.0747 9.91329C11.8359 10.3908 11.4891 10.8062 11.0619 11.1264C10.6346 11.4467 10.1387 11.663 9.61328 11.7582C9.08791 11.8534 8.54758 11.825 8.03512 11.6751C7.52266 11.5252 7.05216 11.258 6.66093 10.8947C6.26969 10.5313 5.96847 10.0818 5.78115 9.58183C5.59383 9.08184 5.52555 8.54508 5.58174 8.01411C5.63792 7.48314 5.81702 6.97256 6.10484 6.52285L8.70406 7.38925C8.89617 7.45386 9.10414 7.45386 9.29625 7.38925L11.8955 6.52285C12.25 7.07557 12.4382 7.71854 12.4377 8.37519Z"
                fill="white"
              />
            </svg>

            <span>Add Scholar</span>
          </div>
        </base-button>
        <!-- <base-button
          styles="w-full font-bold"
          class="m-0"
          size="large"
          type="primary"
          bgColor="#1E293B"
          textColor="#ffffff"
        >
          <div class="flex items-center space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9375 10.625C15.9375 10.8736 15.8387 11.1121 15.6629 11.2879C15.4871 11.4637 15.2486 11.5625 15 11.5625H5C4.75136 11.5625 4.5129 11.4637 4.33709 11.2879C4.16127 11.1121 4.0625 10.8736 4.0625 10.625C4.0625 10.3764 4.16127 10.1379 4.33709 9.96209C4.5129 9.78627 4.75136 9.6875 5 9.6875H15C15.2486 9.6875 15.4871 9.78627 15.6629 9.96209C15.8387 10.1379 15.9375 10.3764 15.9375 10.625ZM18.125 5.9375H1.875C1.62636 5.9375 1.3879 6.03627 1.21209 6.21209C1.03627 6.3879 0.9375 6.62636 0.9375 6.875C0.9375 7.12364 1.03627 7.3621 1.21209 7.53791C1.3879 7.71373 1.62636 7.8125 1.875 7.8125H18.125C18.3736 7.8125 18.6121 7.71373 18.7879 7.53791C18.9637 7.3621 19.0625 7.12364 19.0625 6.875C19.0625 6.62636 18.9637 6.3879 18.7879 6.21209C18.6121 6.03627 18.3736 5.9375 18.125 5.9375ZM11.875 13.4375H8.125C7.87636 13.4375 7.6379 13.5363 7.46209 13.7121C7.28627 13.8879 7.1875 14.1264 7.1875 14.375C7.1875 14.6236 7.28627 14.8621 7.46209 15.0379C7.6379 15.2137 7.87636 15.3125 8.125 15.3125H11.875C12.1236 15.3125 12.3621 15.2137 12.5379 15.0379C12.7137 14.8621 12.8125 14.6236 12.8125 14.375C12.8125 14.1264 12.7137 13.8879 12.5379 13.7121C12.3621 13.5363 12.1236 13.4375 11.875 13.4375Z"
                fill="white"
              />
            </svg>

            <span>Filter</span>
          </div>
        </base-button> -->
        <base-input
          v-model="search"
          name="username"
          style="margin-bottom: 0 !important"
          label=""
          placeholder="Find scholar"
          type="text"
          icon-suffix="search-gray"
          variant="transparent"
          class="m-0"
        />
      </div>
    </div>
    <div class="border rounded-3xl">
      <el-table
        class="border-r rounded-3xl cursor-pointer"
        :data="tableData"
        v-loading="loading"
        style="width: 100%"
        @row-click="handleRowClick"
      >
        <el-table-column prop="name" label="Scholar Name">
          <template #default="scope">
            <div class="flex space-x-3">
              <img
                v-if="!scope.row.picture_url"
                class="w-10 h-10 object-cover rounded-full"
                src="@/assets/images/icons/user.svg"
                alt=""
              />
              <img
                v-else
                class="w-10 h-10 object-cover rounded-full"
                :src="scope.row.picture_url"
                alt=""
              />
              <div>
                <h3 class="font-bold">{{ scope.row.name }}</h3>
                <p>{{ scope.row.grade }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="Status">
          <template #default="scope">
            <el-tag :type="scope.row.status ? 'success' : 'info'">
              {{ scope.row.status ? "Active" : "Inactive" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="Date Registered" />
        <el-table-column fixed="right" label="" min-width="120">
          <template #default="scope">
            <el-button
              @click.stop="editScholar(scope.row)"
              link
              type="primary"
              size="small"
            >
              <img
                class="w-4 h-4 object-cover"
                src="@/assets/images/icons/edit.png"
                alt=""
              />
            </el-button>
            <el-button
              v-if="scope.row.is_active"
              @click.stop="deleteScholar(scope.row)"
              link
              type="primary"
              size="small"
            >
              <img
                class="w-4 h-4 object-cover"
                src="@/assets/images/icons/delete.png"
                alt=""
              />
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="px-8 flex justify-end py-6">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="scholarStore.getTotal"
        />
      </div>
    </div>

    <el-dialog @close="handleClose" v-model="openCreateModal" title="" width="500">
      <scholars-add-scholar
        @done="closeAddScholarModal"
        :scholarActionType="scholarActionType"
        :selectedRow="selectedRow"
      />
    </el-dialog>

    <common-action-dialog
      dialogTitle="Deactivate this scholar?"
      dialogMessage="Deactivating this scholar means you will lose all performance report and scholar will not be able to learn again on Xplorer."
      :openModal="openDeleteDialog"
      confirmButtonText="Delete"
      confirmButtonColor="#F43F5E"
      :onConfirm="handleDelete"
      :onCancel="handleCancel"
    >
      <template #icon>
        <div
          class="bg-red-50 rounded-full flex items-center justify-center font-bold text-base h-12 w-12"
        >
          <img src="@/assets/images/icons/delete.svg" alt="" />
        </div>
      </template>
    </common-action-dialog>
  </div>
</template>

<script setup lang="ts">
import { useScholarStore } from "@/store/scholar";
import { usePaymentStore } from "@/store/payment";

const emit = defineEmits(["done"]);
const { formatDate, formatToISODate } = useDateFormatter();

const paymentStore = usePaymentStore();
const scholarStore = useScholarStore();
const search = ref("");
const page = ref(1);
const per_page = ref(10);
const loading = ref(false);
const openDeleteDialog = ref(false);
const openEditDialog = ref(false);
const scholarActionType = ref("");
const openCreateModal = ref(false);
const selectedRow = ref();
const { handleError } = useErrorHandler();

const tableData = computed(() => {
  return scholarStore.getScholars.map((scholar: any) => ({
    id: scholar.id,
    email: scholar.email,
    name: `${scholar.first_name} ${scholar.last_name}`,
    grade: scholar.grade.name,
    status: scholar.is_active,
    picture_url: scholar.picture_url,
    is_active: scholar.is_active,
    date: formatDate(scholar.created_at),
    unformattedDate: formatToISODate(scholar.created_at),
  }));
});

const handleDelete = async () => {
  try {
    loading.value = true;
    const response = await scholarStore.deactivateScholar(selectedRow.value);
    if (response) {
      const { data, error } = response;
      if (error) {
        handleError(error);
        return false;
      }
      if (data) {
        openDeleteDialog.value = false;
        fetchScholars();
      }
    }
  } catch (error) {
    handleError(error);
    return false;
  } finally {
    loading.value = false;
  }
};

const handleClose = () => {
  console.log('Dialog closed');
  selectedRow.value = null;
  scholarActionType.value = '';
  
  // Any additional logic when the dialog is closed
};

const handleCancel = () => {
  openDeleteDialog.value = false;
};

const editScholar = (row: any) => {
  selectedRow.value = row
  scholarActionType.value = "edit";
  scholarStore.setEditScholarDetails(row);
  openCreateModal.value = true;
};
const deleteScholar = (row: any) => {
  selectedRow.value = row.id;
  openDeleteDialog.value = true;
};

const addScholarHandler = () => {
  if (!paymentStore.getCanAddScholar) {
    navigateTo("/dashboard/subscription/subscribe");
  } else {
    openCreateModal.value = true;
  }
};

const closeAddScholarModal = () => {
  openCreateModal.value = false;
  fetchScholars();
};

const fetchScholars = async () => {
  try {
    loading.value = true;
    const payload = {
      page: page.value,
      per_page: per_page.value,
    };
    await scholarStore.getAllScholar(payload);
    await paymentStore.checkIfCanAddScholars();
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

const handleRowClick = (row: any) => {
  navigateTo(`/dashboard/scholars/${row.id}`);
};

fetchScholars();
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped></style>
