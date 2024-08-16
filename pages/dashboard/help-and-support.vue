<template>
  <div class="max-w-screen-2xl mx-auto w-full">
    <div
      class="text-sm py-2 px-5 w-fit font-semibold text-primary bg-purple-one rounded-full"
    >
      FAQ
    </div>
    <h2 class="text-4xl font-extrabold mt-6">Still Have Any Questions?</h2>
    <p class="mt-6 text-lg text-gray-one">
      Then don’t hesitate to get in touch with us. We’ll help in any way we can.
    </p>

    <div class="mt-12 mb-10 help-support flex items-center space-x-3">
      <base-input
        v-model="search"
        name="username"
        label=""
        placeholder="Search"
        type="text"
        iconPrefix="search"
        variant="transparent"
      />
      <base-button styles="w-full mt-2 font-bold" size="large" type="primary">
        Search
      </base-button>
    </div>
    <div>
      <h2 class="text-4xl font-extrabold mt-6">Frequently Asked Questions</h2>
      <p class="mt-6 text-lg text-gray-one">
        Here are the most asked questions based from our users.
      </p>
    </div>
    <div class="mt-16 grid grid-cols-2 gap-8">
      <div v-for="i in 6" class="text-lg px-14 text-gray-one">
        <h4 class="font-bold">Can i try free trial?</h4>
        <p class="mt-2 text-base">
          Sit amet. Sem integer vitae justo eget magna fermentum iaculis.
          Facilisis magna etiam tempor orci eu lobortis.
        </p>
      </div>
    </div>

    <div
      class="mt-16 mb-10 p-10 flex justify-center items-center bg-gray-three rounded-3xl"
    >
      <div class="">
        <img src="" alt="" />
        <h3 class="text-2xl mt-8 font-bold">Join Our Support Live Chat</h3>
        <p class="mt-2">
          If you still have other questions, why not join our live chat channel?
        </p>
        <div>
          <base-button
            styles="w-full mt-8 font-bold bg-white text-primary"
            size="large"
            type="primary"
            bgColor="#4F46E5"
            textColor="#ffffff"
            borderColor="#4F46E5"
          >
            <div class="flex space-x-4">
              <span>Get In Touch</span>
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0383 7.66256L10.4133 13.2876C10.2372 13.4637 9.99829 13.5626 9.74922 13.5626C9.50015 13.5626 9.26128 13.4637 9.08516 13.2876C8.90904 13.1114 8.81009 12.8726 8.81009 12.6235C8.81009 12.3744 8.90904 12.1356 9.08516 11.9594L13.1094 7.93678H1.625C1.37636 7.93678 1.1379 7.83801 0.962087 7.66219C0.786272 7.48638 0.6875 7.24792 0.6875 6.99928C0.6875 6.75064 0.786272 6.51218 0.962087 6.33637C1.1379 6.16055 1.37636 6.06178 1.625 6.06178H13.1094L9.08672 2.03678C8.9106 1.86066 8.81166 1.62179 8.81166 1.37272C8.81166 1.12365 8.9106 0.884778 9.08672 0.708657C9.26284 0.532537 9.50171 0.433594 9.75078 0.433594C9.99985 0.433594 10.2387 0.532537 10.4148 0.708657L16.0398 6.33366C16.1273 6.42087 16.1966 6.5245 16.2438 6.63858C16.2911 6.75266 16.3153 6.87495 16.3152 6.99844C16.315 7.12192 16.2905 7.24415 16.243 7.35812C16.1955 7.4721 16.1259 7.57556 16.0383 7.66256Z"
                  fill="white"
                />
              </svg>
            </div>
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const search = ref();
</script>

<style>
.help-support .el-form-item {
  margin-bottom: 0 !important;
}
</style>
