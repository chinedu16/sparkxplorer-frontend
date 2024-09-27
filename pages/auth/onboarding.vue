<template>
  <div class="flex min-h-screen">
    <!-- Left Section: Stagnant -->
    <div class="w-1/2 h-screen fixed">
      <img
        src="~/assets/images/illustrations/onboarding-frame.png"
        class="w-full h-screen"
        alt=""
      />
    </div>

    <!-- Right Section: Scrollable -->
    <div class="w-1/2 ml-auto justify-between flex flex-col overflow-y-auto">
      <div class="flex-grow py-12 flex justify-center items-center">
        <!-- form one  -->
        <div class="flex w-4/6 flex-col">
          <div class="mb-6">
            <img
              src="~/assets/images/icons/spark-explorer-logo.svg"
              alt="sparkexplorer-logo"
              class=""
            />
          </div>

          <div v-if="formIndex === 1">
            <p class="mt-2 text-gray-one">
              We’ll fine tune our features to be personalized for you.
            </p>
            <h1 class="text-3xl font-extrabold">Add a Scholar</h1>

            <div class="mt-8 h-3/6 space-y-6">
              <base-input
                name="firstname"
                label="First Name"
                type="text"
                placeholder="Enter first name"
                icon-prefix="user"
                v-model:value="formData.firstname"
              />
              <base-input
                name="lastname"
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                icon-prefix="user"
                v-model:value="formData.lastname"
              />

              <base-input
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter Email Address"
                icon-prefix="email"
                v-model:value="formData.email"
              />

              <base-select
                v-model="formData.grade"
                name="grade"
                :options="options"
                label="Grade"
                placeholder="Select Grade"
              />

              <base-date-picker
                v-model="formData.date_of_birth"
                name="date_of_birth"
                label="Dirth of Birth"
                placeholder="Select Date of Birth"
                type="date"
              />

              <div>
                <div class="mb-2 text-sm font-medium">Scholar Avatar</div>
                <base-file-upload
                  name="uploaded_files"
                  @uploadedUrl="handleUploadedUrl"
                  @update:fileList="handleFileListUpdate"
                />
              </div>
            </div>
          </div>

          <el-form class="space-y-6 mt-10 w-full">
            <div class="flex justify-end items-center mt-6">
              <div
                class="flex cursor-pointer items-center space-x-5 justify-center text-sm"
              >
                <span
                  @click="nextForm"
                  class="text-primary text-lg font-semibold cursor-pointer"
                >
                  Continue
                </span>
              </div>
            </div>
          </el-form>
        </div>
      </div>

      <layouts-footer class="mt-auto px-5"></layouts-footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
const { handleError } = useErrorHandler();
import { useScholarStore } from "@/store/scholar";

const scholarStore = useScholarStore();

const base64File = ref("");


const handleUploadedUrl = (url: string) => {
  formData.value.picture_url = url;
  base64File.value = url
};

definePageMeta({
  layout: "auth",
});

const handleFileListUpdate = (fileList: any) => {
  console.log("Files:", fileList);
};

const formIndex = ref(1);

const formData = ref({
  firstname: "",
  lastname: "",
  email: "",
  grade: "",
  date_of_birth: "",
  picture_url: "",
  uploaded_files: [],
});

onMounted(async () => {
  await scholarStore.getAllGrades();
});

const options = computed(() => {
  return scholarStore.getGrades?.map((grade: { id: number; name: string }) => ({
    value: grade.id,
    label: grade.name,
  }));
});

const validationSchema = yup.object({
  firstname: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name cannot exceed 50 characters"),
  lastname: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name cannot exceed 50 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
  grade: yup.string().required("Grade is required"),
  date_of_birth: yup.string().required("Date of birth is required"),
  uploaded_files: yup
    .array()
    .min(1, "At least one file is required")
    .required(),
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: formData.value,
});

const nextForm = async () => {
  if (formIndex.value === 1) {
    const isValid = await handleSubmit(async (formData) => {
      try {
        const payload = {
          first_name: formData.firstname,
          last_name: formData.lastname,
          email: formData.email,
          date_of_birth: formData.date_of_birth,
          grade_id: formData.grade,
          picture_url: base64File.value || formData.picture_url,
        };

        const response = await scholarStore.createScholar(payload);
        if (response?.data.success) {
          navigateTo("/auth/subscription");
        }

      } catch (error) {
        handleError(error);
        return false;
      }
    })().catch(() => false);

    if (!isValid) {
      return;
    }
  } else {
    formIndex.value++;
  }
};
</script>

<style scoped></style>
