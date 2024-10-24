<template>
  <aside
    class="py-3 text-white px-4 bg-primary hidden w-64 h-[calc(100vh_-_4rem)] shrink-0 sticky top-16 sm:flex flex-col left-0 bottom-0">
    <div class="my-2 overflow-y-auto flex-1">
      <base-input v-model="search" name="username" label="" placeholder="Search" type="text" iconPrefix="search"
        variant="transparent" class="pb-4" />
      <nav>
        <ul class="space-y-3">
          <li v-for="(item, index) in navLinks" :key="index">
            <nuxt-link :to="`/admin${item.url}`" active-class="active-link"
              class="hover:bg-[#6366f1] p-3 flex items-center space-x-3 rounded-full">
              <component :is="item.icon" :size="24" />
              <!-- <img :src="`/icons/${item.icon}.svg`" alt="" /> -->
              <span class="font-bold">{{ item.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Bottom Links -->
    <div class="border-t border-primary/30 pt-3 flex items-center gap-2">
      <div class="flex flex-1 space-x-2">
        <span
          class="bg-purple-one uppercase text-primary rounded-full flex items-center justify-center font-semibold h-10 w-10">
          {{ currentUser?.name[0] }}{{ currentUser?.name[1] }}
        </span>
        <div>
          <h4 class="font-bold text-sm">{{ currentUser?.name }}</h4>
          <p class="text-purple-one text-sm capitalize">
            {{ currentUser?.primary_role }}
          </p>
        </div>
      </div>
      <ui-button size="icon" variant="ghost" class="hover:bg-primary-hover">
        <LogOut :size="24" color="white" />
      </ui-button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { BookOpen, Box, ChartPie, Check, Dock, LogOut, MessageCircleMore, Settings, Users } from 'lucide-vue-next'
import { useUserStore } from "@/store/user";
import Home from '~/components/icons/home.vue'
import CreditCard from '~/components/icons/card.vue'

const userStore = useUserStore();
const currentUser = computed(() => userStore.getUserInfo);
const search = ref("");

const navLinks = [
  { id: 1, url: '', name: 'Home', icon: Home },
  { id: 2, url: '/users?page=1&per_page=10', name: 'Users', icon: Users },
  { id: 3, url: '/ixl-checklist', name: 'IXL Checklist', icon: Check },
  { id: 4, url: "/ixl-portal", name: "IXL Portal", icon: BookOpen },
  { id: 5, url: '/performance', name: 'Performance', icon: ChartPie },
  { id: 6, url: '/subscription', name: 'Subscription', icon: CreditCard },
  { id: 7, url: "/feed", name: "Feed", icon: Box },
  { id: 8, url: "/settings", name: "Settings", icon: Settings },
  { id: 9, url: "/support", name: "Help & Support", icon: MessageCircleMore },
]
</script>

<style scoped>
.active-link {
  background-color: #5077FF;
}
</style>
