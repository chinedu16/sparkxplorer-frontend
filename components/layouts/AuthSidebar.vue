<template>
  <aside class="h-screen flex flex-col">
    <div class="bg-gray-three h-24 flex items-center justify-center">
      <img src="~/assets/images/icons/logo-blue.svg" alt="" />
    </div>
    <div class="flex bg-[#4F46E5] flex-col justify-between px-4 py-8 flex-grow">
      <div class="my-8 overflow-y-auto">
        <base-input
          v-model="search"
          name="username"
          label=""
          placeholder="Search"
          type="text"
          iconPrefix="search"
          variant="transparent"
        />
        <nav>
          <ul class="space-y-3">
            <li v-for="(item, index) in filteredNavLinks" :key="index">
              <nuxt-link
                :to="`/dashboard${item.url}`"
                active-class="active-link"
                class="hover:text-white p-3 text-blue-six flex items-center space-x-3 rounded-full"
              >
                <img :src="`/icons/${item.icon}.svg`" alt="" />
                <span class="font-bold">{{ item.name }}</span>
              </nuxt-link>
              <ul v-if="item.children" class="space-y-1 ml-6">
                <li v-for="child in item.children" :key="child.url">
                  <nuxt-link
                    :to="`/dashboard${child.url}`"
                    active-class="active-link"
                    class="hover:text-white p-2 text-blue-six flex items-center space-x-3 rounded-lg"
                  >
                    <span class="font-semibold">{{ child.name }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Bottom Links -->
      <div class="mt-auto space-y-6 border-t border-white pt-6">
        <div class="flex justify-between items-center">
          <div class="flex space-x-2">
            <div
              class="bg-purple-one uppercase text-primary rounded-full flex items-center justify-center font-bold text-base h-10 w-10"
            >
              {{ currentUser?.name[0] }}{{ currentUser?.name[1] }}
            </div>
            <div>
              <h4 class="font-bold">{{ currentUser?.name }}</h4>
              <p class="text-purple-one capitalize">
                {{ currentUser?.primary_role }}
              </p>
            </div>
          </div>
          <img class="w-8 h-8" src="/icons/sign-out.svg" alt="" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
const currentUser = computed(() => userStore.getUserInfo);
const search = ref("");

// Base navigation links for parent role
const baseNavLinks = [
  { id: 1, url: "/", name: "Home", icon: "home" },
  { id: 2, url: "/scholars", name: "Scholars", icon: "scholar" },
  { id: 3, url: "/tutors", name: "Tutors", icon: "tutor" },
  { id: 4, url: "/feed", name: "Feed", icon: "feed" },
  { id: 5, url: "/ixl-portal", name: "IXL Portal", icon: "ixl" },
  { id: 6, url: "/subscription", name: "Subscription", icon: "subscription" },
  { id: 7, url: "/profile", name: "Profile", icon: "profile" },
  { id: 8, url: "/help-and-support", name: "Help & Support", icon: "help" },
];

// Navigation links for scholar role
const scholarNavLinks = [
  { id: 1, url: "/", name: "Home", icon: "home" },
  { id: 2, url: "/ixl-portal", name: "IXL Portal", icon: "ixl" },
  // {
  //   id: 3,
  //   url: "/assessment",
  //   name: "Assessment",
  //   icon: "assessment",
  //   children: [
  //     { url: "/general-assessment", name: "General Assessment" },
  //     { url: "/tutor-assessment", name: "Tutor Assessment" },
  //   ],
  // },
  { id: 4, url: "/tutors", name: "Tutors", icon: "tutor" },
  { id: 5, url: "/feed", name: "Feed", icon: "feed" },
  { id: 6, url: "/profile", name: "Profile", icon: "profile" },
  { id: 7, url: "/help-and-support", name: "Help & Support", icon: "help" },
];

const filteredNavLinks = computed(() => {
  if (currentUser.value?.primary_role === "scholar") {
    return scholarNavLinks;
  }
  return baseNavLinks;
});
</script>

<style scoped>
.active-link {
  background-color: #6366f1;
}

.active-link img {
  /* Adjust styles if necessary */
}

.hover\:text-white:hover {
  color: white;
}
</style>
