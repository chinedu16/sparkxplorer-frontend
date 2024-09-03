<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header Component -->

    <div class="max-w-screen-2xl mx-auto w-full">
      <div class="flex justify-between border-t py-4">
        <nuxt-link to="/">
          <img
            class="cursor-pointer"
            src="~/assets/images/icons/logo-sparkexplorer.svg"
            alt=""
          />
        </nuxt-link>
        <div class="">
          <base-button
            styles="w-full font-bold bg-white text-primary"
            size="large"
            type="primary"
            bgColor="#ffffff"
            textColor="#475569"
            borderColor="#475569"
          >
            Contact Us
          </base-button>
        </div>
      </div>
    </div>

    <div class="flex-grow max-w-screen-2xl mx-auto w-full">
      <div class="mt-20 flex flex-col items-center justify-center">
        <div
          class="text-sm py-2 px-5 w-fit font-semibold text-primary bg-purple-one rounded-full"
        >
          Our Pricing
        </div>
        <h2 class="text-4xl font-extrabold mt-6">
          Get Started with Spark Xplorer
        </h2>
        <p class="mt-6 text-xl text-gray-one">
          With our annual plan, you get a full experience of our service.
        </p>

        <div class="flex space-x-4 items-center my-12">
          <h4 class="text-gray-one text-xl">Number of scholars</h4>
          <el-input-number
            class="input-number"
            size="large"
            v-model="num"
            :min="1"
            :max="40"
            @change="handleChange"
          />
        </div>

        <div class="w-full flex justify-center items-center">
          <div class="w-8/12 space-x-8 flex">
            <div class="w-1/2 rounded-3xl border p-6">
              <span class="text-lg text-primary font-bold">Monthly</span>
              <div class="mt-5 text-gray-one text-2xl mb-8">
                <span class="text-gray-two font-black text-5xl">$15</span
                >/month/scholar
              </div>
              <hr />
              <div class="space-y-3 my-6">
                <div v-for="i in 4" class="flex space-x-3">
                  <img
                    src="../../assets/images/icons/check-primary.svg"
                    alt=""
                  />
                  <span>Mathematics (Pre-K to Calc)</span>
                </div>
              </div>
              <base-button
                styles="w-full mt-4 font-bold"
                size=""
                @click="onSubmit"
                type="primary"
              >
                Subscribe Now
              </base-button>
            </div>
            <div class="w-1/2 rounded-3xl border p-6">
              <div class="flex justify-between">
                <span class="text-lg text-primary font-bold">Yearly</span>
                <span class="text-sm rounded-full p-2 text-primary bg-purple-one">10% OFF</span>
              </div>
              <div class="mt-5 text-gray-one text-2xl mb-8">
                <span class="text-gray-two font-black text-5xl">$160</span
                >/annum/scholar
              </div>
              <hr />
              <div class="space-y-3 my-6">
                <div v-for="i in 4" class="flex space-x-3">
                  <img
                    src="../../assets/images/icons/check-primary.svg"
                    alt=""
                  />
                  <span>Mathematics (Pre-K to Calc)</span>
                </div>
              </div>
              <base-button
                styles="w-full mt-4 font-bold"
                size=""
                @click="onSubmit"
                type="primary"
              >
                Subscribe Now
              </base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-24">
        <div
          class="text-sm py-2 px-5 w-fit font-semibold text-primary bg-purple-one rounded-full"
        >
          FAQ
        </div>
        <h2 class="text-3xl font-extrabold mt-6">Frequently Asked Questions</h2>
        <p class="mt-6 text-lg text-gray-one">
          Fermentum iaculis eu non diam phasellus vestibulum. Volutpat commodo
          sed egestas egestas fringilla phasellus. Donec ac odio tempor orci
          dapibus ultrices.
        </p>
        <div class="mt-16 grid grid-cols-3 gap-8">
          <div v-for="i in 6" class="text-lg text-gray-one">
            <h4 class="font-bold">Can i try free trial?</h4>
            <p class="mt-2 text-base">
              Sit amet. Sem integer vitae justo eget magna fermentum iaculis.
              Facilisis magna etiam tempor orci eu lobortis.
            </p>
          </div>
        </div>

        <div
          class="mt-16 mb-24 p-8 flex justify-between items-center bg-primary rounded-3xl"
        >
          <div class="text-white">
            <h3 class="text-2xl font-bold">Still have questions?</h3>
            <p class="mt-3">
              We understand. Let’s get in touch directly with our team, then.
            </p>
          </div>
          <div>
            <base-button
              styles="w-full font-bold bg-white text-primary"
              size="large"
              type="primary"
              bgColor="#ffffff"
              textColor="#4F46E5"
              borderColor="#4F46E5"
            >
              <div class="flex space-x-4">
                <span>Contact Us</span>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5383 8.16305L9.91328 13.7881C9.73716 13.9642 9.49829 14.0631 9.24922 14.0631C9.00015 14.0631 8.76128 13.9642 8.58516 13.7881C8.40904 13.6119 8.31009 13.3731 8.31009 13.124C8.31009 12.8749 8.40904 12.636 8.58516 12.4599L12.6094 8.43727H1.125C0.87636 8.43727 0.637903 8.3385 0.462087 8.16268C0.286272 7.98687 0.1875 7.74841 0.1875 7.49977C0.1875 7.25113 0.286272 7.01267 0.462087 6.83686C0.637903 6.66104 0.87636 6.56227 1.125 6.56227H12.6094L8.58672 2.53727C8.4106 2.36115 8.31166 2.12228 8.31166 1.87321C8.31166 1.62414 8.4106 1.38527 8.58672 1.20915C8.76284 1.03303 9.00171 0.934082 9.25078 0.934082C9.49985 0.934082 9.73872 1.03303 9.91484 1.20915L15.5398 6.83415C15.6273 6.92136 15.6966 7.02498 15.7438 7.13907C15.7911 7.25315 15.8153 7.37544 15.8152 7.49892C15.815 7.6224 15.7905 7.74464 15.743 7.85861C15.6955 7.97258 15.6259 8.07604 15.5383 8.16305Z"
                    fill="#4F46E5"
                  />
                </svg>
              </div>
            </base-button>
          </div>
        </div>
      </div>
    </div>

    <layouts-footer class="mt-auto"></layouts-footer>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
definePageMeta({
  layout: "auth",
});

const onSubmit = () => {
  router.push("/dashboard/get-started");
};

const num = ref(1);
const handleChange = (value: number) => {
  console.log(value);
};
</script>

<style>
.input-number .el-input-number__decrease {
  border-radius: 123px 0px 0px 123px;
}

.input-number .el-input-number__increase {
  border-radius: 0px 123px 123px 0px;
}

.input-number .el-input__wrapper {
  border-radius: 123px;
}
</style>
