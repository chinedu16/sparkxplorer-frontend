<script setup lang="ts">
import { ref } from 'vue'
import { MoreVertical, Check, X } from 'lucide-vue-next'
import type { User } from '~/types';

defineProps<{
  user: User
}>()

const openMenu = ref(false);
const openActivateModal = ref(false);
const openDeactivateModal = ref(false);

const handleActivateUser = async (payload: string | string[]) => {
  console.log('handleActivateUser', payload)
  // TODO: user activation
  openActivateModal.value = false
}

const handleDeactivateUser = async (payload: string | string[]) => {
  console.log('handleDeactivateUser', payload)
  // TODO: user deactivation
  openDeactivateModal.value = false
}
</script>

<template>
  <ui-dropdown-menu>
    <ui-dropdown-menu-trigger as-child>
      <ui-button variant="ghost" class="p-0" @click="(e) => { openMenu = true; e.stopPropagation() }">
        <span class="sr-only">Open menu</span>
        <MoreVertical />
      </ui-button>
    </ui-dropdown-menu-trigger>
    <ui-dropdown-menu-content align="end">
      <ui-dropdown-menu-item v-if="user.status === 'deactivated'" as-child class="py-0">
        <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3"
          @click="openActivateModal = true">
          <X :size="16" stroke-width="4" color="green" />
          Activate
        </ui-button>
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item v-if="user.status === 'activated'" as-child class="py-0">
        <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3"
          @click="openDeactivateModal = true">
          <X :size="16" stroke-width="4" color="red" />
          Deactivate
        </ui-button>
      </ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ui-dropdown-menu>

  <admin-dialogs-activate :open="openActivateModal" title="Activate this User?"
    message="Activating this user means the user will have access to IXL portal."
    @update:open="openActivateModal = false" @activateUser="handleActivateUser" />
  <admin-dialogs-deactivate :open="openDeactivateModal" title="Deactivate this User?"
    message="Deactivating this user means the user wont be able to access IXL portal."
    @update:open="openDeactivateModal = false" @deactivateUser="handleDeactivateUser" />
</template>