<script setup lang="ts">
import { Field as FormField } from 'vee-validate'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import { User2, Mail, Phone, Users } from 'lucide-vue-next'
import type { User } from '~/types'

const emit = defineEmits()
const { parent } = defineProps<{
  parent: User
}>()

const formSchema = toTypedSchema(yup.object({
  firstname: yup.string().min(2).max(50).required('First name is required'),
  lastname: yup.string().min(2).max(50).required('Last name is required'),
  email: yup.string().min(2).max(50).required('Email is required'),
  phone: yup.string().length(10).required('Telephone number is required'),
  role: yup.string().required('User role is required'),
  numOfScholars: yup.string().min(1).required('This field is required'),
  subscriptionPackage: yup.string().min(1).required('This field is required')
}))

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: parent.email || 'serah@gmail.com',
    firstname: parent.name?.split(' ')[0] || 'Serah',
    lastname: parent.name?.split(' ')[1] || 'Cortez',
    // @ts-expect-error
    phone: parent.phone || '',
    role: parent.role_name || 'parent',
    // @ts-expect-error
    numOfScholars: parent.numScholars || 3,
    // @ts-expect-error
    subscriptionPackage: parent.subPackage || ""
  }
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
  emit('saveDetails', 'values')
})
</script>

<template>
  <h3 class="font-semibold capitalize mb-1">Profile</h3>
  <p class="text-sm">{{ parent?.name || 'Serah' }}'s Profile</p>
  <hr class="bg-muted my-2">
  <form class="w-full pb-12 overflow-y-auto" @submit="onSubmit">
    <div class="space-y-5 max-w-2xl">
      <FormField v-slot="{ componentField }" name="firstname">
        <ui-form-item class="w-full grid grid-cols-[15rem_1fr] items-center">
          <ui-form-label>First Name</ui-form-label>
          <div class="relative">
            <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
              <User2 size="20" />
            </span>
            <ui-form-control>
              <ui-input type="text" placeholder="First name" disabled
                class="border-muted-foreground pl-10 disabled:opacity-100" v-bind="componentField" />
            </ui-form-control>
          </div>
          <ui-form-message />
        </ui-form-item>
      </FormField>
      <FormField v-slot="{ componentField }" name="lastname">
        <ui-form-item class="grid grid-cols-[15rem_1fr] items-center w-full">
          <ui-form-label>Last Name</ui-form-label>
          <div class="relative">
            <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
              <User2 size="20" />
            </span>
            <ui-form-control>
              <ui-input type="text" placeholder="Last name" disabled
                class="border-muted-foreground pl-10 disabled:opacity-100" v-bind="componentField" />
            </ui-form-control>
          </div>
          <ui-form-message />
        </ui-form-item>
      </FormField>
    </div>
    <hr class="bg-muted my-4">
    <div class="space-y-5 max-w-2xl">
      <FormField v-slot="{ componentField }" name="phone">
        <ui-form-item class="grid grid-cols-[15rem_1fr] items-center w-full">
          <ui-form-label>Telephone Number</ui-form-label>
          <div class="relative">
            <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
              <Phone size="20" />
            </span>
            <ui-form-control>
              <ui-input type="text" placeholder="+1489479370" disabled
                class="border-muted-foreground pl-10 disabled:opacity-100" v-bind="componentField" />
            </ui-form-control>
          </div>
          <ui-form-message />
        </ui-form-item>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <ui-form-item class="grid grid-cols-[15rem_1fr] items-center w-full">
          <ui-form-label>Email</ui-form-label>
          <div class="relative">
            <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
              <Mail size="20" />
            </span>
            <ui-form-control>
              <ui-input type="text" placeholder="Email" disabled
                class="border-muted-foreground pl-10 disabled:opacity-100" v-bind="componentField" />
            </ui-form-control>
          </div>
          <ui-form-message />
        </ui-form-item>
      </FormField>
      <FormField v-slot="{ componentField }" name="role">
        <ui-form-item class="grid grid-cols-[15rem_1fr] items-center w-full">
          <ui-form-label>Role</ui-form-label>
          <div class="relative">
            <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
              <Users size="20" />
            </span>
            <ui-form-control>
              <ui-input type="text" placeholder="Role" disabled
                class="border-muted-foreground pl-10 disabled:opacity-100" v-bind="componentField" />
            </ui-form-control>
          </div>
          <ui-form-message />
        </ui-form-item>
      </FormField>
      <FormField v-slot="{ value }" name="numOfScholars">
        <ui-form-item class="grid grid-cols-[15rem_1fr] items-center w-full">
          <ui-form-label>Number of scholars</ui-form-label>
          <ui-number-field class="gap-2" :min="1" :model-value="value" @update:model-value="(v) => {
            if (v) {
              setFieldValue('numOfScholars', v)
            }
            else {
              setFieldValue('numOfScholars', undefined)
            }
          }">
            <ui-number-field-content>
              <ui-number-field-decrement />
              <ui-form-control>
                <ui-number-field-input class="rounded-full border-muted-foreground disabled:opacity-100" disabled />
              </ui-form-control>
              <ui-number-field-increment />
            </ui-number-field-content>
          </ui-number-field>
          <ui-form-message />
        </ui-form-item>
      </FormField>
      <FormField v-slot="{ componentField }" name="subscriptionPackage">
        <ui-form-item class="grid grid-cols-[15rem_1fr] items-center">
          <ui-form-label>Subscription Package</ui-form-label>
          <ui-select v-bind="componentField" disabled>
            <ui-form-control>
              <ui-select-trigger class="border-muted-foreground rounded-full disabled:opacity-100">
                <User2 size="20" />
                <ui-select-value placeholder="Select subscription package" />
              </ui-select-trigger>
            </ui-form-control>
            <ui-select-content>
              <ui-selectItem value="admin">Scholar & Tutor</ui-selectItem>
            </ui-select-content>
          </ui-select>
          <ui-form-message />
        </ui-form-item>
      </FormField>
    </div>
  </form>
</template>