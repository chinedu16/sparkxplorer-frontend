<template>
  <div class="md:mb-20 mb-10">
    <div class="mt-10">
      <div class="flex items-center px-5 justify-center">
        <div
          class="max-w-screen-2xl w-full mx-auto flex items-center justify-between"
        >
          <div class="md:flex justify-between items-center w-full border-b pb-2">
            <img
              class="h-9"
              src="@/assets/images/icons/logo.svg"
              alt=""
              srcset=""
            />
            <nav class="md:flex items-center space-x-14 font-semibold">
              <nuxt-link to="/#about-us">About</nuxt-link>
              <nuxt-link to="/#beneficiaries">Packages</nuxt-link>
              <nuxt-link to="/#beneficiaries">Be A Spark Beneficiary</nuxt-link>
            </nav>

            <div class="space-x-3 flex items-center">
              <div
                class="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-three"
              >
                <img
                  src="@/assets/images/icons/instagram-black.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div
                class="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-three"
              >
                <img
                  src="@/assets/images/icons/facebook-black.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div
                class="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-three"
              >
                <img src="@/assets/images/icons/x-black.svg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex mt-7">
      <div class="w-full px-5">
        <div class="max-w-screen-2xl mx-auto">
          <div class="w-full md:flex text-gray-one justify-between text-sm md:text-base">
            <div>© Copyright 2024, All Rights Reserved</div>
            <div class="mt-10 space-x-7">
              <nuxt-link to="/">Privacy Policy</nuxt-link>
              <nuxt-link to="/blog">Terms & Conditions</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
