<template>
  <el-dialog :model-value="openModal" title="" width="500">
    <div>
      <h3 class="font-bold text-lg text-gray-two">
        We sent you a 6 digit code
      </h3>
      <p class="text-gray-one text-xs mb-8">
        We have sent a 6-digit code to your email {{ email }}
      </p>
      <el-form>
        <el-form-item :error="errors.otp">
          <el-input
            v-model="otp"
            placeholder="Enter OTP"
            maxlength="6"
            @input="validateOtp"
          />
        </el-form-item>
        <div class="mt-8">
          <base-button
            @click.prevent="onSubmit"
            styles="w-full font-bold"
            size="large"
            type="primary"
            :loading="loading"
          >
            Next
          </base-button>
        </div>
        <div class="text-xs font-semibold text-center mt-4">
          Didn’t receive the code? 
          <span class="text-primary">Re-send Code in 23s</span>
        </div>
      </el-form>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits<{
  (e: "submit", otp: string): void;
}>();

const props = defineProps<{
  openModal: boolean;
  email: string;
  loading: boolean;
}>();

const otpSchema = yup.object({
  otp: yup
    .string()
    .required("OTP is required")
    .length(6, "OTP must be 6 digits"),
});

const { handleSubmit, errors, validateField } = useForm({
  validationSchema: otpSchema,
});

const { value: otp } = useField("otp");

const validateOtp = () => {
  validateField("otp");
};

const onSubmit = handleSubmit(() => {
  emit("submit", otp.value);
});
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
