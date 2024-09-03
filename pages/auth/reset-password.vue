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

          <div>
            <h1 class="text-3xl font-extrabold">Create New Password</h1>
            <p class="mt-2 text-gray-one">
              Let’s sign up quickly to get started.
            </p>

            <el-form class="space-y-6 mt-12 w-full">
              <base-input
                name="password"
                label="Password"
                type="password"
                placeholder="Enter password"
                icon-prefix="password"
                v-model:value="formData.password"
              />
              <base-input
                name="password"
                label="Confirm Password"
                type="password"
                placeholder="Enter Confirm password"
                icon-prefix="password"
                v-model:value="formData.confirm_passwordpassword"
              />

              <base-button
                styles="w-full font-bold"
                size="large"
                @click="onSubmit"
                type="primary"
              >
                <div class="flex items-center space-x-2">
                  <span>Change Password</span>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 5.9375H12.5625V4.375C12.5625 3.29756 12.1345 2.26425 11.3726 1.50238C10.6108 0.740512 9.57744 0.3125 8.5 0.3125C7.42256 0.3125 6.38925 0.740512 5.62738 1.50238C4.86551 2.26425 4.4375 3.29756 4.4375 4.375V5.9375H2.25C1.8356 5.9375 1.43817 6.10212 1.14515 6.39515C0.85212 6.68817 0.6875 7.0856 0.6875 7.5V16.25C0.6875 16.6644 0.85212 17.0618 1.14515 17.3549C1.43817 17.6479 1.8356 17.8125 2.25 17.8125H14.75C15.1644 17.8125 15.5618 17.6479 15.8549 17.3549C16.1479 17.0618 16.3125 16.6644 16.3125 16.25V7.5C16.3125 7.0856 16.1479 6.68817 15.8549 6.39515C15.5618 6.10212 15.1644 5.9375 14.75 5.9375ZM6.3125 4.375C6.3125 3.79484 6.54297 3.23844 6.9532 2.8282C7.36344 2.41797 7.91984 2.1875 8.5 2.1875C9.08016 2.1875 9.63656 2.41797 10.0468 2.8282C10.457 3.23844 10.6875 3.79484 10.6875 4.375V5.9375H6.3125V4.375ZM14.4375 15.9375H2.5625V7.8125H14.4375V15.9375Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </base-button>

              <div
                class="flex cursor-pointer items-center space-x-4 justify-center text-primary text-sm mt-6"
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
                    fill="#4F46E5"
                  />
                </svg>

                <span>
                  <nuxt-link to="/auth/login">Back to login screen</nuxt-link>
                </span>
              </div>
            </el-form>
          </div>
        </div>
      </div>

      <layouts-footer class="mt-auto"></layouts-footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
const router = useRouter();

definePageMeta({
  layout: "auth",
});

const formData = ref({
  email: "",
});

const validationSchema = yup.object({
  password: yup.string().required("Password is required"),
  confirm_password: yup.string().required("Password is required"),
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: formData.value,
});

const onSubmit = handleSubmit((values) => {
  console.log("Form submitted:", values);
  router.push("/auth/login");
});
</script>

<style scoped></style>
