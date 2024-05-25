<template>
  <div>
    <div
      style="padding: 40px"
      class="text-white mt-7 text-2xl font-semibold w-fit py-7 rounded-r-2xl bg-blue-three"
    >
      Be a Spark Beneficiary
    </div>

    <div class="mt-10 max-w-screen-2xl w-9/12 mx-auto">
      <div class="border shadow-button rounded-lg px-20 py-10">
        <h4 class="text-3xl text-blue-two font-semibold">Fill out this form</h4>
        <div class="mt-10 space-y-4">
          <input
            type="text"
            class="form-input h-16 bg-gray-two"
            placeholder="Enter Your Name*"
          />
          <input
            type="text"
            class="form-input h-16 bg-gray-two"
            placeholder="Enter Your Name*"
          />
          <input
            type="text"
            class="form-input h-16 bg-gray-two"
            placeholder="Enter Your Name*"
          />
          <input
            type="text"
            class="form-input h-16 bg-gray-two"
            placeholder="Enter Your Name*"
          />
          <input
            type="text"
            class="form-input h-16 bg-gray-two"
            placeholder="Enter Your Name*"
          />
          <input
            type="text"
            class="form-input h-16 bg-gray-two"
            placeholder="Enter Your Name*"
          />
          <textarea
            class="form-input h-32 bg-gray-two p-4 rounded-lg"
            placeholder="Enter Your Message*"
          ></textarea>
        </div>
        <div class="mt-20">
          <button
            @click="handleSubmit"
            class="w-full h-16 uppercase text-white bg-blue-three btn"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="showOverlay"
      class="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="w-3/12 p-10 rounded-lg text-center">
        <h2 class="text-4xl font-bold text-blue-three">Thank You!</h2>
        <p class="mt-2 text-lg text-gray-one">
          We will vet your information and get back to you
        </p>

        <button
          @click="closeOverlay"
          class="h-16 w-full mt-3 text-white right-0 bg-blue-three btn"
        >
          Back Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showOverlay = ref(false);

const handleSubmit = () => {
  showOverlay.value = true;
};

const closeOverlay = () => {
  showOverlay.value = false;
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
