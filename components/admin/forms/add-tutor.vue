<script setup lang="ts">
import { Field as FormField } from 'vee-validate'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import { User2, Mail, Phone, Users } from 'lucide-vue-next'

const emit = defineEmits()

const formSchema = toTypedSchema(yup.object({
  firstname: yup.string().min(2).max(50).required('First name is required'),
  lastname: yup.string().min(2).max(50).required('Last name is required'),
  email: yup.string().min(2).max(50).required('Email is required'),
  phone: yup.string().length(10).required('Telephone number is required'),
  type: yup.string().required('Tutor type is required'),
}))

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
})

const isDisabled = computed(() => {
  const fieldErrors = Object.values(errors).some((error) => {
    console.log(error)
    return false
  })
  console.log(fieldErrors)
  return fieldErrors
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
  emit('addTutor', 'values')
})
</script>

<template>
  <form class="space-y-5 w-full px-5 overflow-y-auto" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="firstname">
      <ui-form-item class="w-full">
        <ui-form-label>First Name</ui-form-label>
        <div class="relative">
          <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
            <User2 size="20" />
          </span>
          <ui-form-control>
            <ui-input type="text" placeholder="First name" class="border-muted-foreground pl-10"
              v-bind="componentField" />
          </ui-form-control>
        </div>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <FormField v-slot="{ componentField }" name="lastname">
      <ui-form-item class="w-full">
        <ui-form-label>Last Name</ui-form-label>
        <div class="relative">
          <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
            <User2 size="20" />
          </span>
          <ui-form-control>
            <ui-input type="text" placeholder="Last name" class="border-muted-foreground pl-10"
              v-bind="componentField" />
          </ui-form-control>
        </div>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <FormField v-slot="{ componentField }" name="email">
      <ui-form-item class="w-full">
        <ui-form-label>Email</ui-form-label>
        <div class="relative">
          <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
            <Mail size="20" />
          </span>
          <ui-form-control>
            <ui-input type="text" placeholder="Email" class="border-muted-foreground pl-10" v-bind="componentField" />
          </ui-form-control>
        </div>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <FormField v-slot="{ componentField }" name="phone">
      <ui-form-item class="w-full">
        <ui-form-label>Telephone Number</ui-form-label>
        <div class="relative">
          <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
            <Phone size="20" />
          </span>
          <ui-form-control>
            <ui-input type="text" placeholder="+1489479370" class="border-muted-foreground pl-10"
              v-bind="componentField" />
          </ui-form-control>
        </div>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <FormField v-slot="{ componentField }" name="type">
      <ui-form-item>
        <ui-form-label>Type</ui-form-label>
        <ui-select v-bind="componentField">
          <ui-form-control>
            <ui-select-trigger class="border-muted-foreground rounded-full">
              <ui-select-value placeholder="Select tutor type" />
            </ui-select-trigger>
          </ui-form-control>
          <ui-select-content>
            <ui-selectItem value="professional">Professional</ui-selectItem>
            <ui-selectItem value="peer-to-peer">Peer to Peer</ui-selectItem>
          </ui-select-content>
        </ui-select>
        <ui-form-message />
      </ui-form-item>
    </FormField>
    <div class="py-5">
      <ui-button type="submit" size="lg" :disabled="isDisabled" class="gap-3 w-full">
        <Users2 :size="16" />
        Add Tutor
      </ui-button>
    </div>
  </form>
</template>