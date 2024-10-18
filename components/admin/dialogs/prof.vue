<template>
  <ui-dialog v-model:open="open" class="rounded-2xl">
    <ui-dialog-content class="max-w-md place-items-center gap-6">
      <span class="rounded-full bg-primary/5 inline-flex justify-center items-center h-20 w-20 text-primary">
        <Users :size="32" stroke-width="3" />
      </span>
      <ui-dialog-header>
        <ui-dialog-description class="text-center mb-2">
          {{ props.message }}
        </ui-dialog-description>
        <ui-dialog-title class="text-center font-bold text-2xl max-w-64 mx-auto">
          {{ props.title }}
        </ui-dialog-title>
      </ui-dialog-header>
      <AdminFormsAssignTutorProf @assignTutor="handleAssignTutor" />
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

const emit = defineEmits()

function handleAssignTutor(formData: any) {
  emit('assignProfTutor', formData)
}
</script>
