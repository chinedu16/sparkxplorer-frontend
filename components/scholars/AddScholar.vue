<template>
  <div>
    <h1 class="text-3xl font-extrabold">
      {{ scholarActionType === "edit" ? "Edit the" : "Add a" }} Scholar
    </h1>
    <p class="mt-2 text-gray-one">
      We’ll fine tune our features to be personalized for you.
    </p>
    <div class="mt-8 h-3/6 space-y-6">
      <base-input
        name="firstname"
        label="First Name"
        type="text"
        placeholder="Enter first name"
        icon-prefix="user"
        v-model="formData.firstname"
      />
      <base-input
        name="lastname"
        label="Last Name"
        type="text"
        placeholder="Enter last name"
        icon-prefix="user"
        v-model="formData.lastname"
      />

      <base-input
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter Email Address"
        icon-prefix="email"
        v-model="formData.email"
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
        label="Date of Birth"
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
    <div class="mt-8">
      <base-button
        @click.prevent="onSubmit"
        styles="w-full font-bold"
        size="large"
        type="primary"
        :disabled="loading"
        :loading="loading"
      >
        Add Scholar
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const { handleError } = useErrorHandler();
import { useScholarStore } from "@/store/scholar";
const emit = defineEmits(["done"]);

const props = defineProps<{
  scholarActionType: string;
  selectedRow: any;
}>();

const scholarStore = useScholarStore();

const base64File = ref("");

const handleUploadedUrl = (url: string) => {
  formData.value.picture_url = url;
  base64File.value = url;
};

const handleFileListUpdate = (fileList: any) => {
  console.log("Files:", fileList);
};

const loading = ref(false);

const formData = ref({
  id: "",
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
  uploaded_files: yup.array().min(1, "At least one file is required").required('scholar image is required'),
});

const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema,
  initialValues: formData.value,
});

onMounted(() => {
  console.log('dhksjvghbj')
})


onMounted(async () => {
  if (props.scholarActionType === "edit") {
    const user = props.selectedRow;
    const fullName = user.name;
    const [firstName, lastName] = fullName.split(" ");
    setFieldValue("firstname", firstName);
    setFieldValue("lastname", lastName);
    setFieldValue("email", user.email);
    setFieldValue("grade", user.grade);
    setFieldValue("date_of_birth", "2024/09/23");
    setFieldValue("uploaded_files", [user.picture_url]);
    formData.value.picture_url = user.picture_url;
    formData.value.id = user.id;
    formData.value.grade = user.grade;
    formData.value.date_of_birth = user.unformattedDate;
  }
});

const onSubmit = handleSubmit(async (values) => {
  const payload = {
    first_name: values.firstname,
    last_name: values.lastname,
    email: values.email,
    date_of_birth: values.date_of_birth,
    grade_id: values.grade,
    picture_url: base64File.value || formData.value.picture_url,
  };

  try {
    loading.value = true;
    const response = await scholarStore.createScholar(payload);

    if (response) {
      const { data, error } = response;

      if (error) {
        handleError(error);
        return false;
      }

      if (data.success) {
        emit("done");

        resetForm();
        base64File.value = "";
      }
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
