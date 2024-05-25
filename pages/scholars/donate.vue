<template>
  <div>
    <div class="h-20 bg-green-two relative">
      <div
        class="h-20 absolute left-0 -bottom-7 rounded-r-2xl px-20 text-2xl font-bold flex justify-center items-center bg-yellow-three w-fit"
      >
        Spark Scholars
      </div>
    </div>

    <div class="flex justify-center items-center">
      <div class="w-3/5">
        <div class="max-w-screen-2xl mt-20 w-full mx-auto">
          <h4 class="font-semibold text-2xl text-green-two">Choose Amount</h4>
          <div class="p-10 rounded-2xl shadow-card mt-7">
            <div class="grid grid-cols-5 gap-10">
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
              <span
                class="text-center font-bold text-2xl shadow-card py-4 px-9 rounded-2xl border-green-two border"
              >
                $50
              </span>
            </div>
            
            <div class="mt-10">
              <span class="font-bold text-xl">Other Amount: </span>

              <input
                class="border ml-1 shadow-card py-4 px-2 rounded-2xl border-green-two"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>

        <div class="max-w-screen-2xl mt-10 w-full mx-auto">
          <h4 class="font-semibold text-2xl text-green-two">
            Sign up Information
          </h4>
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
            <button @click="showOverlay = true" class="h-16 w-auto text-white right-0 bg-green-two btn">
              Make Payment
            </button>
          </div>
        </div>
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
            Proceed to your Dashboard 
        </button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(true);

const closeOverlay = () => {
  showOverlay.value = false;
};

</script>

<style scoped></style>
