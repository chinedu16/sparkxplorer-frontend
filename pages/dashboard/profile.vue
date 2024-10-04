<template>
  <div>
    <div class="flex justify-between mb-6">
      <h2 class="font-extrabold text-gray-two text-3xl">Settings</h2>
    </div>
    <div>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="General" name="first">
          <settings-general />
        </el-tab-pane>
        <el-tab-pane v-if="currentUser.primary_role !== 'scholar'" label="Performance Token" name="second">
          <settings-performance-token />
        </el-tab-pane>
        <el-tab-pane label="Security" name="third">
          <settings-security />
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
const currentUser = computed(() => userStore.getUserInfo);

const activeName = ref("first");

definePageMeta({
  layout: "dashboard",
});
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 40px 0px;
}
</style>
