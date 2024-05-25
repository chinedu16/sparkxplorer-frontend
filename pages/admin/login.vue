<template>
  <div>
    <div class="mt-16 flex justify-center items-center">
      <div class="w-3/5">
        <div class="max-w-screen-2xl mt-20 w-full mx-auto">
          <div class="flex items-center justify-between space-x-9">
            <div class="w-1/2">
              <h3 class="text-4xl font-bold">Sign in</h3>
              <p class="text-gray-one mt-2">
                Please login to continue to your account.
              </p>

              <div class="mt-5 space-y-5">
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
                <label class="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="rating"
                    value="good"
                    class="form-radio h-5 w-5 text-blue-two"
                  />
                  <span class="text-gray-700">Keep me logged in</span>
                </label>
                <button
                  class="btn w-full h-14 rounded-m text-white bg-blue-three"
                >
                  Sign in
                </button>
                <div class="flex justify-between w-full items-center space-x-3">
                  <div class="border w-1/2"></div>
                  <span>OR</span>
                  <div class="border w-1/2"></div>
                </div>
                <button
                  class="flex justify-center space-x-2 items-center btn w-full h-14 rounded-m border"
                >
                  <span> Sign in with Google </span>
                  <img src="@/assets/images/icons/google.svg" alt="" />
                </button>
              </div>
            </div>
            <div class="w-1/2">
              <img
                class="w-full h-5/6"
                src="@/assets/images/illustrations/login.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showOverlay = ref(true);

const closeOverlay = () => {
  showOverlay.value = false;
};
</script>

<style scoped></style>
