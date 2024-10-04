<template>
  <div class="">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="font-bold text-xl">Account Security</h2>
        <p class="text-gray-one">You can change your account password here</p>
      </div>
      <base-button
        @click="resetPasswordInApp"
        styles="w-full font-bold"
        size="large"
        :loading="loading"
        type="primary"
      >
        <div class="flex items-center space-x-2">Reset Password</div>
      </base-button>
    </div>
    <div class="border-tborder-gray-four border-b py-8 mt-8 space-y-6">
      <div class="flex">
        <label class="font-bold w-1/5" for="">Change Password</label>
        <div class="w-2/5">
          <base-input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter change password"
            icon-prefix="password"
            v-model="formData.password"
          />
        </div>
      </div>
      <div class="flex">
        <label class="font-bold w-1/5" for="">Confirm New Password</label>
        <div class="w-2/5">
          <base-input
            name="confirm_password"
            label=""
            type="password"
            placeholder="Enter change password"
            icon-prefix="password"
            v-model="formData.confirm_password"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-end mt-6 space-x-3">
      <base-button
        styles="w-full font-bold bg-white text-primary"
        size="large"
        type="primary"
        bgColor="#ffffff"
        textColor="#475569"
        @click="goBack"
        borderColor="#475569"
      >
        <div class="flex items-center space-x-2">
          <span>Cancel</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2882 14.962C16.4644 15.1381 16.5633 15.377 16.5633 15.626C16.5633 15.8751 16.4644 16.114 16.2882 16.2901C16.1121 16.4662 15.8733 16.5652 15.6242 16.5652C15.3751 16.5652 15.1362 16.4662 14.9601 16.2901L9.99997 11.3284L5.03825 16.2885C4.86213 16.4647 4.62326 16.5636 4.37418 16.5636C4.12511 16.5636 3.88624 16.4647 3.71012 16.2885C3.534 16.1124 3.43506 15.8736 3.43506 15.6245C3.43506 15.3754 3.534 15.1365 3.71012 14.9604L8.67184 10.0003L3.71168 5.03854C3.53556 4.86242 3.43662 4.62355 3.43662 4.37448C3.43662 4.12541 3.53556 3.88654 3.71168 3.71042C3.8878 3.53429 4.12668 3.43535 4.37575 3.43535C4.62482 3.43535 4.86369 3.53429 5.03981 3.71042L9.99997 8.67213L14.9617 3.70963C15.1378 3.53351 15.3767 3.43457 15.6257 3.43457C15.8748 3.43457 16.1137 3.53351 16.2898 3.70963C16.4659 3.88575 16.5649 4.12462 16.5649 4.3737C16.5649 4.62277 16.4659 4.86164 16.2898 5.03776L11.3281 10.0003L16.2882 14.962Z"
              fill="#475569"
            />
          </svg>
        </div>
      </base-button>
      <base-button
        @click="setOtp"
        :loading="loading"
        styles="w-full font-bold"
        size="large"
        type="primary"
      >
        <div class="flex items-center space-x-2">
          <span>Save</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1632 6.28815L8.16325 16.2882C8.07615 16.3756 7.97266 16.4449 7.8587 16.4922C7.74475 16.5395 7.62257 16.5639 7.49918 16.5639C7.3758 16.5639 7.25362 16.5395 7.13967 16.4922C7.02571 16.4449 6.92222 16.3756 6.83512 16.2882L2.46012 11.9132C2.37292 11.8259 2.30374 11.7224 2.25655 11.6085C2.20935 11.4945 2.18506 11.3724 2.18506 11.2491C2.18506 11.1258 2.20935 11.0036 2.25655 10.8897C2.30374 10.7758 2.37292 10.6722 2.46012 10.585C2.54733 10.4978 2.65086 10.4286 2.7648 10.3814C2.87874 10.3343 3.00086 10.31 3.12418 10.31C3.24751 10.31 3.36963 10.3343 3.48357 10.3814C3.59751 10.4286 3.70104 10.4978 3.78825 10.585L7.49997 14.2967L16.8367 4.96159C17.0128 4.78547 17.2517 4.68652 17.5007 4.68652C17.7498 4.68652 17.9887 4.78547 18.1648 4.96159C18.3409 5.13771 18.4399 5.37658 18.4399 5.62565C18.4399 5.87472 18.3409 6.11359 18.1648 6.28971L18.1632 6.28815Z"
              fill="white"
            />
          </svg>
        </div>
      </base-button>
    </div>
  </div>
  <el-dialog v-model="openSuccessReset" title="" width="500">
    <div class="">
      <div
        class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-12 w-12"
      >
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM17.1078 2.375L11 7.97375L4.89219 2.375H17.1078ZM3.125 13.625V3.8075L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L18.875 3.8075V13.625H3.125Z"
            fill="#4F46E5"
          />
        </svg>
      </div>
      <h3 class="mt-6 font-bold text-lg text-gray-two">Check your inbox</h3>
      <p class="text-gray-one">
        A password reset link has been sent to
        {{ obfuscatedEmail }}
      </p>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <div class="mt-8">
          <base-button
            @click="openSuccessReset = false"
            styles="w-fit font-bold"
            size="large"
            type="primary"
          >
            Okay
          </base-button>
        </div>
      </div>
    </template>
  </el-dialog>
  <common-otp-dialog
    :email="obfuscatedEmail"
    :openModal="openOptModal"
    @submit="handleOtpSubmit"
  />
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";

