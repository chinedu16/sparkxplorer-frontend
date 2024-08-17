<template>
  <div class="flex justify-between h-screen">
    <div
      class="w-1/2 h-screen overflow-scroll flex justify-center items-start"
    >
      <div class="w-4/6 flex items-center flex-col justify-center pt-10">
        <div class="mb-6 flex items-center justify-center">
          <img
            src="~/assets/images/icons/logomark-sparkexplorer.svg"
            alt="sparkexplorer-logo"
            class=""
          />
        </div>

        <h1 class="text-3xl font-extrabold">Welcome Back.</h1>
        <p class="mt-2 text-gray-one">
          Let’s sign in to your account and get started.
        </p>

        <el-form class="space-y-6 mt-10 w-full">
          <base-input
            name="email"
            label="Email Address"
            type="email"
            placeholder="Enter Email Address"
            icon-prefix="email"
            v-model:value="formData.email"
          />

          <base-input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            icon-prefix="password"
            v-model:value="formData.password"
          />

          <div class="flex justify-between items-center">
            <el-checkbox v-model="formData.checked" size="large">
              <div class="font-semibold text-sm">Remember For 30 Days</div>
            </el-checkbox>
            <nuxt-link
              class="font-normal text-primary text-sm"
              to="/auth/forget-password"
              >Forget Password?</nuxt-link
            >
          </div>

          <div class="space-y-2">
            <base-button
              styles="w-full font-bold"
              size="large"
              @click="onSubmit"
              type="primary"
            >
              <div class="flex items-center space-x-2">
                <span>Sign In</span>
                <img src="/icons/sign-out.svg" alt="" />
              </div>
            </base-button>
            <div
              class="w-full justify-center cursor-pointer items-center flex h-11 rounded-123 border-gray-two font-bold border text-gray-two"
              @click="onSubmit"
            >
              <div class="flex items-center space-x-2">
                <img src="@/assets/images/icons/google.svg" alt="" />
                <span>Sign In With Google</span>
              </div>
            </div>
          </div>

          <div class="font-semibold pb-6 text-sm mt-6 text-center">
            Don’t have an account?
            <span class="text-primary cursor-pointer" @click="goToSignup">Sign Up</span>.
          </div>
        </el-form>
      </div>
    </div>
    <div class="w-1/2 h-screen bg-purple-one relative">
      <CommonAuthCarousel></CommonAuthCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { useForm } from "vee-validate";
import * as yup from "yup";

const router = useRouter();

const formData = ref({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  checked: false,
  password: "",
});

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),

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
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: formData.value,
});

const onSubmit = handleSubmit((values) => {
  console.log("Form submitted:", values);
});

const goToSignup = () => {
  router.push("/auth/signup");
};
</script>

<style scoped></style>
