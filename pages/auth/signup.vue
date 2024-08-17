<template>
  <div class="flex justify-between h-screen">
    <div class="w-1/2 h-screen overflow-scroll flex justify-center items-start">
      <div class="w-4/6 flex items-center flex-col justify-center pt-10">
        <div class="mb-6 flex items-center justify-center">
          <img
            src="~/assets/images/icons/logomark-sparkexplorer.svg"
            alt="sparkexplorer-logo"
            class=""
          />
        </div>

        <h1 class="text-3xl font-extrabold">Let’s Create Your Account.</h1>
        <p class="mt-2 text-gray-one">
          Sign up for free and get started quickly.
        </p>

        <el-form class="space-y-6 mt-10 w-full">
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
          <base-input
            name="phone"
            label="Phone Number"
            type="text"
            placeholder="Enter Phone Number"
            v-model:value="formData.phone"
          />
          <base-input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            icon-prefix="password"
            v-model:value="formData.password"
          />

          <el-checkbox v-model="formData.checked" size="large">
            <div class="font-semibold text-sm">
              By signing up, I confirm I agree to the
              <span class="text-primary">Terms and Conditions</span> and
              <span class="text-primary">Privacy Policy</span>
            </div>
          </el-checkbox>

          <div class="space-y-2">
            <base-button
              styles="w-full font-bold"
              size="large"
              @click="onSubmit"
              type="primary"
            >
              <div class="flex items-center space-x-2">
                <span>Sign Up</span>
                <img src="/icons/sign-out.svg" alt="" />
              </div>
            </base-button>
            <div
              class="w-full justify-center cursor-pointer items-center flex h-11 rounded-123 border-gray-two font-bold border text-gray-two"
              @click="onboardingSubmit"
            >
              <div class="flex items-center space-x-2">
                <img src="@/assets/images/icons/google.svg" alt="" />
                <span>Sign Up With Google</span>
              </div>
            </div>
          </div>

          <div class="font-semibold pb-6 text-sm mt-6 text-center">
            Already have an account? <span class="text-primary cursor-pointer" @click="goToSignin">Sign In</span>.
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
const router = useRouter()
definePageMeta({
  layout: "auth",
});

import { useForm } from "vee-validate";
import * as yup from "yup";


const formData = ref({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  checked: false,
  password: "",
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
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number can only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits"),
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

const { handleSubmit, resetForm } = useForm({
  validationSchema,
  initialValues: formData.value,
});

const onboardingSubmit = () => {
  router.push('/auth/onboarding')
}

const onSubmit = handleSubmit((values) => {
  console.log("Form submitted:", values);
  
});

const goToSignin = () => {
  router.push('/auth/login')
}
</script>

<style scoped></style>
