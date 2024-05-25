<template>
  <div>
    <div class="bg-gray-three shadow-header">
      <div class="flex items-center h-20 px-10 justify-center">
        <div class="w-full mx-auto flex items-center justify-between">
          <nuxt-link to="/">
            <img class="w-40 " src="@/assets/images/icons/logo.svg" alt="" srcset="" />
          </nuxt-link>
          <nav class="flex items-center space-x-5 font-semibold">
            <el-input
              v-model="search"
              style="width: 440px"
              size="large"
              class="mr-10"
              placeholder="Search Something..."
              :suffix-icon="Search"
            />
            <Bell class="text-black w-7 h-7" />
            <el-dropdown trigger="click">
              <span class="space-x-2 flex items-center el-dropdown-link">
                <UserFilled class="w-8 h-8"/>
                <span>Taiwo Ademola</span> <el-icon class="el-icon--right"
                  ><arrow-down
                /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                  <el-dropdown-item :icon="CirclePlusFilled">
                    Action 2
                  </el-dropdown-item>
                  <el-dropdown-item :icon="CirclePlus"
                    >Action 3</el-dropdown-item
                  >
                  <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                  <el-dropdown-item :icon="CircleCheck"
                    >Action 5</el-dropdown-item
                  >
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
import {
  Search,
  Bell,
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
  UserFilled
} from "@element-plus/icons-vue";

const router = useRouter();
const goToBeneficiaries = () => {
  router.push("/#beneficiaries");
};

const search = ref("");
</script>

<style scoped></style>
