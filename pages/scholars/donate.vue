<template>
  <div>
    <div class="h-20 bg-green-two relative">
      <div
        class="h-14 lg:h-20 absolute left-0 -bottom-7 rounded-r-2xl px-10 md:px-20 lg:text-2xl font-bold flex justify-center items-center bg-yellow-three w-fit"
      >
        Spark Scholars
      </div>
    </div>

    <div class="flex justify-center items-center px-5">
      <div class="w-full lg:w-4/5 xl:w-3/5">
        <div class="max-w-screen-2xl mt-20 w-full mx-auto">
          <h4 class="font-semibold text-lg lg:text-2xl text-green-two">
            Choose Amount
          </h4>
          <div class="p-5 md:p-10 rounded-2xl shadow-card mt-7">
            <div class="grid grid-cols-3 md:grid-cols-5 gap-5 lg:gap-10">
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $100
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $150
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $200
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $250
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $300
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $350
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $400
              </span>
              <span
                class="text-center py-4 px-1 font-semibold lg:font-bold text-lg lg:text-2xl shadow-card flex items-center justify-center rounded-2xl border-green-two border"
              >
                $450
              </span>
            </div>

            <div class="mt-10 flex items-center space-x-2">
              <span class="font-semibold w-1/5 lg:font-bold text-sm lg:text-xl"
                >Other Amount:
              </span>

              <el-input
                v-model="customAmount"
                size="large"
                class="w-full"
                placeholder="Please enter amount"
              />
            </div>
          </div>
        </div>

        <el-form
          ref="ruleFormRef"
          label-position="top"
          :model="ruleForm"
          size="large"
          status-icon
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm"
        >
          <div class="max-w-screen-2xl mt-10 w-full mx-auto">
            <h4 class="font-semibold text-lg lg:text-2xl text-green-two">
              Sign up Information
            </h4>

            <div
              class="pt-8 pb-10 px-6 lg:p-10 rounded-2xl shadow-card mt-7 space-y-5"
            >
              <el-form-item label="Proceed to signup" prop="delivery">
                <el-switch v-model="showLoginForm" />
              </el-form-item>
              <div v-if="showLoginForm">
                <el-form-item label="Firstname" prop="firstname">
                  <el-input v-model="ruleForm.firstname" />
                </el-form-item>
                <el-form-item label="Lastname" prop="lastname">
                  <el-input v-model="ruleForm.lastname" />
                </el-form-item>
                <el-form-item label="Email address" prop="email">
                  <el-input
                    v-model="ruleForm.email"
                    type="email"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="Phone Number" prop="phoneNumber">
                  <el-input
                    v-model="ruleForm.phoneNumber"
                    type="text"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="Password" prop="pass">
                  <el-input
                    v-model="ruleForm.pass"
                    type="password"
                    autocomplete="off"
                  />
                </el-form-item>
                <el-form-item label="Confirm" prop="checkPass">
                  <el-input
                    v-model="ruleForm.checkPass"
                    type="password"
                    autocomplete="off"
                  />
                </el-form-item>
              </div>
            </div>
            <div class="mt-10">
              <el-button
                :loading="loading"
                @click.prevent="submitForm(ruleFormRef)"
                :style="{
                  backgroundColor: '#4CAF50',
                  color: '#FFF',
                  height: '58px',
                  width: 'auto',
                }"
              >
                Make Payment
              </el-button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>

  <div
    v-if="showOverlay"
    class="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="w-full lg:w-3/12 p-10 rounded-lg text-center">
      <h2 class="text-xl lg:text-4xl font-bold text-green-two">Thank You!</h2>

      <button
        @click="closeOverlay"
        class="h-16 w-full mt-3 text-white right-0 bg-green-two btn"
      >
        Proceed to your Dashboard
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const showOverlay = ref(false);
const customAmount = ref("");
const loading = ref(false);
const showLoginForm = ref(true);

import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();

const closeOverlay = () => {
  showOverlay.value = false;
};

import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass");
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phoneNumber: "",
  pass: "",
  checkPass: "",
});

const rules = reactive<FormRules<typeof ruleForm>>({
  firstname: [
    { required: true, message: "Please input first name", trigger: "blur" },
    { min: 3, message: "Length should be above 3", trigger: "blur" },
  ],
  lastname: [
    { required: true, message: "Please input last name", trigger: "blur" },
    { min: 3, message: "Length should be above 3", trigger: "blur" },
  ],
  email: [
    {
      required: true,
      message: "Please input email address",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Please input correct email address",
      trigger: ["blur", "change"],
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: "phoneNumber is required",
      trigger: "blur",
    },
  ],
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;

      const payload = {
        email: ruleForm.email,
        firstName: ruleForm.firstname,
        lastName: ruleForm.lastname,
        password: ruleForm.pass,
        phoneNumber: ruleForm.phoneNumber,
      };
      console.log(payload);
      try {
        loading.value = true;
        const response = await authStore.registerUser(payload);
        console.log(response)
        showOverlay.value = true;
      } catch (error) {
      } finally {
        loading.value = false;
      }
    } else {
      console.log("error submit!");
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped></style>
