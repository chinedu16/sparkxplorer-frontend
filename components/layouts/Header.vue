<template>
  <div class="text-blue-two">
    <!-- Desktop Navbar -->
    <div class="hidden lg:block">
      <div class="bg-yellow-one h-10">
        <div class="w-full px-5">
          <div class="max-w-screen-2xl mx-auto">
            <div class="w-full flex justify-between">
              <div class="flex font-light space-x-10 md:text-lg">
                <div class="flex items-center space-x-2">
                  <img
                    src="@/assets/images/icons/phone-blue.svg"
                    alt="Phone"
                  />
                  <span class="whitespace-nowrap">241-245-7430</span>
                </div>
                <div class="flex items-center space-x-2">
                  <img
                    src="@/assets/images/icons/message-blue.svg"
                    alt="Email"
                  />
                  <span class="whitespace-nowrap">info@sparkbridge.com</span>
                </div>
              </div>
              <div class="bg-yellow-two h-10 px-10 flex items-center space-x-7">
                <img
                  src="../../assets/images/icons/instagram-social.svg"
                  alt="Instagram"
                />
                <img
                  src="@/assets/images/icons/facebook-black.svg"
                  alt="Facebook"
                />
                <img src="@/assets/images/icons/x-black.svg" alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Navbar -->
      <div class="bg-blue-one shadow-header">
        <div class="flex items-center h-24 px-5 justify-center">
          <div
            class="max-w-screen-2xl w-full mx-auto flex items-center justify-between"
          >
            <nuxt-link to="/">
              <img src="@/assets/images/icons/logo.svg" alt="Logo" />
            </nuxt-link>
            <nav class="flex items-center space-x-5 font-semibold">
              <nuxt-link to="/#about-us">About us</nuxt-link>
              <nuxt-link to="/#beneficiaries">Our Packages</nuxt-link>
              <nuxt-link to="/#contact-us">Contact us</nuxt-link>
              <div class="space-x-5">
                <button class="btn rounded-md border-blue-two border-2 ml-10">
                  <nuxt-link to="/admin/login">Log in</nuxt-link>
                </button>
                <button
                  @click="goToBeneficiaries"
                  class="btn rounded-md bg-yellow-three"
                >
                  Be a Spark Beneficiary
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div class="lg:hidden bg-blue-one shadow-header relative z-10">
      <div class="flex items-center justify-between h-20 px-5">
        <nuxt-link to="/">
          <img class="w-32" src="@/assets/images/icons/logo.svg" alt="Logo" />
        </nuxt-link>
        <img
          @click="toggleMobileMenu"
          class="w-8 h-8"
          src="@/assets/images/icons/menu-icon.svg"
          alt="Menu"
        />
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="absolute border-t top-20 left-0 w-full bg-blue-one shadow-header px-4 pt-4 pb-6"
      >
        <nav class="flex flex-col space-y-4 font-semibold" @click="toggleMobileMenu">
          <nuxt-link to="/#about-us" class="hover:text-yellow-three"
            >About us</nuxt-link
          >
          <nuxt-link to="/#beneficiaries" class="hover:text-yellow-three"
            >Our Packages</nuxt-link
          >
          <nuxt-link to="/#contact-us" class="hover:text-yellow-three"
            >Contact us</nuxt-link
          >
          <nuxt-link to="/admin/login" class="hover:text-yellow-three"
            >Log in</nuxt-link
          >
          
          <button @click="goToBeneficiaries" class="btn bg-yellow-three">
            Be a Spark Beneficiary
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isMobileMenuOpen = ref(false);

const goToBeneficiaries = () => {
  router.push('/#beneficiaries');
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Add your styles here */
</style>
