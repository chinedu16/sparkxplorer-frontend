<script setup lang="ts">
import { Field as FormField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as yup from 'yup'
// import { toast } from '@/components/ui/toast'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown, Users2 } from 'lucide-vue-next'

const emit = defineEmits()

const formSchema = toTypedSchema(yup.object({
  tutor: yup.string().min(1).max(50).required('Tutor name is required'),
  scholar: yup.string().min(1).max(50).required('Scholar name is required'),
  period: yup.number().min(1).max(24).required('Period is required'),
}))

const { handleSubmit, setFieldValue, values, errors } = useForm({
  validationSchema: formSchema,
})

const isDisabled = computed(() => !values.period || !values.scholar || !values.tutor)

const tutors = [
  { value: '1', label: 'Mike Spence' },
  { value: '2', label: 'Sean Roque' },
  { value: '3', label: 'Millie Cutley' },
  { value: '4', label: 'Dani Michaels' },
]

const scholars = [
  { value: '1', label: 'Mike Spence' },
  { value: '2', label: 'Sean Roque' },
  { value: '3', label: 'Millie Cutley' },
  { value: '4', label: 'Dani Michaels' },
]

const onSubmit = handleSubmit((values) => {
  emit('assignTutor', values)
})
</script>

<template>
  <form class="space-y-12 w-full max-w-xs mt-8 overflow-y-auto mx-auto" @submit="onSubmit">
    <FormField name="tutor">
      <ui-form-item class="flex flex-col w-full">
        <ui-form-label>Tutor Name</ui-form-label>
        <ui-popover>
          <ui-popover-trigger as-child>
            <ui-form-control>
              <ui-button variant="outline" role="combobox"
                :class="cn('w-full justify-between', !values.tutor && 'text-muted-foreground')">
                {{ values.tutor ? tutors.find(
                  (tutor) => tutor.value === values.tutor,
                )?.label : 'Select tutor...' }}
                <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </ui-button>
            </ui-form-control>
          </ui-popover-trigger>
          <ui-popover-content class="w-full p-0">
            <ui-command>
              <ui-command-input placeholder="Search tutor..." />
              <ui-command-empty>Nothing found.</ui-command-empty>
              <ui-command-list>
                <ui-command-group>
                  <ui-command-item v-for="tutor in tutors" :key="tutor.value" :value="tutor.label" @select="() => {
                    setFieldValue('tutor', tutor.value)
                  }">
                    <Check :class="cn('mr-2 h-4 w-4', tutor.value === values.tutor ? 'opacity-100' : 'opacity-0')" />
                    {{ tutor.label }}
                  </ui-command-item>
                </ui-command-group>
              </ui-command-list>
            </ui-command>
          </ui-popover-content>
        </ui-popover>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <span class="text-center block font-semibold text-sm">Assign tutor to</span>
    <FormField name="scholar">
      <ui-form-item class="flex flex-col w-full">
        <ui-form-label>Scholar Name</ui-form-label>
        <ui-popover>
          <ui-popover-trigger as-child>
            <ui-form-control>
              <ui-button variant="outline" role="combobox"
                :class="cn('w-full justify-between', !values.scholar && 'text-muted-foreground')">
                {{ values.scholar ? scholars.find(
                  (scholar) => scholar.value === values.scholar,
                )?.label : 'Select scholar...' }}
                <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </ui-button>
            </ui-form-control>
          </ui-popover-trigger>
          <ui-popover-content class="w-full p-0">
            <ui-command>
              <ui-command-input placeholder="Search scholar..." />
              <ui-command-empty>Nothing found.</ui-command-empty>
              <ui-command-list>
                <ui-command-group>
                  <ui-command-item v-for="scholar in scholars" :key="scholar.value" :value="scholar.label" @select="() => {
                    setFieldValue('scholar', scholar.value)
                  }">
                    <Check
                      :class="cn('mr-2 h-4 w-4', scholar.value === values.scholar ? 'opacity-100' : 'opacity-0')" />
                    {{ scholar.label }}
                  </ui-command-item>
                </ui-command-group>
              </ui-command-list>
            </ui-command>
          </ui-popover-content>
        </ui-popover>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <FormField v-slot="{ value }" name="period">
      <ui-form-item class="w-full">
        <ui-form-label>Set maximum number of hours</ui-form-label>
        <ui-number-field class="gap-2" :min="1" :model-value="value" @update:model-value="(v) => {
          if (v) {
            setFieldValue('period', v)
          }
          else {
            setFieldValue('period', undefined)
          }
        }">
          <ui-number-field-content>
            <ui-number-field-decrement />
            <ui-form-control>
              <ui-number-field-input />
            </ui-form-control>
            <ui-number-field-increment />
          </ui-number-field-content>
        </ui-number-field>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <ui-button type="submit" :disabled="isDisabled" class="gap-3 w-full">
      <Users2 :size="16" />
      Assign Tutor
    </ui-button>
  </form>
</template>