<template>
  <div class="px-5">
    <div class="max-w-screen-2xl mt-12 space-x-4 w-full mx-auto ">
      <span>Account</span>
      <span>/</span>
      <span>Laptop</span>
      <span>/</span>
      <span>HP Stream 11-Intel</span>
    </div>

    <div class="max-w-screen-2xl mt-5 w-full mx-auto">
      <h4 class="font-semibold text-2xl text-blue-two">Order Summary</h4>
      <div class="p-10 space-y-2 rounded-2xl shadow-card mt-7">
        <div class="flex justify-between items-center font-bold text-xl">
          <span>Item's Quantity Amount</span>
          <span>Item's Quantity Amount</span>
          <span>Item's Quantity Amount</span>
        </div>
        <div class="flex justify-between items-center  text-xl">
          <span>Spark Laptop</span>
          <span>(1)</span>
          <span>$250,00</span>
        </div>
        <div class="flex justify-between items-center  text-xl">
          <span>Spark Chrome</span>
          <span>(1)</span>
          <span>$250,00</span>
        </div>
        <div class="flex justify-between items-center font-bold text-xl">
          <span>Total</span>
          
          <span>$500,00</span>
        </div>
      </div>
    </div>

    <div class="max-w-screen-2xl mt-10 w-full mx-auto">
      <h4 class="font-semibold text-2xl text-blue-two">Sign up Information</h4>
      <div class="p-10 rounded-2xl shadow-card mt-7 space-y-5">
        <input
          type="text"
          class="form-input h-16 bg-gray-two"
          placeholder="Email Address*"
        />
        <input
          type="text"
          class="form-input h-16 bg-gray-two"
          placeholder="Email Address*"
        />
        <input
          type="text"
          class="form-input h-16 bg-gray-two"
          placeholder="Email Address*"
        />
        <input
          type="text"
          class="form-input h-16 bg-gray-two"
          placeholder="Email Address*"
        />
        <input
          type="text"
          class="form-input h-16 bg-gray-two"
          placeholder="Email Address*"
        />
      </div>
      <div class="mt-10">
        <button class="h-16 w-auto text-white right-0 bg-blue-three btn">
          Make Payment
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
    

        <button
          @click="closeOverlay"
          class="h-16 w-full mt-3 text-white right-0 bg-blue-three btn"
        >
            Proceed to your Dashboard 
        </button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(false);

const closeOverlay = () => {
  showOverlay.value = false;
};
</script>

<style scoped></style>
