<template>
  <div class="relative h-full">
    <!-- Main Image -->
    <img class="w-full object-cover h-full" :src="currentImage" alt="Main Image" />

    <!-- Testimonial Overlay -->
    <div
      class="absolute bottom-0 left-0 w-full p-8 backdrop-blur-md bg-opacity-50 bg-black shadow-lg flex flex-col"
    >
      <img
        class="h-6 w-36 mb-8"
        src="../../assets/images/icons/rating.svg"
        alt=""
      />
      <h3 class="text-3xl text-white font-semibold mb-8">
        “{{ currentTestimonial.text }}”
      </h3>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            :src="currentTestimonial.avatar"
            alt="Avatar"
          />
          <div class="text-white">
            <h4 class="text-md font-medium">{{ currentTestimonial.name }}</h4>
            <span class="text-sm">{{ currentTestimonial.role }}</span>
          </div>
        </div>
        <div class="flex">
          <button
            @click="prevTestimonial"
            class="p-2 w-12 h-12 border justify-center flex items-center rounded-full border-white"
          >
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.735126 9.7647L0.735068 9.76465C0.634558 9.66448 0.55481 9.54547 0.500394 9.41442C0.445979 9.28337 0.417969 9.14287 0.417969 9.00097C0.417969 8.85908 0.445979 8.71858 0.500395 8.58753C0.55481 8.45648 0.634558 8.33746 0.735068 8.2373L0.735126 8.23725L8.23513 0.737245C8.43768 0.534692 8.7124 0.420898 8.99886 0.420898C9.28531 0.420898 9.56003 0.534692 9.76258 0.737246C9.96514 0.939799 10.0789 1.21452 10.0789 1.50097C10.0789 1.78743 9.96514 2.06215 9.76258 2.2647L3.0604 8.96689L3.02726 9.00003L3.06039 9.03318L9.76258 15.7372L9.79573 15.7041L9.76258 15.7372C9.96514 15.9398 10.0789 16.2145 10.0789 16.501C10.0789 16.7874 9.96514 17.0622 9.76258 17.2647C9.56003 17.4673 9.28531 17.5811 8.99886 17.5811C8.7124 17.5811 8.43768 17.4673 8.23513 17.2647L0.735126 9.7647Z"
                fill="white"
                stroke="white"
                stroke-width="0.09375"
              />
            </svg>
          </button>
          <button
            @click="nextTestimonial"
            class="p-2 w-12 h-12 border flex items-center rounded-full justify-center border-white ml-2"
          >
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2628 9.76266L10.2628 9.76275L2.76275 17.2628C2.5602 17.4653 2.28548 17.5791 1.99902 17.5791C1.71257 17.5791 1.43785 17.4653 1.23529 17.2628C1.03274 17.0602 0.918945 16.7855 0.918945 16.499C0.918945 16.2126 1.03274 15.9378 1.23529 15.7353L7.93935 9.03311L7.9725 8.99997L7.93936 8.96682L1.23717 2.26276L1.23717 2.26275C1.13687 2.16246 1.05731 2.04339 1.00304 1.91235C0.948757 1.78131 0.92082 1.64086 0.92082 1.49902C0.92082 1.35718 0.948757 1.21674 1.00304 1.08569C1.05731 0.954653 1.13687 0.835587 1.23717 0.735293C1.33746 0.634998 1.45653 0.55544 1.58757 0.501161C1.71861 0.446882 1.85906 0.418945 2.0009 0.418945C2.14273 0.418945 2.28318 0.446882 2.41422 0.501161C2.54527 0.55544 2.66433 0.634998 2.76463 0.735293L10.2646 8.23529L10.2646 8.23531C10.365 8.33559 10.4446 8.4547 10.4989 8.58581C10.5532 8.71693 10.581 8.85746 10.5808 8.99936C10.5807 9.14125 10.5525 9.28172 10.4979 9.4127C10.4434 9.54369 10.3635 9.66261 10.2628 9.76266Z"
                fill="white"
                stroke="white"
                stroke-width="0.09375"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define testimonials
const testimonials = [
  {
    text: "My kids really enjoy using Spark Xplorer and I have noticed a major improvement in their cognitive development",
    name: "Adewunmi Olutayo",
    role: "Parent",
    avatar: "/icons/avatar.png", // Adjust the path as necessary
  },
  {
    text: "This is another testimonial showing how much Spark Xplorer has helped our family.",
    name: "Jane Doe",
    role: "Teacher",
    avatar: "/icons/avatar.png", // Adjust the path as necessary
  },
  // Add more testimonials as needed
];

// Reactive state for the current testimonial and image
const currentIndex = ref(0);

const currentTestimonial = computed(() => testimonials[currentIndex.value]);

const currentImage = computed(
  () => `/illustrations/login-screen-${currentIndex.value + 1}.png`
);

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};
</script>

<style scoped></style>
