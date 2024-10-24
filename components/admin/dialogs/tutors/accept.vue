<template>
  <ui-dialog v-model:open="open" class="rounded-2xl">
    <ui-dialog-content class="max-w-md">
      <span class="rounded-full bg-success/30 inline-flex justify-center items-center h-12 w-12 text-success">
        <Check :size="24" stroke-width="4" />
      </span>
      <ui-dialog-header>
        <ui-dialog-title>Accept Request?</ui-dialog-title>
        <ui-dialog-description>
          Are you sure you want to accept this request?
        </ui-dialog-description>
      </ui-dialog-header>
      <ui-dialog-footer>
        <ui-dialog-close as-child>
          <ui-button type="button" variant="outline">Cancel</ui-button>
        </ui-dialog-close>
        <ui-button type="button" variant="success" @click="handleAccept()">
          <Check :size="18" />
          Accept
        </ui-button>
      </ui-dialog-footer>
    </ui-dialog-content>
  </ui-dialog>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const { user } = defineProps<{
  user: Record<string, string | number>
}>()

const open = ref(false);

const handleAccept = async () => {
  console.log('handleActivateUser', user)
  // TODO: accept request
  open.value = false
}
</script>
