<template>
  <ui-dropdown-menu>
    <ui-dropdown-menu-trigger as-child>
      <ui-button size="sm" class="gap-2 capitalize">
        <Check size="16" />
        Activate/Deactivate
      </ui-button>
    </ui-dropdown-menu-trigger>
    <ui-dropdown-menu-content class="w-56">
      <ui-dropdown-menu-item as-child class="py-0">
        <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3"
          @click="openActivateModal = true">
          <Check size="16" stroke-width="4" color="green" />
          Activate
        </ui-button>
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-item as-child class="py-0">
        <ui-button variant="ghost" size="sm" class="gap-2 w-full font-normal rounded-none justify-start px-3"
          @click="openDeactivateModal = true">
          <X size="16" stroke-width="4" color="red" />
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

<script setup lang="ts">
import { ref } from 'vue'
import { Check, X } from 'lucide-vue-next'

const menu = ref();
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
