<template>
  <div>
    <div v-if="loading" class="container">
      <div class="spinner-big"></div>
    </div>
    <div v-else class="flex justify-between items-center">
      <div class="space-x-3 font-bold text-gray-one flex items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.9375 8.89062H8.89062V8.9375V14.875C8.89062 15.1112 8.79679 15.3377 8.62977 15.5048C8.46274 15.6718 8.23621 15.7656 8 15.7656C7.76379 15.7656 7.53726 15.6718 7.37023 15.5048C7.20321 15.3377 7.10938 15.1112 7.10938 14.875V8.9375V8.89062H7.0625H1.125C0.888792 8.89062 0.662258 8.79679 0.495233 8.62977C0.328208 8.46274 0.234375 8.23621 0.234375 8C0.234375 7.76379 0.328208 7.53726 0.495233 7.37023C0.662258 7.20321 0.888792 7.10938 1.125 7.10938H7.0625H7.10938V7.0625V1.125C7.10938 0.888792 7.20321 0.662258 7.37023 0.495233C7.53726 0.328208 7.76379 0.234375 8 0.234375C8.23621 0.234375 8.46274 0.328208 8.62977 0.495233C8.79679 0.662258 8.89062 0.888792 8.89062 1.125V7.0625V7.10938H8.9375H14.875C15.1112 7.10938 15.3377 7.20321 15.5048 7.37023C15.6718 7.53726 15.7656 7.76379 15.7656 8C15.7656 8.23621 15.6718 8.46274 15.5048 8.62977C15.3377 8.79679 15.1112 8.89062 14.875 8.89062H8.9375Z"
            fill="#475569"
            stroke="#475569"
            stroke-width="0.09375"
          />
        </svg>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.41374 8.66374L2.16374 14.9137C1.98761 15.0899 1.74874 15.1888 1.49967 15.1888C1.2506 15.1888 1.01173 15.0899 0.83561 14.9137C0.65949 14.7376 0.560547 14.4987 0.560547 14.2497C0.560547 14.0006 0.65949 13.7617 0.83561 13.5856L6.42233 8.00045L0.837173 2.41374C0.749967 2.32653 0.680791 2.223 0.633596 2.10906C0.5864 1.99512 0.562109 1.873 0.562109 1.74967C0.562109 1.62635 0.5864 1.50422 0.633596 1.39028C0.680791 1.27634 0.749967 1.17282 0.837173 1.08561C0.924379 0.998405 1.02791 0.929229 1.14185 0.882034C1.25579 0.834838 1.37791 0.810547 1.50124 0.810547C1.62456 0.810547 1.74668 0.834838 1.86062 0.882034C1.97456 0.929229 2.07809 0.998405 2.1653 1.08561L8.4153 7.33561C8.50259 7.42281 8.57182 7.52638 8.619 7.6404C8.66619 7.75441 8.6904 7.87661 8.69026 8C8.69011 8.12339 8.66561 8.24553 8.61816 8.35943C8.57071 8.47333 8.50124 8.57674 8.41374 8.66374Z"
            fill="#CBD5E1"
          />
        </svg>
        <nuxt-link to="/dashboard/scholars"><span>Scholars</span></nuxt-link>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.41374 8.66374L2.16374 14.9137C1.98761 15.0899 1.74874 15.1888 1.49967 15.1888C1.2506 15.1888 1.01173 15.0899 0.83561 14.9137C0.65949 14.7376 0.560547 14.4987 0.560547 14.2497C0.560547 14.0006 0.65949 13.7617 0.83561 13.5856L6.42233 8.00045L0.837173 2.41374C0.749967 2.32653 0.680791 2.223 0.633596 2.10906C0.5864 1.99512 0.562109 1.873 0.562109 1.74967C0.562109 1.62635 0.5864 1.50422 0.633596 1.39028C0.680791 1.27634 0.749967 1.17282 0.837173 1.08561C0.924379 0.998405 1.02791 0.929229 1.14185 0.882034C1.25579 0.834838 1.37791 0.810547 1.50124 0.810547C1.62456 0.810547 1.74668 0.834838 1.86062 0.882034C1.97456 0.929229 2.07809 0.998405 2.1653 1.08561L8.4153 7.33561C8.50259 7.42281 8.57182 7.52638 8.619 7.6404C8.66619 7.75441 8.6904 7.87661 8.69026 8C8.69011 8.12339 8.66561 8.24553 8.61816 8.35943C8.57071 8.47333 8.50124 8.57674 8.41374 8.66374Z"
            fill="#CBD5E1"
          />
        </svg>
        <span class="capitalize text-primary">{{ activeName }}</span>
      </div>
      <div class="flex space-x-3">
        <base-button
          @click="showPerformanceTokenModal = true"
          styles="w-full font-bold"
          type="primary"
        >
          <div class="flex items-center space-x-2">
            <svg
              width="20"
              height="21"
              class="mr-2"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.357 5.20859C14.6937 4.37656 12.5 3.9375 10 3.9375C7.5 3.9375 5.30625 4.37656 3.64297 5.20859C1.92344 6.06797 0.9375 7.31328 0.9375 8.625V12.375C0.9375 13.6867 1.92344 14.932 3.64297 15.7914C5.30625 16.6234 7.50391 17.0625 10 17.0625C12.4961 17.0625 14.6937 16.6234 16.357 15.7914C18.0758 14.932 19.0625 13.6867 19.0625 12.375V8.625C19.0625 7.31328 18.0766 6.06797 16.357 5.20859ZM4.48203 6.88516C5.86562 6.19375 7.825 5.8125 10 5.8125C12.175 5.8125 14.1344 6.19375 15.518 6.88516C16.5477 7.4 17.1875 8.06719 17.1875 8.625C17.1875 9.18281 16.5477 9.85 15.518 10.3648C14.1344 11.0562 12.175 11.4375 10 11.4375C7.825 11.4375 5.86562 11.0562 4.48203 10.3648C3.45234 9.85 2.8125 9.18281 2.8125 8.625C2.8125 8.06719 3.45234 7.4 4.48203 6.88516ZM14.0625 14.6703C13.0426 14.9511 11.9943 15.1162 10.9375 15.1625V13.2875C11.9906 13.2445 13.037 13.1004 14.0625 12.857V14.6703ZM5.9375 12.8609C6.96296 13.1043 8.00944 13.2484 9.0625 13.2914V15.1664C8.00566 15.1202 6.95739 14.9551 5.9375 14.6742V12.8609ZM2.8125 12.375V11.5578C3.07853 11.7369 3.35594 11.8984 3.64297 12.0414C3.77891 12.1094 3.91953 12.1742 4.0625 12.2367V13.8828C3.28125 13.4094 2.8125 12.8523 2.8125 12.375ZM15.9375 13.8828V12.2367C16.0805 12.1742 16.2211 12.1094 16.357 12.0414C16.6441 11.8984 16.9215 11.7369 17.1875 11.5578V12.375C17.1875 12.8523 16.7188 13.4094 15.9375 13.8828Z"
                fill="white"
              />
            </svg>

            Assign Performance Token
          </div>
        </base-button>
        <base-button
          styles="w-full font-bold bg-white text-primary"
          type="primary"
          bgColor="#FFF1F2"
          textColor="#F43F5E"
          borderColor="#F43F5E"
          @click="deactivateScholar"
        >
          <div class="flex items-center space-x-2">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.875 3.75H1.125C0.87636 3.75 0.637903 3.84877 0.462087 4.02459C0.286272 4.2004 0.1875 4.43886 0.1875 4.6875C0.1875 4.93614 0.286272 5.1746 0.462087 5.35041C0.637903 5.52623 0.87636 5.625 1.125 5.625H1.4375V16.25C1.4375 16.6644 1.60212 17.0618 1.89515 17.3549C2.18817 17.6479 2.5856 17.8125 3 17.8125H13C13.4144 17.8125 13.8118 17.6479 14.1049 17.3549C14.3979 17.0618 14.5625 16.6644 14.5625 16.25V5.625H14.875C15.1236 5.625 15.3621 5.52623 15.5379 5.35041C15.7137 5.1746 15.8125 4.93614 15.8125 4.6875C15.8125 4.43886 15.7137 4.2004 15.5379 4.02459C15.3621 3.84877 15.1236 3.75 14.875 3.75ZM12.6875 15.9375H3.3125V5.625H12.6875V15.9375ZM3.9375 1.5625C3.9375 1.31386 4.03627 1.0754 4.21209 0.899587C4.3879 0.723772 4.62636 0.625 4.875 0.625H11.125C11.3736 0.625 11.6121 0.723772 11.7879 0.899587C11.9637 1.0754 12.0625 1.31386 12.0625 1.5625C12.0625 1.81114 11.9637 2.0496 11.7879 2.22541C11.6121 2.40123 11.3736 2.5 11.125 2.5H4.875C4.62636 2.5 4.3879 2.40123 4.21209 2.22541C4.03627 2.0496 3.9375 1.81114 3.9375 1.5625Z"
                fill="#F43F5E"
              />
            </svg>

            <span>Deactivate Scholar</span>
          </div>
        </base-button>
      </div>
    </div>

    <div class="mt-6">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="Performance" name="performance">
          <scholars-performance />
        </el-tab-pane>
        <el-tab-pane label="Scholar’s Details" name="scholar's details">
          <scholars-scholar-details />
        </el-tab-pane>
        <el-tab-pane label="Requests" name="requests"><scholars-request></scholars-request> </el-tab-pane>
      </el-tabs>
    </div>

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
          <img src="../../../assets/images/icons/delete.svg" alt="" />
        </div>
      </template>
    </common-action-dialog>

    <!-- Assign performance token -->
    <el-dialog v-model="showPerformanceTokenModal" title="" width="700">
      <div>
        <scholars-assign-performance-token @done="handlePerformanceCreationModal"></scholars-assign-performance-token>
      </div>
    </el-dialog>

    <common-action-dialog
      dialogTitle="Performance Token Successfully Created"
      dialogMessage="Deleting this scholar means you will lose all performance report and scholar will not be able to learn again on Xplorer."
      :openModal="openSuccessDialog"
      confirmButtonText="Delete"
      confirmButtonColor="#F43F5E"
      :onConfirm="handleDelete"
      :onCancel="handleCancel"
    >
      <template #icon>
        <div
          class="bg-red-50 rounded-full flex items-center justify-center font-bold text-base h-12 w-12"
        >
          <img src="../../../assets/images/icons/delete.svg" alt="" />
        </div>
      </template>
    </common-action-dialog>
  </div>
</template>

<script setup lang="ts">
const activeName = ref("performance");
import { useScholarStore } from "@/store/scholar";

const { handleError } = useErrorHandler();
const scholarStore = useScholarStore();
const route = useRoute();

const loading = ref(false)

definePageMeta({
  layout: "dashboard",
});

const fetchSingleScholar = async () => {
  const id = route.params.id as number
  try {
    loading.value = true;
    await scholarStore.getSingleScholar(id);
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
}

fetchSingleScholar()

const openDeleteDialog = ref(false);
const openSuccessDialog = ref(false)

const showPerformanceTokenModal = ref(false);
const handleDelete = () => {
  console.log("Deleting...");
  openDeleteDialog.value = false;
};

const handleCancel = () => {
  console.log("Cancel action triggered");
  openDeleteDialog.value = false;
};

const deactivateScholar = () => {
  openDeleteDialog.value = true;
};

const handlePerformanceCreationModal = async () => {
  await fetchSingleScholar()
  showPerformanceTokenModal.value = false
}
</script>

<style scoped></style>
