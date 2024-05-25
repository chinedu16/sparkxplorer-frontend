<template>
  <div>
    <div class="h-20 bg-green-two relative">
      <div
        class="h-20 absolute left-0 -bottom-7 rounded-r-2xl px-20 text-2xl font-bold flex justify-center items-center bg-yellow-three w-fit"
      >
        Spark Scholars Registration Form
      </div>
    </div>

    <div class="mt-10">
      <div class="max-w-screen-2xl mt-5 w-full mx-auto">
        <h4 class="font-semibold text-2xl">Fill out this form</h4>
        <div class="px-10 mt-10 space-y-5">
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
      </div>
    </div>

    <div
      class="bg-gray-one text-white px-20 w-fit my-6 h-14 rounded-r-2xl flex items-center justify-center"
    >
      Parent/Guardian Information:
    </div>
    <div class="max-w-screen-2xl mt-5 w-full mx-auto">
      <div class="px-10 mt-3 space-y-5">
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
    </div>

    <div
      class="bg-gray-one text-white px-20 w-fit my-6 h-14 rounded-r-2xl flex items-center justify-center"
    >
      Additional Information
    </div>
    <div class="max-w-screen-2xl mt-5 w-full mx-auto">
      <div class="px-10 mt-3 space-y-5">
        <div>
          <label for="">Accessories Included:</label>
          <div class="mt-1 flex space-x-4">
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="excellent"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700">Charger</span>
            </label>
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="good"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700">Case</span>
            </label>
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="bad"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700">None</span>
            </label>
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="bad"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700"
                >Additional peripherals (specify)</span
              >
              <input
                class="border border-gray-500 px-2 py-1 rounded"
                type="text"
                name=""
                id=""
              />
            </label>
          </div>
        </div>
        <div>
          <label for="">Accessories Included:</label>
          <div class="mt-1 flex space-x-4">
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="excellent"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700">Charger</span>
            </label>
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="good"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700">Case</span>
            </label>
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="bad"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700">None</span>
            </label>
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="bad"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700"
                >Additional peripherals (specify)</span
              >
              <input
                class="border border-gray-500 px-2 py-1 rounded"
                type="text"
                name=""
                id=""
              />
            </label>
          </div>
        </div>
        <div>
          <label for="">Accessories Included:</label>
          <div class="mt-1 flex space-x-4">
            <label class="flex items-center space-x-3">
              <input
                type="radio"
                name="rating"
                value="excellent"
                class="form-radio h-5 w-5 text-blue-two"
              />
              <span class="text-gray-700">Charger</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-20 px-10">
        <button
          @click="showOverlay = true"
          class="h-16 w-full text-white right-0 bg-green-two btn"
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
      <h2 class="text-4xl font-bold text-green-two">Thank You!</h2>

      <button
        @click="closeOverlay"
        class="h-16 w-full mt-3 text-white right-0 bg-green-two btn"
      >
        Back Home
      </button>
      <div>
        Would you like to donate?
        <nuxt-link to="/scholars/donate" class="font-semibold text-green-two"
          >Click here
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showOverlay = ref(false);

const closeOverlay = () => {
  showOverlay.value = false;
};
</script>

<style scoped></style>
