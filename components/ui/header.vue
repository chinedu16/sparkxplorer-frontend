<template>
  <header
    class="w-full shrink-0 px-6 sticky z-30 top-0 border-slate-200 border-b items-center h-16 flex gap-6 justify-between">
    <div class="flex items-center gap-6 flex-1">
      <div class="md:w-[234px] flex justify-center gap-6">
        <!-- ToDo: Menu button? -->
        <NuxtLink href="/" class="flex items-center shrink-0 w-[137px]">
          <img :src="BrandLogo" alt="SparkXplorer logo" />
        </NuxtLink>
      </div>
      <h1 class="font-bold text-2xl">Hello {{ currentUser?.name || '' }}</h1>
    </div>
    <div class="flex items-center gap-3">
      <ui-button size="icon" variant="ghost" class="bg-slate-50">
        <Bell :size="20" />
      </ui-button>
      <ui-dropdown-menu>
        <ui-dropdown-menu-trigger as-child>
          <ui-button variant="ghost" class="flex items-center gap-2 capitalize">
            <ui-avatar size="sm" class="bg-primary/5">
              <ui-avatar-image v-if="currentUser?.picture_url" :src="currentUser.picture_url"
                :alt="`${currentUser?.name} profile picture`" />
              <ui-avatar-fallback class="text-base uppercase text-primary font-semibold">
                {{ currentUser?.name[0] }}{{ currentUser?.name[1] }}
              </ui-avatar-fallback>
            </ui-avatar>
            {{ currentUser?.name }}
            <ChevronDown size="16" />
          </ui-button>
        </ui-dropdown-menu-trigger>
        <ui-dropdown-menu-content class="w-56">
          <ui-dropdown-menu-label class="flex items-center gap-2">
            <ui-avatar size="sm" class="bg-primary/10">
              <ui-avatar-image v-if="currentUser?.picture_url" :src="currentUser.picture_url"
                :alt="`${currentUser?.name} profile picture`" />
              <ui-avatar-fallback class="text-base uppercase text-primary font-semibold">
                {{ currentUser?.name[0] }}{{ currentUser?.name[1] }}
              </ui-avatar-fallback>
            </ui-avatar>
            <div class="">
              <span class="capitalize font-medium block truncate">
                {{ currentUser?.name }}
              </span>
              <span class="block text-muted-foreground truncate">
                <small>{{ currentUser?.email }}</small>
              </span>
            </div>
          </ui-dropdown-menu-label>
          <ui-dropdown-menu-separator />
          <ui-dropdown-menu-group>
            <ui-dropdown-menu-item class="p-0">
              <ui-button as-child variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start">
                <nuxt-link to="/admin/settings">
                  <Settings size="16" />
                  Account Settings
                </nuxt-link>
              </ui-button>
            </ui-dropdown-menu-item>
            <ui-dropdown-menu-item class="p-0">
              <ui-button as-child variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start">
                <nuxt-link to="/admin/users">
                  <Users size="16" />
                  Users
                </nuxt-link>
              </ui-button>
            </ui-dropdown-menu-item>
            <ui-dropdown-menu-item class="p-0">
              <ui-button as-child variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start">
                <nuxt-link to="/admin/subscriptions">
                  <CreditCard size="16" />
                  Subscriptions
                </nuxt-link>
              </ui-button>
            </ui-dropdown-menu-item>
          </ui-dropdown-menu-group>
          <ui-dropdown-menu-separator />
          <ui-dropdown-menu-group>
            <ui-dropdown-menu-item as-child class="py-0">
              <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3">
                <RefreshCw size="16" />
                Switch to parent account
              </ui-button>
            </ui-dropdown-menu-item>
            <ui-dropdown-menu-item as-child class="py-0">
              <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3">
                <RefreshCw size="16" />
                Switch to tutor account
              </ui-button>
            </ui-dropdown-menu-item>
            <ui-dropdown-menu-item as-child class="py-0">
              <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3">
                <RefreshCw size="16" />
                Switch to IXL portal
              </ui-button>
            </ui-dropdown-menu-item>
          </ui-dropdown-menu-group>
          <ui-dropdown-menu-separator />
          <ui-dropdown-menu-item class="p-0">
            <ui-button as-child variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start">
              <nuxt-link to="/admin/support">
                <Headphones size="16" />
                Support
              </nuxt-link>
            </ui-button>
          </ui-dropdown-menu-item>
          <ui-dropdown-menu-separator />
          <ui-dropdown-menu-item as-child class="py-0">
            <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3">
              <User size="16" />
              <span class="text-destructive">Sign out</span>
            </ui-button>
          </ui-dropdown-menu-item>
        </ui-dropdown-menu-content>
      </ui-dropdown-menu>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";
import BrandLogo from '~/assets/images/illustrations/home/logo.png'
import { Bell, Headphones, CreditCard, ChevronDown, Settings, RefreshCw, Users, User } from 'lucide-vue-next'

const userStore = useUserStore();
const currentUser = computed(() => userStore.getUserInfo);
</script>
