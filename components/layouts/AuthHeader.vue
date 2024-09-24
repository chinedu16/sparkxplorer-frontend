<template>
  <div>
    <div class="bg-gray-three shadow-header">
      <div class="flex items-center h-24 px-10 justify-center">
        <div class="w-full mx-auto flex items-center justify-between">
          <h1 class="text-3xl text-gray-two font-extrabold">
            {{ userStore.getUserInfo?.name }}
          </h1>
          <nav class="flex items-center space-x-5 font-semibold">
            <div class="bg-gray-three rounded-full p-2">
              <Bell class="text-black w-6 h-6" />
            </div>
            <el-dropdown trigger="click">
              <span class="space-x-2 flex items-center el-dropdown-link">
                <div
                  class="bg-purple-one text-primary uppercase rounded-full flex items-center justify-center font-bold text-base h-10 w-10"
                >
                  {{ userStore.getUserInfo?.name[0]
                  }}{{ userStore.getUserInfo?.name[1] }}
                </div>
                <span>{{ userStore.getUserInfo?.name }}</span>
                <el-icon class="el-icon--right"><arrow-down /></el-icon>
              </span>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="space-x-3" @click="goToProfile">
                    <img
                      src="@/assets/images/icons/user.svg"
                      alt="Profile"
                      class="icon"
                    />
                    <span>Profile</span>
                  </el-dropdown-item>

                  <el-dropdown-item class="space-x-3" @click="logoutApp">
                    <img
                      src="@/assets/images/icons/user.svg"
                      alt="Logout"
                      class="icon"
                    />
                    <span>Logout</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { Bell, ArrowDown, User, Setting, Plus } from "@element-plus/icons-vue";

const userStore = useUserStore();

const logoutApp = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USER");
  navigateTo("/");
};

const goToProfile = () => {
  navigateTo("/dashboard/profile");
};

const search = ref("");
</script>

<style scoped></style>
