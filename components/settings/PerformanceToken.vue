<template>
  <div>
    <div class="flex justify-between items-center">
      <div>
        <h2 class="font-bold text-xl">Performance Token</h2>
        <p class="text-gray-one">You can manage Performance Token here</p>
      </div>
    </div>
    <div class="border mt-8 rounded-3xl">
      <el-table
        class="border-r rounded-3xl cursor-pointer"
        :data="tableData"
        style="width: 100%"
        @row-click="handleRowClick"
        :row-class-name="tableRowClassName"
        v-loading="loading"
      >
        <el-table-column prop="file" label="File Name" />
        <el-table-column prop="subjects" label="Subjects">
          <template #default="scope">
            <div>
              <div
                class="text-sm py-1 mb-2 px-2 w-fit font-semibold text-primary bg-purple-one rounded-full"
                v-for="i in scope.row.subjects"
              >
                {{ i.subject.name }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="target" label="Performance Target">
          <template #default="scope">
            <div>
              <div
                class="text-sm py-1 mb-2 px-2 w-fit font-semibold text-primary bg-purple-one rounded-full"
              >
                {{ scope.row.min }} - {{ scope.row.max }}%
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="Status">
          <template #default="scope">
            <div
              :class="{
                'bg-yellow-400': scope.row.status === 'pending',
                'bg-green-400': scope.row.status === 'fulfilled',
                'bg-red-400': scope.row.status === 'missed',
                'bg-gray-300': !['pending', 'fulfilled', 'missed'].includes(
                  scope.row.status
                ), // Default or unknown status
              }"
              class="capitalize text-sm py-1 mb-2 px-2 w-fit font-semibold text-white rounded-full"
            >
              {{ scope.row.status }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="Due Date" />
        <el-table-column prop="scholar" label="Scholar">
          <template #default="scope">
            <div v-for="i in scope.row.scholar">
              <nuxt-link :to="`/dashboard/scholars/${i.scholar_id}`">
                <img
                  class="w-10 h-10"
                  src="../../assets/images/illustrations/avatar.png"
                  alt=""
                />
              </nuxt-link>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="action" label="Fulfilment">
          <template #default="scope">
            <div
              :class="{
                'border-yellow-400 text-yellow-400':
                  scope.row.action === 'unfulfilled',
                'border-green-400 text-green-400':
                  scope.row.action === 'fulfilled',
                'border-gray-300 text-gray-300': ![
                  'unfulfilled',
                  'fulfilled',
                ].includes(scope.row.action),
              }"
              class="capitalize border text-sm py-1 mb-2 px-2 w-fit font-semibold rounded-full"
            >
              {{ scope.row.action }}
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="px-8 flex justify-end py-6">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :page-size="per_page"
          v-model:current-page="page"
          :total="performanceStore.getTotal"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="" width="800">
      <div class="">
        <h3 class="text-3xl font-black text-gray-two mb-4">
          Performance Token
        </h3>
        <div>
          <div
            :class="{
              'border-yellow-400 text-yellow-400':
                selectedRow?.action === 'unfulfilled',
              'border-green-400 text-green-400':
                selectedRow?.action === 'fulfilled',
              'border-gray-300 text-gray-300': ![
                'unfulfilled',
                'fulfilled',
              ].includes(selectedRow?.action),
            }"
            class="capitalize border text-sm py-2 mb-4 px-2 w-fit font-semibold rounded-full"
          >
            {{ selectedRow?.action }}
          </div>
          <hr class="mb-4" />
          <div
            :class="{
              'border-yellow-400 bg-yellow-50 text-yellow-400':
                selectedRow?.status === 'pending',
              'border-green-400  bg-green-50 text-green-400':
                selectedRow?.status === 'fulfilled',
              'border-red-400  bg-red-50 text-red-400':
                selectedRow?.status === 'missed',
              'border-gray-300  bg-gray-50 text-gray-300': ![
                'pending',
                'fulfilled',
                'missed',
              ].includes(selectedRow?.status),
            }"
            class="border mb-4 p-2 rounded-2xl font-bold"
          >
            {{
              selectedRow?.status === "pending"
                ? `${selectedRow.scholarFirstName} ${selectedRow.scholarLastName} is yet to meet the target set.`
                : selectedRow?.status === "fulfilled"
                ? `${selectedRow.scholarFirstName} ${selectedRow.scholarLastName} has met the target. And performance token provided`
                : `${selectedRow.scholarFirstName} ${selectedRow.scholarLastName} has met the target. Please fulfil your performance token`
            }}
          </div>
          <div v-if="selectedRow.status !== 'fulfilled'">
            <base-input
              name="firstname"
              label="Title (e.g. Get 80% in Maths question in June)"
              type="text"
              placeholder="Mathematic Challenge - July"
              v-model="formData.challenge"
            />
            <base-input
              name="description"
              label="Description"
              type="textarea"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              v-model="formData.description"
            />
            <base-input
              name="token"
              label="Token Reward"
              type="text"
              placeholder="Movie Night - A special movie night with the family."
              v-model="formData.token"
            />
            <base-input
              name="firstname"
              label="All subjects"
              type="text"
              placeholder="All subjects"
              v-model="formData.subjects"
            />
            <base-input
              name="performance"
              label="Performance Conditions"
              type="text"
              placeholder="90%-100% Grade"
              v-model="formData.performance"
            />
            <base-input
              name="reward"
              label="Reward Deadline"
              type="text"
              placeholder="07 / 10 / 2024"
              v-model="formData.reward"
            />
          </div>
          <div v-else>
            <div class="text-sm font-bold mb-2">Evidence</div>
            <div class="p-2 border rounded-2xl space-x-3 flex">
              <img
                v-for="image in selectedRow.fulfilment_evidence"
                class="rounded-2xl h-24 w-20"
                :src="image"
                @click="selectedImage = image"
                alt=""
              />
            </div>

            <!-- Display the selected image at the bottom -->
            <div v-if="selectedImage" class="mt-4">
              <h3 class="text-lg font-semibold">Selected Evidence:</h3>
              <img
                :src="selectedImage"
                alt="Selected Evidence"
                class="rounded-2xl mt-3 object-cover w-full max-h-60"
              />
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="mt-8 flex space-x-2">
            <div
              :class="`${
                selectedRow?.status === 'fulfilled' ? 'w-full' : 'w-1/2'
              }`"
            >
              <base-button
                styles="w-full font-bold bg-white text-primary"
                type="primary"
                bgColor="#FFFFFF"
                textColor="#F43F5E"
                borderColor="#F43F5E"
                @click="showDelete = true"
              >
                Delete Performance Token
              </base-button>
            </div>
            <div class="w-1/2" v-if="selectedRow?.status !== 'fulfilled'">
              <base-button
                @click="showFufillmentEvidenceModal = true"
                styles="w-full font-bold"
                type="primary"
              >
                Fullfill
              </base-button>
            </div>
          </div>
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="showDelete" title="" width="500">
      <div class="">
        <div
          class="bg-red-50 text-primary rounded-full flex items-center justify-center font-bold text-base h-12 w-12"
        >
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.25 4.5H1.75C1.45163 4.5 1.16548 4.61853 0.954505 4.8295C0.743526 5.04048 0.625 5.32663 0.625 5.625C0.625 5.92337 0.743526 6.20952 0.954505 6.4205C1.16548 6.63147 1.45163 6.75 1.75 6.75H2.125V19.5C2.125 19.9973 2.32254 20.4742 2.67417 20.8258C3.02581 21.1775 3.50272 21.375 4 21.375H16C16.4973 21.375 16.9742 21.1775 17.3258 20.8258C17.6775 20.4742 17.875 19.9973 17.875 19.5V6.75H18.25C18.5484 6.75 18.8345 6.63147 19.0455 6.4205C19.2565 6.20952 19.375 5.92337 19.375 5.625C19.375 5.32663 19.2565 5.04048 19.0455 4.8295C18.8345 4.61853 18.5484 4.5 18.25 4.5ZM15.625 19.125H4.375V6.75H15.625V19.125ZM5.125 1.875C5.125 1.57663 5.24353 1.29048 5.4545 1.0795C5.66548 0.868526 5.95163 0.75 6.25 0.75H13.75C14.0484 0.75 14.3345 0.868526 14.5455 1.0795C14.7565 1.29048 14.875 1.57663 14.875 1.875C14.875 2.17337 14.7565 2.45952 14.5455 2.6705C14.3345 2.88147 14.0484 3 13.75 3H6.25C5.95163 3 5.66548 2.88147 5.4545 2.6705C5.24353 2.45952 5.125 2.17337 5.125 1.875Z"
              fill="#F43F5E"
            />
          </svg>
        </div>
        <h3 class="mt-6 font-bold text-lg text-gray-two">
          Delete performance token?
        </h3>
        <p class="text-gray-one">
          Are you sure you want to delete the performance token?
        </p>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="mt-8 justify-end flex space-x-2">
            <base-button
              @click="showDelete = false"
              styles="w-full font-bold bg-white text-primary"
              type="primary"
              bgColor="#FFFFFF"
              textColor="#475569"
              borderColor="#CBD5E1"
            >
              Cancel
            </base-button>
            <base-button
              styles="w-fit font-bold"
              type="primary"
              bgColor="#F43F5E"
              textColor="#ffffff"
              :loading="isDeleting"
              @click="handleDeletePerformanceToken"
              borderColor="#F43F5E"
            >
              <svg
                width="16"
                height="18"
                class="mr-2"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.875 3.75H1.125C0.87636 3.75 0.637903 3.84877 0.462087 4.02459C0.286272 4.2004 0.1875 4.43886 0.1875 4.6875C0.1875 4.93614 0.286272 5.1746 0.462087 5.35041C0.637903 5.52623 0.87636 5.625 1.125 5.625H1.4375V16.25C1.4375 16.6644 1.60212 17.0618 1.89515 17.3549C2.18817 17.6479 2.5856 17.8125 3 17.8125H13C13.4144 17.8125 13.8118 17.6479 14.1049 17.3549C14.3979 17.0618 14.5625 16.6644 14.5625 16.25V5.625H14.875C15.1236 5.625 15.3621 5.52623 15.5379 5.35041C15.7137 5.1746 15.8125 4.93614 15.8125 4.6875C15.8125 4.43886 15.7137 4.2004 15.5379 4.02459C15.3621 3.84877 15.1236 3.75 14.875 3.75ZM12.6875 15.9375H3.3125V5.625H12.6875V15.9375ZM3.9375 1.5625C3.9375 1.31386 4.03627 1.0754 4.21209 0.899587C4.3879 0.723772 4.62636 0.625 4.875 0.625H11.125C11.3736 0.625 11.6121 0.723772 11.7879 0.899587C11.9637 1.0754 12.0625 1.31386 12.0625 1.5625C12.0625 1.81114 11.9637 2.0496 11.7879 2.22541C11.6121 2.40123 11.3736 2.5 11.125 2.5H4.875C4.62636 2.5 4.3879 2.40123 4.21209 2.22541C4.03627 2.0496 3.9375 1.81114 3.9375 1.5625Z"
                  fill="white"
                />
              </svg>

              Delete
            </base-button>
          </div>
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="showPerformanceTokenModal" title="" width="700">
      <div>
        <scholars-assign-performance-token
          @done="handlePerformanceCreationModal"
        ></scholars-assign-performance-token>
      </div>
    </el-dialog>

    <el-dialog v-model="showFufillmentEvidenceModal" title="" width="700">
      <div class="">
        <h3 class="text-3xl font-black text-gray-two mb-4">
          Evidence of fullfilment
        </h3>
        <div>
          <base-file-upload
            name="uploaded_files"
            @uploadedUrl="handleUploadedUrl"
          />
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="mt-8 justify-end flex space-x-2">
            <base-button
              @click="showDelete = false"
              styles="w-full font-bold bg-white text-primary"
              type="primary"
              bgColor="#FFFFFF"
              textColor="#475569"
              borderColor="#CBD5E1"
            >
              Cancel
            </base-button>
            <base-button
              styles="w-fit font-bold"
              type="primary"
              bgColor="#4F46E5"
              textColor="#ffffff"
              :loading="isFufilling"
              @click="handleFufillingPerformanceToken"
              borderColor="#4F46E5"
            >
              Submit
            </base-button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const { handleError } = useErrorHandler();
import { usePerformanceStore } from "@/store/performance";
const { formatDate } = useDateFormatter();

const performanceStore = usePerformanceStore();

const page = ref(1);
const per_page = ref(10);
const loading = ref(true);
const dialogVisible = ref(false);
const showDelete = ref(false);
const isFufilling = ref(false);
const showFufillmentEvidenceModal = ref(false);
const isDeleting = ref(false);
const showPerformanceTokenModal = ref(false);
const selectedRow = ref<any>(null);
const base64File = ref<string[]>([]);
const selectedImage = ref<string | null>(null);

const formData = ref({
  reward: "",
  performance: "",
  subjects: "",
  token: "",
  description: "",
  challenge: "",
});

const tableData = computed(() => {
  // Start with the original mapped data
  const data = performanceStore.getPerformanceToken.map((token: any) => ({
    ...token,
    id: token.id,
    file: token.title,
    status: token.fulfilment_status,
    target: token.performance_grade_id,
    min: token.grade.min,
    max: token.grade.max,
    action: token.fulfilled_at ? "fulfilled" : "unfulfilled",
    date: formatDate(token.expected_fulfilment_date),
    subjects: token.subjects,
    scholar: token.scholars,
    scholarFirstName: token.scholars[0].scholar.first_name,
    scholarLastName: token.scholars[0].scholar.last_name,
  }));

  // Create the additional object
  const additionalObject = {
    id: "custom-id", // You can set a unique ID or generate one
    file: "Custom Token",
    status: "fulfilled",
    target: "Custom Target", // Set this as needed
    min: 0, // Set as appropriate
    max: 100, // Set as appropriate
    action: "fulfilled",
    date: "September 20. 2025", // Set as appropriate
    subjects: [], // Add any required subjects
    scholar: [], // Add any required scholars
    scholarFirstName: "John", // Set as needed
    scholarLastName: "Doe", // Set as needed
  };

  // Return the concatenated array
  return [...data, additionalObject];
});

const handlePerformanceCreationModal = async () => {
  await fetchPerformanceToken();
  showPerformanceTokenModal.value = false;
};

const handleDeletePerformanceToken = async () => {
  try {
    isDeleting.value = true;
    const response = await performanceStore.deletePerformanceToken(
      selectedRow.value.id
    );
    if (!response?.error) {
      showDelete.value = false;
      dialogVisible.value = false;
      fetchPerformanceToken();
    }
  } catch (error) {
    handleError(error);
  } finally {
    isDeleting.value = false;
  }
};

const handleFufillingPerformanceToken = async () => {
  try {
    const payload = {
      fulfilment_evidence: base64File.value,
    };
    isFufilling.value = true;
    const response = await performanceStore.fufilPerformanceToken(
      selectedRow.value.id,
      payload
    );
    if (!response?.error) {
      showFufillmentEvidenceModal.value = false;
      dialogVisible.value = false;
      fetchPerformanceToken();
    }
  } catch (error) {
    handleError(error);
  } finally {
    isFufilling.value = false;
  }
};

const handleUploadedUrl = (url: string) => {
  isFufilling.value = true;
  base64File.value.push(url);
  isFufilling.value = false;
};

const handleRowClick = (row: any) => {
  selectedRow.value = row;
  dialogVisible.value = true;
  console.log(row);
  formData.value = {
    reward: row.date,
    performance: `${row.min} - ${row.max}%`,
    subjects: row.subjects.map((items: any) => {
      return items.subject.name;
    }),
    token: row.reward.name,
    description: row.description,
    challenge: row.file,
  };
};

const tableRowClassName = () => {
  return "table-row";
};

const fetchPerformanceToken = async () => {
  try {
    loading.value = true;
    const payload = {
      page: page.value,
      per_page: per_page.value,
    };
    await performanceStore.getAllPerformanceToken(payload);
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

const handleCurrentChange = (currentPage: number) => {
  page.value = currentPage;
  fetchPerformanceToken();
};

fetchPerformanceToken();
</script>

<style scoped>
.table-row:hover {
  cursor: pointer;
}
</style>
