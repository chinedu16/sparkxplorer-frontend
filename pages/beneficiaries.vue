<template>
  <div>
    <div
      
      class="text-white mt-7 text-lg bg-blue-three font-semibold lg:font-bold w-fit rounded-r-lg lg:text-xl py-4 lg:py-8 px-10 lg:px-14"
    >
      Be a Spark Beneficiary
    </div>

    <div class="mt-10 max-w-screen-2xl lg:w-9/12 mx-auto px-5 ">
      <div class="border shadow-button rounded-lg px-5 lg:px-20 py-10">
        <h4 class="lg:text-3xl text-blue-two font-semibold">Fill out this form</h4>
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
            class="w-full h-10 lg:h-16 uppercase text-white bg-blue-three px-10  font-semibold lg:font-bold"
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
