<template>
  <ui-dialog v-model:open="open" class="rounded-2xl">
    <ui-dialog-content class="max-w-md">
      <span class="rounded-full bg-success/30 inline-flex justify-center items-center h-12 w-12 text-success">
        <Check :size="24" stroke-width="4" />
      </span>
      <ui-dialog-header>
        <ui-dialog-title>{{ props.title }}</ui-dialog-title>
        <ui-dialog-description>
          {{ props.message }}
        </ui-dialog-description>
      </ui-dialog-header>
      <ui-dialog-footer>
        <ui-dialog-close as-child>
          <ui-button type="button" variant="outline">Cancel</ui-button>
        </ui-dialog-close>
        <ui-button type="button" variant="success" @click="$emit('activateUser')">
          <Check :size="18" />
          Activate
        </ui-button>
      </ui-dialog-footer>
    </ui-dialog-content>
  </ui-dialog>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  }
})
</script>
