<template>
  <aside class="flex flex-col px-4 py-8 h-full">
    <img class="w-28" src="~/assets/images/icons/logo-white.svg" alt="" />
    <div class="my-8">
      <base-input
        v-model="search"
        name="username"
        label=""
        placeholder="Search"
        type="text"
        iconPrefix="search"
        variant="transparent"
      />
    </div>
    <nav>
      <ul class="space-y-2">
        <li v-for="i in navLink" :key="i.id">
          <nuxt-link
            :to="`/dashboard${i.url}`"
            active-class="active-link"
            class="hover:text-white p-3 text-blue-six flex items-center space-x-3 rounded-lg"
          >
            <img :src="`/icons/${i.icon}.svg`" alt="">
            <span class="font-bold">{{ i.name }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <!-- Bottom Links -->
    <div class="mt-auto space-y-6 border-t border-white pt-6">
      <div class="flex justify-between items-center">
        <div class="flex space-x-2">
          <div class="bg-purple-one text-primary rounded-full flex items-center justify-center font-bold text-base h-10 w-10">
            OD
          </div>
          <div>
            <h4 class="font-bold">Odafe David</h4>
            <p class="text-purple-one">Parent</p>
          </div>
        </div>
        <img class="w-8 h-8" src="/icons/sign-out.svg" alt="" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const search = ref("");

const navLink = ref([
  { id: 1, url: '/', name: 'Home', icon: 'home' },
  { id: 2, url: '/scholars', name: 'Scholars', icon: 'scholar' },
  { id: 3, url: '/feed', name: 'Feed', icon: 'feed' },
  { id: 4, url: '/subscription', name: 'Subscription', icon: 'subscription' },
  { id: 5, url: '/settings', name: 'Settings', icon: 'settings' },
  { id: 6, url: '/help-and-support', name: 'Help & Support', icon: 'help' },
]);
</script>

<style scoped>
.active-link {
  background-color: #6366F1;
  /* color: #1f2937;  */
}

.active-link img {
  /* filter: brightness(0) invert(0);  */
}

.hover\:text-white:hover {
  color: white;
}
</style>
