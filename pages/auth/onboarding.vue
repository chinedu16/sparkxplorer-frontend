<template>
  <div class="flex min-h-screen">
    <div class="w-1/2 h-screen">
      <img
        src="~/assets/images/illustrations/onboarding-frame.png"
        class="w-full h-screen"
        alt=""
      />
    </div>
    <div class="w-1/2 flex flex-col">
      <div class="flex-grow flex justify-center items-center">
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
            <h1 class="text-3xl font-extrabold">
              How Many Kids are You Looking to Enrol?
            </h1>

            <div class="mt-16 space-y-2">
              <div
                v-for="(kids, index) in numberOfKids"
                :key="index"
                @mouseover="handleHover(index, true)"
                @mouseleave="handleHover(index, false)"
                @click="handleClick(index)"
                :class="[
                  'border-2 cursor-pointer rounded-66 py-4 px-6 flex justify-between items-center',
                  { 'border-primary': kids.selected || kids.hovered },
                ]"
              >
                <div class="flex space-x-3 font-bold">
                  <img :src="`/icons/${kids.icon}.svg`" alt="" />
                  <h3>{{ kids.number }}</h3>
                </div>
                <img
                  v-if="kids.selected"
                  src="~/assets/images/icons/check-primary.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div v-if="formIndex === 2">
            <h1 class="text-3xl font-extrabold">
              Which topic do you want to explore first?
            </h1>
            <p class="mt-2 text-gray-one">
              Please choose one for now - you can always adjust this later.
            </p>

            <div class="mt-16 space-y-2">
              <div
                v-for="(topic, index) in topics"
                :key="index"
                @mouseover="handleTopicsHover(index, true)"
                @mouseleave="handleTopicsHover(index, false)"
                @click="handleTopicsClick(index)"
                :class="[
                  'border-2 cursor-pointer rounded-66 py-3 px-6 flex justify-between items-center',
                  { 'border-primary': topic.selected || topic.hovered },
                ]"
              >
                <div class="flex space-x-3 font-bold items-center">
                  <img :src="`/icons/${topic.icon}.svg`" alt="" />
                  <h3>{{ topic.number }}</h3>
                </div>
                <img
                  v-if="topic.selected"
                  src="~/assets/images/icons/check-primary.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div v-if="formIndex === 3">
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
                  @uploadedBase64="handleUploadedBase64"
                  @update:fileList="handleFileListUpdate"
                />
              </div>
            </div>
          </div>

          <el-form class="space-y-6 mt-10 w-full">
            <div class="flex justify-between items-center mt-6">
              <base-progress-indicator :count="4" :activeIndex="formIndex" />
              <div
                class="flex cursor-pointer items-center space-x-5 justify-center text-sm"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16343 13.5868C8.33955 13.763 8.4385 14.0018 8.4385 14.2509C8.4385 14.5 8.33955 14.7388 8.16343 14.915C7.98731 15.0911 7.74844 15.19 7.49937 15.19C7.2503 15.19 7.01143 15.0911 6.83531 14.915L0.585309 8.66496C0.497909 8.57786 0.428562 8.47437 0.381245 8.36041C0.333927 8.24646 0.30957 8.12428 0.30957 8.00089C0.30957 7.87751 0.333927 7.75533 0.381245 7.64138C0.428562 7.52742 0.497909 7.42393 0.585309 7.33683L6.83531 1.08683C7.01143 0.910711 7.2503 0.811768 7.49937 0.811768C7.74844 0.811768 7.98731 0.910711 8.16343 1.08683C8.33955 1.26295 8.4385 1.50182 8.4385 1.75089C8.4385 1.99997 8.33955 2.23884 8.16343 2.41496L2.57828 8.00011L8.16343 13.5868Z"
                    fill="#475569"
                  />
                </svg>
                <span class="cursor-pointer" @click="previousForm"> Back </span>
                <span @click="nextForm" class="text-primary cursor-pointer">
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

import { useScholarStore } from "@/store/scholar";

const router = useRouter();
const scholarStore = useScholarStore();

const base64File = ref("");

const handleUploadedBase64 = (base64String: string) => {
  base64File.value = base64String;
};

definePageMeta({
  layout: "auth",
});

const handleFileListUpdate = (fileList: any) => {
  console.log("Files:", fileList);
};

const formIndex = ref(1);
const numberOfKids = ref([
  {
    icon: "user-2",
    number: "1-2",
    selected: false,
  },
  {
    icon: "user-4",
    number: "3-4",
    selected: false,
  },
  {
    icon: "more",
    number: "More",
    selected: false,
  },
]);

const topics = ref([
  {
    icon: "maths",
    number: "Mathematics",
    selected: false,
  },
  {
    icon: "science",
    number: "Science & Engineering",
    selected: false,
  },
  {
    icon: "arts",
    number: "Language Arts",
    selected: false,
  },
  {
    icon: "globe",
    number: "Social Studies",
    selected: false,
  },
]);

const formData = ref({
  firstname: "",
  lastname: "",
  email: "",
  grade: "",
  date_of_birth: "",
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

// handling for kids
const handleHover = (index: number, hover: boolean) => {
  numberOfKids.value[index].hovered = hover;
};

const handleClick = (index: number) => {
  numberOfKids.value.forEach((kid, i) => {
    kid.selected = i === index;
  });
};

// handling for topics form
const handleTopicsHover = (index: number, hover: boolean) => {
  topics.value[index].hovered = hover;
};

const handleTopicsClick = (index: number) => {
  topics.value.forEach((kid, i) => {
    kid.selected = i === index;
  });
};

const nextForm = async () => {
  if (formIndex.value === 1) {
    const selectedKid = numberOfKids.value.find((kid) => kid.selected);
    if (!selectedKid) {
      ElNotification({
        title: "Missing Information",
        message: "Please select how many kids you want to enroll.",
        type: "error",
      });
      return;
    }
  }

  if (formIndex.value === 2) {
    const selectedTopic = topics.value.find((topic) => topic.selected);
    if (!selectedTopic) {
      ElNotification({
        title: "Missing Information",
        message: "Please select a topic to explore.",
        type: "error",
      });
      return;
    }
  }

  if (formIndex.value === 3) {
    const isValid = await handleSubmit(async (formData) => {
      try {
        const payload = {
          first_name: formData.firstname,
          last_name: formData.lastname,
          email: formData.email,
          date_of_birth: formData.date_of_birth,
          grade_id: formData.grade,
          picture_url: base64File.value,
        };

        const response = await scholarStore.createScholar(payload);
        if (response?.data.success) {
          router.push("/auth/subscription");
        }
        router.push("/auth/subscription");
      } catch (error) {
        console.error("API call failed:", error);
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

const previousForm = () => {
  if (formIndex.value > 1) {
    formIndex.value--;
  }
};
</script>

<style scoped></style>
