<template>
  <div class="mt-3">
    <h1 class="text-3xl font-extrabold">Create a New Performance Token</h1>
    <p class="mt-2 text-gray-one">
      We’ll fine tune our features to be personalized for you.
    </p>
    <div class="mt-8 h-3/6 space-y-6">
      <base-input
        name="performanceTitle"
        label="Title (e.g. Get 80% in Maths question in June)"
        type="text"
        placeholder="Performance token title"
        v-model="formData.performanceTitle"
      />
      <base-input
        name="description"
        label="Description"
        type="text"
        placeholder="Describe what this token is for and what the scholar needs to achieve to redeem it."
        v-model="formData.description"
      />

      <base-select
        v-model="formData.tokenRewards"
        name="tokenRewards"
        :options="rewardTokens"
        label="Token Reward"
        placeholder="Select Token Reward"
      />

      <base-select
        v-model="formData.subjects"
        name="subjects"
        :options="subjectList"
        label="Subject"
        placeholder="Select Subject"
      />

      <base-select
        v-model="formData.performanceConditions"
        name="performanceConditions"
        :options="performanceConditions"
        label="Performance Conditions"
        placeholder="Select Performance Conditions"
      />

      <base-date-picker
        v-model="formData.rewardDeadline"
        name="rewardDeadline"
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
import { useScholarStore } from "@/store/scholar";
import { usePerformanceStore } from "@/store/performance";
import { ref, onMounted } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const { handleError } = useErrorHandler();

const emit = defineEmits(["done"]);

const route = useRoute();
const scholarStore = useScholarStore();
const performanceStore = usePerformanceStore();

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
  loading.value = true;
  await scholarStore.getAllGrades();
  await performanceStore.getPerformanceReward();
  await performanceStore.getPerformanceGrade();
  await performanceStore.getAllSubjects();
  loading.value = false;
});

const rewardTokens = computed(() => {
  return performanceStore.getRewardsData?.map(
    (grade: { id: number; name: string }) => ({
      value: grade.id,
      label: grade.name,
    })
  );
});

const performanceConditions = computed(() => {
  return performanceStore.getPerformersData?.map(
    (grade: { id: number; min: number; max: number }) => ({
      value: grade.id,
      label: `${grade.min}%-${grade.max}% Grade`,
    })
  );
});

const subjectList = computed(() => {
  return performanceStore.getSubjectsData?.map(
    (grade: { id: number; name: string }) => ({
      value: grade.id,
      label: grade.name,
    })
  );
});

const validationSchema = yup.object({
  performanceTitle: yup
    .string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters")
    .max(50, "Title cannot exceed 50 characters"),
  description: yup
    .string()
    .required("Description is required")
    .min(2, "Description must be at least 2 characters")
    .max(225, "Description cannot exceed 50 characters"),
  tokenRewards: yup.string().required("Reward Token is required"),
  rewardDeadline: yup.string().required("Reward Deadline is required"),
  performanceConditions: yup
    .string()
    .required("Performance Conditions is required"),
  subjects: yup.string().required("Subjects is required"),
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: formData.value,
});

const onSubmit = handleSubmit(async (values) => {
  console.log(values);
  console.log(route);
  const scholarId = Number(route.params.id);
  const payload = {
    title: values.performanceTitle,
    description: values.description,
    subjects: [values.subjects],
    scholar_ids: [scholarId],
    performance_grade_id: values.performanceConditions,
    performance_reward_id: values.tokenRewards,
    expected_fulfilment_date: values.rewardDeadline,
  };
  try {
    loading.value = true;
    const response = await performanceStore.createPerformanceToken(payload);
    if (response?.data.success) {
      ElNotification({
        title: "Success",
        message: `Performance token was created successfully`,
        type: "success",
      });
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
