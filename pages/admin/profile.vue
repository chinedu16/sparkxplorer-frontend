<template>
  <div>
    <h1 class="text-blue-two font-semibold text-2xl">My Profile</h1>

    <div>
      <div class="my-6 cursor-pointer">
        <img src="../../assets/images/illustrations/avatar.png" alt="" />
        <span class="text-xs">Upload photo</span>
      </div>
      <h3 class="text-blue-two font-semibold mb-4">Edit your profile</h3>
      <el-form
        label-position="top"
        label-width="auto"
        :model="formLabelAlign"
        style="max-width: 600px"
      >
        <div class="flex w-full space-x-2">
          <el-form-item class="w-1/2" label="First Name">
            <el-input size="large" v-model="formLabelAlign.region" />
          </el-form-item>
          <el-form-item class="w-1/2" label="Last Name">
            <el-input size="large" v-model="formLabelAlign.region" />
          </el-form-item>
        </div>

        <div class="flex w-full space-x-2">
          <el-form-item class="w-1/2" label="Email">
            <el-input size="large" v-model="formLabelAlign.region" />
          </el-form-item>
          <el-form-item class="w-1/2" label="Address">
            <el-input size="large" v-model="formLabelAlign.region" />
          </el-form-item>
        </div>

        <el-form-item label="Password Changes">
          <div class="space-y-2 w-full">
            <el-input
              placeholder="Current Passwod"
              size="large"
              v-model="formLabelAlign.type"
            />
            <el-input
              placeholder="New Password"
              size="large"
              v-model="formLabelAlign.type"
            />
            <el-input
              placeholder="Confirm New Password"
              size="large"
              v-model="formLabelAlign.type"
            />
          </div>
        </el-form-item>
        <el-form-item class="mt-10">
          <el-button size="large" type="primary">
            Save
          </el-button>
          <el-button size="large">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import type { FormProps } from "element-plus";
import { ref, reactive } from "vue";

definePageMeta({
  layout: "admin",
});

const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
});

const search = ref("");
const dateRange = ref("");
</script>

<style scoped></style>
