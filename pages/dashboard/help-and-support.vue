<template>
  <div class="max-w-screen-2xl flex justify-center items-center mx-auto w-full">
    <div class="w-10/12">
      <div class="flex flex-col justify-center items-center">
        <div
          class="text-sm py-2 mt-10 px-5 w-fit font-semibold text-primary bg-purple-one rounded-full"
        >
          FAQ
        </div>
        <h2 class="text-4xl font-extrabold mt-6">Still Have Any Questions?</h2>
        <p class="mt-6 text-lg text-gray-one">
          Then don’t hesitate to get in touch with us. We’ll help in any way we
          can.
        </p>

        <div
          class="mt-12 w-1/2 mb-10 help-support flex items-center justify-center space-x-3"
        >
          <div class="w-3/6">
            <base-input
              v-model="search"
              name="username"
              label=""
              placeholder="Search"
              type="text"
              iconPrefix="search-gray"
              variant="transparent"
            />
          </div>
          <base-button
            styles="w-full mt-1 font-bold"
            size="large"
            type="primary"
          >
            Search
          </base-button>
        </div>
      </div>
      <div>
        <h2 class="text-4xl font-extrabold mt-14">
          Frequently Asked Questions
        </h2>
        <p class="mt-6 text-lg text-gray-one">
          Here are the most asked questions based from our users.
        </p>
      </div>
      <div class="mt-16 grid grid-cols-2 gap-8">
        <div v-for="i in 6" class="text-lg px-14 text-gray-one">
          <div
            class="text-sm w-14 h-14 flex items-center justify-center py-2 mb-5 px-5 font-semibold text-primary bg-purple-one rounded-full"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5977 11.0041C20.5578 10.8258 20.4751 10.6598 20.3567 10.5207C20.2382 10.3815 20.0877 10.2733 19.9181 10.2053L15.1199 8.28627L16.1127 1.66658C16.1492 1.42888 16.1085 1.18575 15.9967 0.972856C15.8848 0.759966 15.7077 0.588519 15.4913 0.483664C15.2748 0.378809 15.0305 0.346064 14.7941 0.390232C14.5577 0.4344 14.3417 0.553157 14.1777 0.729083L3.67774 11.9791C3.55293 12.1127 3.46259 12.2748 3.41453 12.4513C3.36648 12.6277 3.36217 12.8132 3.40196 12.9917C3.44176 13.1702 3.52447 13.3363 3.64294 13.4756C3.7614 13.6149 3.91204 13.7233 4.08181 13.7913L8.87993 15.7103L7.88712 22.3328C7.85068 22.5705 7.89136 22.8137 8.00321 23.0266C8.11506 23.2395 8.29219 23.4109 8.50861 23.5158C8.72503 23.6206 8.96935 23.6534 9.20575 23.6092C9.44214 23.565 9.65816 23.4463 9.82212 23.2703L20.3221 12.0203C20.4475 11.8863 20.5381 11.7236 20.5862 11.5464C20.6342 11.3693 20.6382 11.1831 20.5977 11.0041ZM10.6499 19.0825L11.2377 15.1666C11.2753 14.916 11.2271 14.66 11.1011 14.4401C10.975 14.2203 10.7784 14.0495 10.5431 13.9553L6.44431 12.3156L13.3499 4.9169L12.7621 8.83283C12.7246 9.08346 12.7727 9.33944 12.8988 9.55928C13.0249 9.77912 13.2215 9.94994 13.4568 10.0441L17.5556 11.6838L10.6499 19.0825Z"
                fill="#4F46E5"
              />
            </svg>
          </div>
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
        <div class="flex flex-col items-center justify-center">
          <img src="../../assets/images/illustrations/contact-us.png" alt="" />
          <h3 class="text-2xl mt-8 font-bold">Join Our Support Live Chat</h3>
          <p class="mt-2">
            If you still have other questions, why not join our live chat
            channel?
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
