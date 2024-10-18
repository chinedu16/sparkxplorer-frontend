<template>
  <ui-dialog v-model:open="open" class="rounded-2xl">
    <ui-dialog-trigger as-child>
      <ui-button size="sm" class="gap-2">
        <Users :size="16" />
        Add Tutor
      </ui-button>
    </ui-dialog-trigger>
    <ui-dialog-content class="max-w-md place-items-center gap-6">
      <span class="rounded-full bg-primary/5 inline-flex justify-center items-center h-20 w-20 text-primary">
        <Users :size="32" stroke-width="3" />
      </span>
      <ui-dialog-header>
        <ui-dialog-description class="text-center mb-2">
          We&apos;ll fine tune our features to be personalized for you.
        </ui-dialog-description>
        <ui-dialog-title class="text-center font-bold text-2xl max-w-64 mx-auto">
          Add a tutor
        </ui-dialog-title>
      </ui-dialog-header>
      <AdminFormsAddTutor @addTutor="handleAddTutor" />
    </ui-dialog-content>
  </ui-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Users } from 'lucide-vue-next'

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

const open = ref(false)

function handleAssignTutor(formData: any) {
  console.log(formData)
}
</script>
