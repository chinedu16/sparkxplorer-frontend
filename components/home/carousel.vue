<template>
  <div
    class="grid md:grid-cols-7 gap-4 text-[#696984] md:max-w-none max-w-sm mx-auto relative md:pb-48"
  >
    <div class="col-span-4 space-y-5">
      <h1 class="font-bold text-primary-600 text-xl">TESTIMONIAL</h1>
      <p class="text-base">
        Spark Xplorer has got more than 100k positive ratings from our users
        around the world.
      </p>
      <p class="text-base">
        Some of the scholars and teachers were greatly helped by the Skilline.
      </p>
    </div>
    <div class="col-span-3 shadow-md rounded-xl">
      <div class="rounded-xl w-full">
        <img
          :src="Testimonial1"
          alt="image of person with testimony"
          class="w-full"
        />
      </div>
      <div class="p-6 space-y-6 md:hidden">
        <p>
          "Thank you so much for your help. It's exactly what I've been looking
          for. You won't regret it. It really saves me time and effort. Spark
          Xplorer is exactly what our kid has been lacking."
        </p>
        <div class="flex justify-between gap-4">
          <div class="max-w-40">
            <p class="font-medium text-sm">Gloria Rose</p>
            <p><small>Scholar</small></p>
          </div>
          <div class="max-w-40">
            <span class="flex gap-1">
              <svg
                v-for="i in 5"
                :key="i"
                width="16"
                height="16"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  d="M11.9875 0L16.0742 6.36261L23.3883 8.28316L18.6 14.136L19.0336 21.6856L11.9875 18.9403L4.94142 21.6856L5.37504 14.136L0.58671 8.28316L7.90078 6.36261L11.9875 0Z"
                  fill="#FBA333"
                />
              </svg>
            </span>
            <p><small>12 reviews at Yelp</small></p>
          </div>
        </div>
      </div>
      <div
        class="p-6 space-y-6 md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[28rem] hidden rounded-r-2xl rounded-l-md lg:bottom-8 bg-white border-l-8 border-primary-50 shadow-md"
      >
        <div class="pl-6 border-l border-primary-100">
          <p>
            "Thank you so much for your help. It's exactly what I've been
            looking for. You won't regret it. It really saves me time and
            effort. Spark Xplorer is exactly what our kid has been lacking."
          </p>
        </div>
        <div class="flex justify-between gap-4 pl-6">
          <div class="max-w-40">
            <p class="font-medium text-sm">Gloria Rose</p>
            <p><small>Scholar</small></p>
          </div>
          <div class="max-w-40">
            <span class="flex gap-1">
              <svg
                v-for="i in 5"
                :key="i"
                width="16"
                height="16"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  d="M11.9875 0L16.0742 6.36261L23.3883 8.28316L18.6 14.136L19.0336 21.6856L11.9875 18.9403L4.94142 21.6856L5.37504 14.136L0.58671 8.28316L7.90078 6.36261L11.9875 0Z"
                  fill="#FBA333"
                />
              </svg>
            </span>
            <p><small>12 reviews at Yelp</small></p>
          </div>
        </div>
      </div>
    </div>
    <UButton
      icon="i-heroicons-chevron-right"
      size="xl"
      color="white"
      :ui="{ rounded: 'rounded-full' }"
      class="absolute top-1/2 xl:-right-8 right-0 -translate-y-1/2"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import Testimonial1 from "~/assets/images/illustrations/home/press-release.png";

const activeName = ref("1");
const items = [
  {
    title: "Practice Sessions",
    content:
      "Custom Pricing for eLearning Practice Sessions: Learn at Your Pace. Tailored Pricing for eLearning Practice Sessions.",
    monthlyCost: "$68",
    yearlyCost: "$816",
  },
  {
    title: "Tutoring Packages",
    content:
      "Custom Pricing for eLearning Practice Sessions: Learn at Your Pace. Tailored Pricing for eLearning Practice Sessions.",
    monthlyCost: "$90",
    yearlyCost: "$1080",
  },
  {
    title: "Test Preparation",
    content:
      "Custom Pricing for eLearning Practice Sessions: Learn at Your Pace. Tailored Pricing for eLearning Practice Sessions.",
    monthlyCost: "$150",
    yearlyCost: "$1800",
  },
];
</script>
