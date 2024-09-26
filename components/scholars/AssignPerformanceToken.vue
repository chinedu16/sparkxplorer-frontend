<template>
  <div class="mt-3">
    <h1 class="text-3xl font-extrabold">Create a New Performance Token</h1>
    <p class="mt-2 text-gray-one">
      We’ll fine tune our features to be personalized for you.
    </p>
    <div class="mt-8 h-3/6 space-y-6">
      <base-input
        name="firstname"
        label="Title (e.g. Get 80% in Maths question in June)"
        type="text"
        placeholder="Performance token title"
        icon-prefix="user"
        v-model:value="formData.performanceTitle"
      />
      <base-input
        name="lastname"
        label="Description"
        type="text"
        placeholder="Describe what this token is for and what the scholar needs to achieve to redeem it."
        icon-prefix="user"
        v-model:value="formData.description"
      />

      <base-select
        v-model="formData.tokenRewards"
        name="grade"
        :options="tokenAwards"
        label="Token Reward"
        placeholder="Select Token Reward"
      />

      <base-select
        v-model="formData.subjects"
        name="grade"
        :options="tokenAwards"
        label="Subject"
        placeholder="Select Subject"
      />

      <base-select
        v-model="formData.performanceConditions"
        name="grade"
        :options="tokenAwards"
        label="Performance Conditions"
        placeholder="Select Performance Conditions"
      />

      <base-date-picker
        v-model="formData.rewardDeadline"
        name="date_of_birth"
        label="Reward Deadline"
        placeholder="Select Reward Deadline"
        type="date"
      />
    </div>

    <div class="mt-8">
      <base-button
        @click.prevent="onSubmit"
        styles="w-full font-bold"
        size="large"
        type="primary"
        :loading="loading"
      >
        Create Performance Token
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const { handleError } = useErrorHandler();
import { useScholarStore } from "@/store/scholar";
const emit = defineEmits(["done"]);

const scholarStore = useScholarStore();

const loading = ref(false);

const formData = ref({
  performanceTitle: "",
  description: "",
  tokenRewards: "",
  subjects: "",
  performanceConditions: "",
  rewardDeadline: "",
});

onMounted(async () => {
  await scholarStore.getAllGrades();
});

const tokenAwards = ref([
  {
    value: "Movie Night - A special movie night with the family.",
    label: "Movie Night - A special movie night with the family.",
  },
  {
    value: "Movie Night - A special movie night with the family.",
    label: "Movie Night - A special movie night with the family.",
  },
  {
    value: "Movie Night - A special movie night with the family.",
    label: "Movie Night - A special movie night with the family.",
  },
]);


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

const onSubmit = handleSubmit(async () => {
  const payload = {};

  try {
    loading.value = true;
    const response = await scholarStore.createScholar(payload);
    if (response?.data.success) {
      emit("done");
    }
  } catch (error) {
    handleError(error);
    return false;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
