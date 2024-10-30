<script setup lang="ts">
import { Field as FormField } from 'vee-validate'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import { User2, Mail, User, BookOpen } from 'lucide-vue-next'

const emit = defineEmits()
const { scholar } = defineProps<{
  scholar: Record<string, string>
}>()

const formSchema = toTypedSchema(yup.object({
  firstname: yup.string().min(2).max(50).required('First name is required'),
  lastname: yup.string().min(2).max(50).required('Last name is required'),
  email: yup.string().min(2).max(50).required('Email is required'),
  parent: yup.string().length(10).required('Parent is required'),
  courses: yup.string().required('Courses is required'),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: scholar.email,
    firstname: scholar.firstname,
    lastname: scholar.lastname,
    parent: scholar.phone,
    courses: scholar.courses,
  }
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
  emit('updateTutorProfile', 'values')
})
</script>

<template>
  <form class="w-full space-y-5 max-w-2xl py-8 overflow-y-auto" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="firstname">
      <ui-form-item class="w-full grid grid-cols-[12rem_1fr] items-center">
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
      <ui-form-item class="grid grid-cols-[12rem_1fr] items-center w-full">
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
    <FormField v-slot="{ componentField }" name="parent">
      <ui-form-item class="grid grid-cols-[12rem_1fr] items-center w-full">
        <ui-form-label>Parent</ui-form-label>
        <div class="relative">
          <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
            <User size="20" />
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
      <ui-form-item class="grid grid-cols-[12rem_1fr] items-center w-full">
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
    <FormField v-slot="{ componentField }" name="courses">
      <ui-form-item class="grid grid-cols-[12rem_1fr] items-center w-full">
        <ui-form-label>Courses</ui-form-label>
        <div class="relative">
          <span class="absolute h-10 w-10 inset-y-0 left-0 text-muted-foreground grid place-items-center">
            <BookOpen size="20" />
          </span>
          <ui-form-control>
            <ui-input type="text" placeholder="Courses" disabled
              class="border-muted-foreground pl-10 disabled:opacity-100" v-bind="componentField" />
          </ui-form-control>
        </div>
        <ui-form-message />
      </ui-form-item>
    </FormField>
  </form>
</template>