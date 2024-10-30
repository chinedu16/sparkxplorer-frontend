<template>
  <ui-dialog v-model:open="open" class="rounded-2xl">
    <ui-dialog-trigger as-child>
      <ui-button size="icon" class="rounded-full bg-red-50 text-destructive hover:bg-red-100">
        <X :size="20" />
      </ui-button>
    </ui-dialog-trigger>
    <ui-dialog-content class="max-w-md">
      <span class="rounded-full bg-destructive/30 inline-flex justify-center items-center h-12 w-12 text-destructive">
        <X :size="24" stroke-width="4" />
      </span>
      <ui-dialog-header>
        <ui-dialog-title class="my-2">Reject Request?</ui-dialog-title>
        <ui-dialog-description>
          Are you sure you want to reject this request?
        </ui-dialog-description>
      </ui-dialog-header>
      <ui-dialog-footer>
        <ui-dialog-close as-child>
          <ui-button type="button" variant="outline">Cancel</ui-button>
        </ui-dialog-close>
        <ui-button type="button" variant="success" @click="handleReject()">
          <X :size="18" />
          Reject
        </ui-button>
      </ui-dialog-footer>
    </ui-dialog-content>
  </ui-dialog>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

const { user } = defineProps<{
  user: Record<string, string | number>
}>()

const open = ref(false);

const handleReject = async () => {
  console.log('handleReject', user)
  // TODO: reject request
  open.value = false
}
</script>
