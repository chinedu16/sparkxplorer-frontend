<template>
  <aside class="flex flex-col px-8 py-4 h-full">
    <nav class="my-12">
      <ul class="space-y-6">
        <li>
          <nuxt-link
            to="/admin/overview"
            active-class="text-white"
            class="hover:text-white text-blue-six flex items-center space-x-3"
          >
            <el-icon>
              <HomeFilled class="w-6 h-6" />
            </el-icon>
            <span>Overview</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/admin/orders"
            active-class="text-white"
            class="hover:text-white text-blue-six flex items-center space-x-3"
          >
            <el-icon>
              <ShoppingCartFull class="w-6 h-6" />
            </el-icon>
            <span>My Order</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/admin/tracking"
            active-class="text-white"
            class="hover:text-white text-blue-six flex items-center space-x-3"
          >
            <el-icon>
              <Box class="w-6 h-6" />
            </el-icon>
            <span>Track Order</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/admin/beneficiaries"
            active-class="text-white"
            class="hover:text-white text-blue-six flex items-center space-x-3"
          >
            <el-icon>
              <Management class="w-6 h-6" />
            </el-icon>
            <span>My Beneficiaries</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/admin/packages"
            active-class="text-white"
            class="hover:text-white text-blue-six flex items-center space-x-3"
          >
            <el-icon>
              <ShoppingBag class="w-6 h-6" />
            </el-icon>
            <span>Our Packages</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/admin/profile"
            active-class="text-white"
            class="hover:text-white text-blue-six flex items-center space-x-3"
          >
            <el-icon>
              <User class="w-6 h-6" />
            </el-icon>
            <span>Profile</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <!-- Bottom Links -->
    <div class="mt-auto space-y-6">
      <nuxt-link
        to="/admin/contact"
        class="hover:text-white text-white flex items-center space-x-3"
      >
        <el-icon>
          <ChatDotRound class="w-6 h-6" />
        </el-icon>
        <span>Contact Us</span>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:text-white text-white flex items-center space-x-3"
      >
        <el-icon>
          <SoldOut class="w-6 h-6" />
        </el-icon>
        <span>Logout</span>
      </nuxt-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {
  HomeFilled,
  SoldOut,
  ChatDotRound,
  User,
  ShoppingCartFull,
  Box,
  ShoppingBag,
  Management,
} from "@element-plus/icons-vue";
</script>

<style scoped>
.router-link-exact-active {
  color: white;
}

</style>
