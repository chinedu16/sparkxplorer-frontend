<template>
    <form class="space-y-10 mt-9" @submit="onSubmit">
        <div class="grid md:grid-cols-3 gap-5">
            <div class="bg-primary-light p-4 rounded-lg flex items-center gap-2">
                <span class="w-10 h-10 rounded-lg bg-primary shrink-0 flex items-center justify-center text-white">
                    <Phone size="20" />
                </span>
                <div class="">
                    <h5 class="text-primary-600 text-sm mb-2">Call Us</h5>
                    <span class="text-xs block mb-1">+12343445454545</span>
                    <span class="text-xs block">+12343445454545</span>
                </div>
            </div>
            <div class="bg-primary-light p-4 rounded-lg flex items-center gap-2">
                <span class="w-10 h-10 rounded-lg bg-primary shrink-0 flex items-center justify-center text-white">
                    <Mail size="20" />
                </span>
                <div class="">
                    <h5 class="text-primary-600 text-sm mb-2">Email Us</h5>
                    <span class="text-sm block mb-1">hello@sparkxplorer.com</span>
                </div>
            </div>
            <div class="bg-primary-light p-4 rounded-lg flex items-center gap-2">
                <span class="w-10 h-10 rounded-lg bg-primary shrink-0 flex items-center justify-center text-white">
                    <MapPin size="20" />
                </span>
                <div class="">
                    <h5 class="text-primary-600 text-sm mb-2">Address</h5>
                    <span class="text-sm block mb-1">USA</span>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-5 text-sm">
            <span class="h-px w-full bg-black"></span>
            OR
            <span class="h-px w-full bg-black"></span>
        </div>
        <div class="grid grid-cols-2 gap-6">
            <div class="bg-primary-light rounded-md p-4 md:px-6 space-y-2">
                <label for="fullName" class="text-sm font-medium">Full Name</label>
                <ui-input id="fullName" name="fullName" placeholder="Type here"
                    class="border-foreground bg-transparent border-0 border-b rounded-none focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:border-b-2 focus-visible:border-primary" />
            </div>
            <div class="bg-primary-light rounded-md p-4 md:px-6 space-y-2">
                <label for="email" class="text-sm font-medium">Email</label>
                <ui-input id="email" name="Email" type="email" placeholder="Type here"
                    class="border-foreground bg-transparent border-0 border-b rounded-none focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:border-b-2 focus-visible:border-primary" />
            </div>
            <div class="bg-primary-light rounded-md p-4 md:px-6 space-y-2 col-span-2">
                <label for="message" class="text-sm font-medium">Your Message</label>
                <ui-textarea id="message" name="message" placeholder="Type here"
                    class="border-foreground bg-transparent border-0 border-b rounded-none focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:border-b-2 focus-visible:border-primary" />
            </div>
        </div>
        <div class="text-center">
            <ui-button type="submit" :disable="loading" size="lg" class="w-full max-w-md gap-2">
                Submit &rarr;
                <LoaderCircle v-if="loading" class="w-4 h-4 animate-spin" />
            </ui-button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { MapPin, Mail, Phone, LoaderCircle } from 'lucide-vue-next'

const loading = ref(false);
const formData = ref({
    fullName: '',
    email: "",
    message: '',
});

const validationSchema = yup.object({
    fullName: yup
        .string()
        .required("Email is required")
        .min(2, 'Must be at least two characters'),
    email: yup
        .string()
        .required("Email is required")
        .email("Enter a valid email address"),
    message: yup
        .string()
        .required("Message is required"),
});

const { handleSubmit } = useForm({
    validationSchema,
    initialValues: formData.value,
});

const onSubmit = handleSubmit(async (values) => {
    console.log(values)
})
</script>
