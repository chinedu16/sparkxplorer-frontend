<template>
  <div class="text-blue-two">
    <div class="bg-yellow-one hidden md:flex h-10">
      <div class="w-full px-5">
        <div class="max-w-screen-2xl mx-auto">
          <div class="w-full flex justify-between">
            <div class="flex font-light space-x-10 md:text-lg">
              <div class="flex items-center space-x-2">
                <img
                  src="@/assets/images/icons/phone-blue.svg"
                  alt=""
                  srcset=""
                />
                <span class="whitespace-nowrap">241-245-7430</span>
              </div>
              <div class="flex items-center space-x-2">
                <img
                  src="@/assets/images/icons/message-blue.svg"
                  alt=""
                  srcset=""
                />
                <span class="whitespace-nowrap">info@sparkbridge.com</span>
              </div>
            </div>
            <div class="bg-yellow-two h-10 px-10 flex items-center space-x-7">
              <img
                src="@/assets/images/icons/instagram-black.svg"
                alt=""
                srcset=""
              />
              <img
                src="@/assets/images/icons/facebook-black.svg"
                alt=""
                srcset=""
              />
              <img src="@/assets/images/icons/x-black.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-blue-one shadow-header">
      <div class="flex items-center h-24 px-5 justify-center">
        <div
          class="max-w-screen-2xl w-full mx-auto flex items-center justify-between"
        >
          <nuxt-link to="/">
            <img src="@/assets/images/icons/logo.svg" alt="" srcset="" />
          </nuxt-link>
          <nav class="flex items-center space-x-5 font-semibold">
            <nuxt-link to="/#about-us">About us</nuxt-link>
            <nuxt-link to="/#beneficiaries">Our Packages</nuxt-link>
            <nuxt-link to="/#contact-us">Contact us</nuxt-link>
            <div class="space-x-5">
              <button class="btn rounded-md border-blue-two border-2 ml-10">
                
                <nuxt-link to="/admin/login">Log in</nuxt-link>
              </button>
              <button @click="goToBeneficiaries" class="btn rounded-md bg-yellow-three">
                Be a Spark Beneficiary
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const router = useRouter()
const goToBeneficiaries = () => {
  router.push('/#beneficiaries')
}
</script>

<style scoped></style>
