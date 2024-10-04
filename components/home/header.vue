<template>
  <header class="bg-primary-100 w-full flex-shrink-0 px-4 md:px-6 xl:px-0 text-primary-foreground">
    <div class="max-w-screen-xl flex items-center w-full h-16 mx-auto md:h-20 justify-between">
      <!-- Logo -->
      <NuxtLink href="/" class="flex items-center w-[137px]">
        <img :src="BrandLogo" alt="SparkXplorer logo" />
      </NuxtLink>
      <button v-if="!isDrawerOpen"
        class="lg:hidden inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 hover:bg-primary/10 focus-visible:ring-primary h-10 w-10 py-2"
        @click="openMenu">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <nav class="hidden items-center justify-end gap-4 lg:flex max-w-max order-1" id="navbar-cta">
        <ul class="flex font-semibold items-center group list-none">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href"
              :class="['group inline-flex w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:text-primary focus:text-primary focus:outline-none']">{{
                link.name }}</a>
          </li>
        </ul>
        <nuxt-link href="/auth/login"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-10 px-4 w-40 bg-primary-600 text-white hover:bg-primary-600/90 py-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30">Log
          in &rarr;</nuxt-link>
        <nuxt-link href="/auth/signup"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-10 px-4 w-40 border border-primary text-primary hover:bg-primary-600/10 py-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30">Sign
          up &rarr;</nuxt-link>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="slide">
        <aside v-if="isDrawerOpen" class="fixed inset-0 z-30" tabindex="-1" aria-labelledby="drawer-navigation-label"
          @click="isDrawerOpen = false">
          <div
            :class="['py-6 h-screen bg-primary-100 duration-500 ease-in-out z-40 relative w-72 transition-transform font-semibold', isDrawerOpen ? 'translate-x-0' : '-translate-x-full']">
            <NuxtLink href="/" class="flex items-center w-[137px] mx-6">
              <img :src="BrandLogo" alt="SparkXplorer logo" />
            </NuxtLink>
            <nav class="py-5 overflow-y-autofont-semibold">
              <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                class="bg-transparent hover:bg-primary-600/10 rounded-full w-10 h-10 absolute top-5 text-gray-500 z-40 end-5 inline-flex items-center justify-center"
                @click="isDrawerOpen = false">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
              </button>
              <ul class="space-y-4 my-8">
                <li v-for="link in navLinks" :key="link.name">
                  <a :href="link.href" class="flex items-center px-6 h-10 hover:text-primary group">
                    {{ link.name }}
                  </a>
                </li>
              </ul>
              <div class="space-y-4 px-6">
                <nuxt-link href="/auth/login"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-10 px-4 w-full bg-primary-600 text-white hover:bg-primary-600/90 py-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30">Log
                  in &rarr;</nuxt-link>
                <nuxt-link href="/auth/signup"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-10 px-4 w-full border border-primary text-primary hover:bg-primary-600/10 py-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30">Sign
                  up &rarr;</nuxt-link>
              </div>
            </nav>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import BrandLogo from '~/assets/images/illustrations/home/logo.png'

const isDrawerOpen = ref(false)
const navLinks = [
  { name: 'Programs', href: '#programs' },
  { name: 'Key Features', href: '#key-features' },
  { name: 'Package', href: '#package' },
  { name: 'Contact Us', href: '#contact-us' },
]

function openMenu() {
  console.log('open menu')
  isDrawerOpen.value = true
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>