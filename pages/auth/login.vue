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
            v-model="formData.email"
          />

          <base-input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            icon-prefix="password"
            v-model="formData.password"
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
              :loading="loading"
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
              @click="loginWithGoogle"
            >
              <div class="flex items-center space-x-2">
                <img src="@/assets/images/icons/google.svg" alt="" />
                <span>Sign In With Google</span>
                <div v-if="loading" class="spinner"></div>
              </div>
            </div>
          </div>

          <div class="font-semibold pb-6 text-sm mt-6 text-center">
            Don’t have an account?
            <span class="text-primary cursor-pointer" @click="goToSignup"
              >Sign Up</span
            >.
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
import { useAuthStore } from "@/store/auth";
import { useUserStore } from "@/store/user";

const authStore = useAuthStore();
const userStore = useUserStore();
const route = useRoute();

const { handleError } = useErrorHandler();
const loading = ref(false);

const formData = ref({
  email: "",
  password: "",
  checked: true,
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
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});

onMounted(() => {
  const sso_token = route.query.sso_token;
  if (sso_token) {
    const payload = {
      sso_token: sso_token,
    };
    console.log(sso_token);
    console.log(route.query);
    loginWithSSO(payload);
  }
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: formData.value,
});

const loginWithSSO = async (payload: any) => {
  try {
    loading.value = true;
    const { data, error } = await authStore.getSSOAuthUrl(payload);

    if (error) {
      handleError(error);
      return;
    }

    if (data?.success) {
      localStorage.setItem("USER", JSON.stringify(data.data));
      localStorage.setItem("TOKEN", data.data.accessToken);

      const response = await userStore.getCurrentUser();

      if (response.error) {
        handleError(response.error);
        return;
      }

      if (response.data.success) {
        if (
          response.data.data.primary_role === "parent" &&
          response.data.data.parent.no_scholars === 0
        ) {
          navigateTo("/auth/onboarding");
        } else if (
          response.data.data.primary_role === "parent" &&
          response.data.data.parent.no_scholars > 0
        ) {
          navigateTo("/dashboard");
        } else if (response.data.data.primary_role === "scholar") {
          navigateTo("/dashboard");
        } else {
          navigateTo("/admin/dashboard");
        }
      }
    } else {
      handleError(new Error("Login failed, please try again."));
    }
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

const loginWithGoogle = async () => {
  try {
    loading.value = true;
    const { data, error } = await authStore.getGoogleAuthUrl("login");

    if (error) {
      handleError(error);
      return;
    }

    if (data?.success) {
      window.location.href = data.data.url;
    } else {
      handleError(new Error("Login failed, please try again."));
    }
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
};

const onSubmit = handleSubmit(async (values) => {
  const payload = {
    username: values.email,
    password: values.password,
    client_id: "439ec9c9-d9f1-431f-bb5d-19bf4022c03b",
    client_secret: "31902e790e424770a887325f6ce47c46",
    grant_type: "password",
  };

  try {
    loading.value = true;
    const { data, error } = await authStore.login(payload);

    if (error) {
      handleError(error);
      return;
    }

    if (data?.success) {
      localStorage.setItem("USER", JSON.stringify(data.data));
      localStorage.setItem("TOKEN", data.data.accessToken);

      const response = await userStore.getCurrentUser();

      if (response.error) {
        handleError(response.error);
        return;
      }

      if (
        response.data.data.primary_role === "parent" &&
        response.data.data.parent.no_scholars === 0
      ) {
        navigateTo("/auth/onboarding");
      } else if (
        response.data.data.primary_role === "parent" &&
        response.data.data.parent.no_scholars > 0
      ) {
        navigateTo("/dashboard");
      } else if (response.data.data.primary_role === "scholar") {
        navigateTo("/dashboard");
      } else {
        navigateTo("/admin/dashboard");
      }
    }
  } catch (error) {
    handleError(error);
  } finally {
    loading.value = false;
  }
});

const goToSignup = () => {
  navigateTo("/auth/signup");
};
</script>

<style scoped></style>

<!-- http://localhost:3000/auth/login?sso_token=A%2FkY1mci%2B6w3FGSY4YsRYSW2ueBN2NPYu2hYtzE5jHRAAKInFmQOESoYPQ635OErmDYd8ZY6eJWmmXWOVAIwFKtaOt102bJX1qdAL7VsQj54srnq%2Bg0Yngp82QEnJX17GMC6wKpEg2k%2FJM2esYz0BVPtygRFwt82Pw4ll3MtNMxnp4xbXjUfMmry7xeNr4gRbp%2BXUv1YqgfBlbSBK7SEFfMoPZ7%2FAjvv0Wapn8aNDTnOtSRgKEyZGse651Fy1cu1vzR9474ORSlirsoHOq4GdvfNqG7sbJXPzXC3eLDcJn2fh2rQKsq63lKXXszGMfT8tg0HGd87e%2BM0N5HHpq%2Fpn1ZeBO0SRWQUq5entPlcQ5p4MuacUEJG0DmoZSNqTYL38TzQjJDCNb4HgUzYflb2xfy%2Fr3xpZLPjkLK7en9sMt80T0ZeMA9AeUJ8zmD%2Fk1KMKv%2Fkf7bo3tq%2FoHKIKyUlYhuSGMNbOjFB3C9fZwx8xs4UorbaBronbdK4fZqNtuToYUNOeMH2eiayxgbN7t8MFQ6g6aULkDHNRiXxdT%2Fw%2Fki8APqOSA2JJLv08nlHszGoOigW32RfnmZvhLQDRp06JcgskAnxgjpBWVEt8qWazaXTcNYPvWsh3LK9G9sruO2hADHhvPDqMHenOcpHSMKCAyTkrJeTqtfM5aOdQZAjuPo%3D -->
