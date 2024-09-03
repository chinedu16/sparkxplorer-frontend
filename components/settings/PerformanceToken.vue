<template>
  <div>
    <div class="flex justify-between items-center">
      <div>
        <h2 class="font-bold text-xl">Performance Token</h2>
        <p class="text-gray-one">You can manage Performance Token here</p>
      </div>
      <base-button styles="w-full font-bold" size="large" type="primary">
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

          Create New Performance Token
        </div>
      </base-button>
    </div>
    <div class="border mt-8 rounded-3xl">
      <el-table
        class="border-r rounded-3xl"
        :data="tableData"
        style="width: 100%"
        @row-click="handleRowClick"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="file" label="File Name" />
        <el-table-column prop="subjects" label="Subjects">
          <template #default="scope">
            <div>
              <div
                class="text-sm py-1 mb-2 px-2 w-fit font-semibold text-primary bg-purple-one rounded-full"
                v-for="i in scope.row.subjects"
              >
                {{ i }}
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
                {{ scope.row.target }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="Status">
          <template #default="scope">
            <div
              :class="{
                'bg-yellow-400': scope.row.status === 'pending',
                'bg-green-400': scope.row.status === 'achieved',
                'bg-red-400': scope.row.status === 'missed',
                'bg-gray-300': !['pending', 'achieved', 'missed'].includes(
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
            <img class="w-10 h-10" :src="scope.row.scholar" alt="" />
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
        <el-pagination background layout="prev, pager, next" :total="1000" />
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
            class="capitalize border text-sm py-1 mb-4 px-2 w-fit font-semibold rounded-full"
          >
            {{ selectedRow?.action }}
          </div>
          <hr class="mb-4" />
          <div
            :class="{
              'border-yellow-400 bg-yellow-50 text-yellow-400':
                selectedRow?.status === 'pending',
              'border-green-400  bg-green-50 text-green-400':
                selectedRow?.status === 'achieved',
              'border-red-400  bg-red-50 text-red-400':
                selectedRow?.status === 'missed',
              'border-gray-300  bg-gray-50 text-gray-300': ![
                'pending',
                'achieved',
                'missed',
              ].includes(selectedRow?.status),
            }"
            class="border mb-4 p-2 rounded-2xl font-bold"
          >
            {{
              selectedRow?.status === "pending"
                ? "Amanda cortez is yet to meet the target set."
                : selectedRow?.status === "achieved"
                ? "Amanda cortez has met the target. And performance token provided"
                : "Amanda cortez has met the target. Please fulfil your performance token"
            }}
          </div>
          <div v-if="selectedRow.status !== 'achieved'">
            <base-input
              name="firstname"
              label="Title (e.g. Get 80% in Maths question in June)"
              type="text"
              placeholder="Mathematic Challenge - July"
              icon-prefix="user"
              v-model:value="formData.challenge"
            />
            <base-input
              name="description"
              label="Description"
              type="textarea"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              icon-prefix="user"
              v-model:value="formData.description"
            />
            <base-input
              name="token"
              label="Token Reward"
              type="text"
              placeholder="Movie Night - A special movie night with the family."
              icon-prefix="user"
              v-model:value="formData.token"
            />
            <base-input
              name="firstname"
              label="All subjects"
              type="text"
              placeholder="All subjects"
              icon-prefix="user"
              v-model:value="formData.subjects"
            />
            <base-input
              name="performance"
              label="Performance Conditions"
              type="text"
              placeholder="90%-100% Grade"
              icon-prefix="user"
              v-model:value="formData.performance"
            />
            <base-input
              name="reward"
              label="Reward Deadline"
              type="text"
              placeholder="07 / 10 / 2024"
              icon-prefix="user"
              v-model:value="formData.reward"
            />
          </div>
          <div v-else>
            <div class="text-sm font-bold mb-2">Evidence</div>
            <div class="p-2 border rounded-2xl">
                <img class="rounded-2xl h-24 " src="../../assets/images/illustrations/login-screen-1.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="mt-8 flex space-x-2">
            <div :class="`${selectedRow?.status === 'achieved' ? 'w-full' : 'w-1/2'}`" >
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
            <div v-if="selectedRow?.status !== 'achieved'" class="w-1/2">
              <base-button
                @click="showDelete = false"
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
          Lorem ipsum dolor sit amet consectetur. Tempor iaculis enim ridiculus
          facilisis mattis id ante. Porttitor leo tellus ut dolor in ac. Tempor
          sollicitudin ipsum duis arcu id id sagittis.
        </p>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="mt-8 justify-end flex space-x-2">
            <base-button
              styles="w-full font-bold bg-white text-primary"
              type="primary"
              bgColor="#FFFFFF"
              textColor="#475569"
              borderColor="#CBD5E1"
            >
              Cancel
            </base-button>
            <base-button
              @click="showDelete = false"
              styles="w-fit font-bold"
              type="primary"
              bgColor="#F43F5E"
              textColor="#ffffff"
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
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    file: "Mathematic Challenge - July",
    subjects: ["Mathematics", "Science", "Social Studies"],
    target: "90-100%",
    status: "pending",
    date: "2025/18/16",
    scholar: "/icons/avatar.png",
    action: "unfulfilled",
  },
  {
    file: "Mathematic Challenge - July",
    subjects: ["Social Studies"],
    target: "90-100%",
    status: "achieved",
    date: "2025/18/16",
    scholar: "/icons/avatar.png",
    action: "unfulfilled",
  },
  {
    file: "Mathematic Challenge - July",
    subjects: ["All"],
    target: "90-100%",
    status: "missed",
    date: "2025/18/16",
    scholar: "/icons/avatar.png",
    action: "",
  },
  {
    file: "Mathematic Challenge - July",
    subjects: ["Social Studies"],
    target: "90-100%",
    status: "achieved",
    date: "2025/18/16",
    scholar: "/icons/avatar.png",
    action: "fulfilled",
  },
];

const dialogVisible = ref(false);
const showDelete = ref(false);
const selectedRow = ref<any>(null);
const formData = ref({
  reward: "",
  performance: "",
  subjects: "",
  token: "",
  description: "",
  challenge: "",
});

const handleRowClick = (row: any) => {
  selectedRow.value = row;
  dialogVisible.value = true;
};

const handleClose = () => {
  dialogVisible.value = false;
};

const tableRowClassName = () => {
  return "table-row";
};
</script>

<style scoped>
.table-row:hover {
  cursor: pointer;
}
</style>
