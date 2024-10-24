<template>
  <header class="bg-primary-light w-full flex-shrink-0 px-4 md:px-6 xl:px-0 text-foreground">
    <div class="max-w-screen-xl flex items-center w-full h-16 mx-auto md:h-20 justify-between">
      <!-- Logo -->
      <NuxtLink href="/" class="flex items-center w-[100px]">
        <img :src="BrandLogo" alt="SparkXplorer logo" />
      </NuxtLink>
      <ui-button v-if="!isDrawerOpen" size="icon" variant="ghost"
        class="rounded-full hover:bg-primary/5 lg:hidden focus-visible:ring-primary" @click="openMenu">
        <Menu :size="24" :stroke-width="3" />
      </ui-button>
      <nav class="hidden items-center justify-end gap-4 lg:flex max-w-max order-1" id="navbar-cta">
        <ul class="flex font-semibold items-center group list-none">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" :class="[
              'group inline-flex w-max items-center justify-center rounded-md px-4 py-2 text-sm transition-colors hover:text-primary focus:text-primary focus:outline-none',
            ]">{{ link.name }}</a>
          </li>
        </ul>
        <ui-dropdown-menu>
          <ui-dropdown-menu-trigger as-child>
            <ui-button size="sm" class="gap-2 capitalize w-40">
              Log
              in &darr;
            </ui-button>
          </ui-dropdown-menu-trigger>
          <ui-dropdown-menu-content class="w-48">
            <ui-dropdown-menu-item class="p-0">
              <ui-button as-child variant="ghost" size="sm" class="gap-4 w-full rounded-none">
                <a :href="ssoUrls?.spark_xplorer">
                  Login as scholar
                  <GradStudent class="text-primary w-4 h-4" />
                </a>
              </ui-button>
            </ui-dropdown-menu-item>
            <ui-dropdown-menu-item class="p-0">
              <ui-button as-child variant="ghost" size="sm" class="gap-4 w-full rounded-none">
                <nuxt-link to="/auth/login">
                  Login as parent
                  <User2 class="text-primary w-4 h-4" />
                </nuxt-link>
              </ui-button>
            </ui-dropdown-menu-item>
          </ui-dropdown-menu-content>
        </ui-dropdown-menu>
        <ui-button as-child variant="outline"
          class="w-40 border border-primary hover:border-primary-hover bg-inherit text-primary hover:bg-primary-600/15">
          <nuxt-link href="/auth/signup">Sign
            in &rarr;</nuxt-link>
        </ui-button>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="slide">
        <aside v-if="isDrawerOpen" class="fixed inset-0 z-30" tabindex="-1" aria-labelledby="drawer-navigation-label"
          @click="isDrawerOpen = false">
          <div
            :class="['py-6 h-screen bg-primary-light duration-500 ease-in-out z-40 relative w-72 transition-transform font-semibold', isDrawerOpen ? 'translate-x-0' : '-translate-x-full']">
            <NuxtLink href="/" class="flex items-center w-[137px] mx-6">
              <img :src="BrandLogo" alt="SparkXplorer logo" />
            </NuxtLink>
            <nav class="py-5 overflow-y-autofont-semibold">
              <ui-button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                size="icon" variant="ghost"
                class="rounded-full hover:bg-primary/5 text-muted-foreground absolute top-5 end-5 focus-visible:ring-primary"
                @click="openMenu">
                <X :size="24" />
              </ui-button>
              <ul class="space-y-4 my-8">
                <li v-for="link in navLinks" :key="link.name">
                  <a :href="link.href" class="flex items-center px-6 h-10 hover:text-primary group">
                    {{ link.name }}
                  </a>
                </li>
              </ul>
              <div class="space-y-4 px-6">
                <ui-button as-child class="gap-4 w-full">
                  <a :href="ssoUrls?.spark_xplorer">
                    Login as scholar
                    <GradStudent class="w-4 h-4" />
                  </a>
                </ui-button>
                <ui-button as-child class="gap-4 w-full">
                  <nuxt-link to="/auth/login">
                    Login as parent
                    <User2 class="w-4 h-4" />
                  </nuxt-link>
                </ui-button>
                <ui-button as-child variant="outline"
                  class="w-full border border-primary hover:border-primary-hover bg-inherit text-primary hover:bg-primary-600/15">
                  <nuxt-link href="/auth/signup">Sign
                    in &rarr;</nuxt-link>
                </ui-button>
              </div>
            </nav>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { Menu, User2, X } from 'lucide-vue-next'
import BrandLogo from '~/assets/images/illustrations/home/logo.png'
import { useAuthStore } from '~/store/auth';
import GradStudent from '@/components/icons/grad-student.vue';

const authStore = useAuthStore();
const isDrawerOpen = ref(false)
const loading = ref(false)

const ssoUrls = computed(() => authStore.getSSOUrls)

onMounted(() => {
  fetchSSOUrls();
});

const fetchSSOUrls = async () => {
  try {
    loading.value = true;
    await authStore.fetchSSOUrls();
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

function openMenu() {
  isDrawerOpen.value = true
}

const navLinks = [
  { name: 'Programs', href: '#programs' },
  { name: 'Key Features', href: '#key-features' },
  { name: 'Package', href: '#package' },
  { name: 'Contact Us', href: '#contact-us' },
]
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
