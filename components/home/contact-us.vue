<template>
    <form class="space-y-10 mt-9" @submit="onSubmit">
        <div class="grid md:grid-cols-3 gap-5">
            <div class="bg-primary-100 p-4 rounded-lg flex items-center gap-2">
                <span class="w-10 h-10 rounded-lg bg-primary-600 shrink-0 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M22 16.92v3a2 2 0 0 1-2.18 2a19.8 19.8 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.8 12.8 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92" />
                    </svg>
                </span>
                <div class="">
                    <h5 class="text-primary-600 text-sm mb-2">Call Us</h5>
                    <span class="text-xs block mb-1">+12343445454545</span>
                    <span class="text-xs block">+12343445454545</span>
                </div>
            </div>
            <div class="bg-primary-100 p-4 rounded-lg flex items-center gap-2">
                <span class="w-10 h-10 rounded-lg bg-primary-600 shrink-0 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                            d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64" />
                        <path fill="currentColor"
                            d="M904 224L656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0l210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z" />
                    </svg>
                </span>
                <div class="">
                    <h5 class="text-primary-600 text-sm mb-2">Email Us</h5>
                    <span class="text-sm block mb-1">hello@sparkxplorer.com</span>
                </div>
            </div>
            <div class="bg-primary-100 p-4 rounded-lg flex items-center gap-2">
                <span
                    class="w-10 h-10 rounded-lg bg-primary-600 shrink-0 flex items-center justify-center text-white"><svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                            d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544" />
                        <path fill="currentColor"
                            d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320" />
                    </svg>
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
            <div class="bg-primary-100 rounded-md p-4 md:px-6 space-y-2">
                <label for="fullName" class="text-sm font-medium">Full Name</label>
                <UInput id="fullName" name="fullName" color="primary" variant="none" placeholder="Type here"
                    class="border-b border-primary-foreground" />
            </div>
            <div class="bg-primary-100 rounded-md p-4 md:px-6 space-y-2">
                <label for="Email" class="text-sm font-medium">Email</label>
                <UInput id="Email" name="Email" type="email" color="white" variant="none" placeholder="Type here"
                    class="border-b border-primary-foreground" />
            </div>
            <div class="bg-primary-100 rounded-md p-4 md:px-6 space-y-2 col-span-2">
                <label for="message" class="text-sm font-medium">Your Message</label>
                <UTextarea id="message" name="message" color="white" variant="none" placeholder="Type here"
                    class="border-b border-primary-foreground" />
            </div>
        </div>
        <base-button styles="w-full font-bold max-w-md" containerStyle="text-center" size="large" :loading="loading"
            type="primary">
            Submit &rarr;
        </base-button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

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
