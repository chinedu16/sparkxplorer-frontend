<template>
  <div class="bg-blue-three">
    <div class="py-20 lg:py-28">
      <div class="flex items-center px-5 justify-center">
        <div class="max-w-screen-2xl w-full mx-auto">
          <div class="text-white">
            <h2 class="text-xl lg:text-3xl font-semibold">
              Get in Touch with us
            </h2>
            <p class="mt-4 text-sm lg:text-base lg:w-3/5">
              Thank you for your interest in reaching out to us! Whether you
              have questions, feedback, or just want to say hello, we're here to
              assist you. Please feel free to get in touch with us using any of
              the methods below:
            </p>
          </div>
          <div class="mt-10 lg:flex justify-between w-full">
            <div class="lg:w-6/12 space-y-10">
              <div class="flex items-center space-x-5 text-white">
                <div
                  class="bg-white h-16 md:h-24 w-16 md:w-24 flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/message-lightblue.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div>
                  <h4 class="font-semibold text-lg lg:text-2xl">Massege</h4>
                  <p class="text-sm lg:text-base">support@sparkbridges.com</p>
                </div>
              </div>
              <div class="flex items-center space-x-5 text-white">
                <div
                  class="bg-white h-16 md:h-24 w-16 md:w-24 flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/phone-lightblue.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div>
                  <h4 class="font-semibold text-lg lg:text-2xl">Contact Us</h4>
                  <p class="text-sm lg:text-base">+01 (000) 265 458</p>
                </div>
              </div>
            </div>
            <div class="lg:w-6/12 mt-10 lg:mt-0">
              <div class="bg-white rounded-2xl p-7 lg:p-14">
                <div class="space-y-5">
                  <input
                    type="text"
                    class="form-input h-16 bg-gray-two"
                    placeholder="Enter Your Name*"
                  />
                  <input
                    type="text"
                    class="form-input h-16 bg-gray-two"
                    placeholder="Phone Number*"
                  />
                  <input
                    type="text"
                    class="form-input h-16 bg-gray-two"
                    placeholder="Email Address*"
                  />
                  <input
                    type="text"
                    class="form-input h-16 bg-gray-two"
                    placeholder="Your Message*"
                  />
                </div>
                <div class="mt-10">
                  <button
                    class="rounded-66 h-10 lg:h-16 text-white right-0 bg-blue-three px-10 font-semibold lg:font-bold"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