const authStore = useAuthStore();
const userStore = useUserStore();

const router = useRouter();

const emit = defineEmits(["done"]);

const { handleError } = useErrorHandler();

const loading = ref(false);
const openSuccessReset = ref(false);
const openOptModal = ref(false);
const code = ref();

const formData = ref({
  password: "",
  confirm_password: "",
});

const currentUser = computed(() => {
  return userStore.getUserInfo;
});

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot exceed 100 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),

  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const { handleSubmit, setFieldValue, resetForm } = useForm({
  validationSchema,
  initialValues: formData.value,
});

onMounted(async () => {
  const { data } = await userStore.getCurrentUser();
  if (data.success) {
    const user = data.data;
    setFieldValue("firstname", user.parent.first_name);
    setFieldValue("lastname", user.parent.last_name);
    setFieldValue("email", user.email);
    setFieldValue("phone", user.parent.mobile_number);
    setFieldValue("phoneCode", user.parent.mobile_code);
    setFieldValue("picture_url", user.picture_url);
    formData.value.picture_url = user.picture_url;
    formData.value.id = user.id;
  }
});

const obfuscateEmail = (email: any) => {
  const [username, domain] = email.split("@");
  const obfuscatedUsername = username[0] + "***"; // Hide all but the first character
  return `${obfuscatedUsername}@${domain}`;
};

const obfuscatedEmail = computed(() =>
  obfuscateEmail(currentUser.value?.email || '')
);

const handleOtpSubmit = (otp: string) => {
  code.value = otp;
  openOptModal.value = false;
  onSubmit();
};

const resetPasswordInApp = async () => {
  try {
    loading.value = true;
    const { data } = await authStore.changePasswordTwoFaCode();
    if (data?.success) {
      openSuccessReset.value = true;
    }
  } catch (error) {
    handleError(error);
    return false;
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.go(-1);
};

const setOtp = handleSubmit(async (values) => {
  if (values) {
    openOptModal.value = true;
  }
});

const onSubmit = handleSubmit(async (values) => {
  const payload = {
    code: code.value,
    password: values.password,
  };

  try {
    loading.value = true;
    const { data } = await authStore.changePassword(payload);
    if (data?.success) {
      resetForm();
      ElNotification({
        title: "Success",
        message: `Password was updated successfully`,
        type: "success",
      });
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
