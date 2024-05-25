<template>
  <div>
    <div class="max-w-screen-2xl mt-12 space-x-4 w-full mx-auto">
      <span>Account</span>
      <span>/</span>
      <span>Laptop</span>
      <span>/</span>
      <span>HP Stream 11-Intel</span>
    </div>
    <div
      class="max-w-screen-2xl mt-10 w-full space-x-14 items-center mx-auto gallery-container flex"
    >
      <div class="w-4/6 space-x-5 flex">
        <!-- Left Side: Thumbnails -->
        <div class="thumbnails w-1/4 space-y-5">
          <div
            class="p-10 rounded-md shadow-card cursor-pointer"
            @click="selectImage(index)"
            v-for="(image, index) in images"
            :key="index"
          >
            <img
              :src="image.thumbnailUrl"
              :class="{ 'selected-thumbnail': selectedImageIndex === index }"
              class="thumbnail"
              :alt="'Thumbnail ' + (index + 1)"
            />
          </div>
        </div>

        <!-- Right Side: Large Image -->
        <div
          class="large-image rounded-md shadow-card w-3/4 flex justify-center items-center"
        >
          <img
            :src="images[selectedImageIndex].url"
            class="large-img"
            :alt="'Image ' + (selectedImageIndex + 1)"
          />
        </div>
      </div>
      <div class="w-2/6">
        <div class="w-4/5">
          <h4 class="text-2xl font-semibold ">Hp Window Laptop</h4>
          <div class="text-4xl my-2 font-semibold text-blue-two ">$125.00</div>
          <p>
            HP Stream 11-Intel Laptop with High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <div class="my-4">
            <base-input-number />
          </div>

          <div class="flex flex-col mb-3">
            <span class="text-xs text-gray-one"
              >Buy Laptop slot</span
            >
            <button class="btn rounded-md bg-blue-three text-white">
                <nuxt-link to="/checkout">Buy Slot</nuxt-link> 
            </button>
          </div>

          <div class="text-center" >Or</div>

          <div class="flex flex-col mt-3">
            <span class="text-xs text-gray-one"
              >Make Full Payment of the Laptop</span
            >
            <button class="btn rounded-md bg-green-two text-white">
              <nuxt-link to="/checkout">Proceed to Make Payment</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 mb-20">
      <div class="bg-white relative">
        <div class="">
          <div class="flex items-center px-5 justify-center">
            <div class="max-w-screen-2xl w-full mx-auto"></div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-2xl mt-5 w-full mx-auto space-y-10">
        <div>
          <h4 class="font-semibold text-xl mb-10 text-blue-two">
            Specifications
          </h4>
          <div class="space-y-3">
            <span>Key Features</span>
            <ul class="list-disc pl-8">
              <li>32GBHARD DRIVE +  1TB OF OneDrive Cloud Storage</li>
              <li>2GB RAM</li>
              <li>Thinner, Lighter Design</li>
              <li>Fast, Durable And Mobile</li>
            </ul>
            <p>
              Product nameStream 11MicroprocessorIntel® Celeron(up to 2.5 GHz
              with Intel® Turbo Boost Technology, 6 MB L3 cache, 4
              cores)ChipsetIntel® Integrated SoCMemory, standard2 GB DDR4-2666
              SDRAM ()Video graphicsIntel® UHD GraphicsHard drive32GB HDDOptical
              driveOptical drive not includedDisplay35.6 cm (11") diagonal HD
              SVA anti-glare micro-edge WLED 35.6 cm (11") diagonal HD SVA
              anti-glare micro-edge WLED 35.6 cm (11") diagonal HD SVA
              anti-glare micro-edge WLEDWireless connectivityIntel® Wi-Fi 6 AX
              201 (2x2) and Bluetooth® 5 Combo (Supporting Gigabit file transfer
              speeds)Network interfaceIntegrated 10/100/1000 GbE LANExpansion
              slots1 multi-format SD media card readerExternal ports1 USB 3.1
              Gen 1 Type-C™ (Data Transfer Only, 5 Gb/s signaling rate); 1 USB
              3.1 Gen 1 Type-A (Data Transfer Only); 1 AC smart pin; 1 HDMI
              1.4b; 1 headphone/microphone combo; 1 RJ-45Minimum dimensions (W x
              D x H)32.68 x 22.55 x 1.79 cmWeight1.1 kgPower supply type45 W
              Smart AC adapterBattery type3-cell, 41 Wh Li-ionBattery life mixed
              usageUp to 5 hours and 15 minutesVideo Playback Battery lifeUp to
              4 hours and 45 minutesWebcamHP Wide Vision HD Camera with
              integrated dual array digital microphoneAudio featuresAudio by ;
              Dual speakers; HP Audio Boost 1.0
            </p>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-xl mb-10 text-blue-two">
            Product Details
          </h4>
          <div class="space-y-3">
            <span>Product info</span>
            <ul class="list-disc pl-8">
              <li>32GBHARD DRIVE +  1TB OF OneDrive Cloud Storage</li>
              <li>2GB RAM</li>
              <li>Thinner, Lighter Design</li>
              <li>Fast, Durable And Mobile</li>
              <li>32GBHARD DRIVE +  1TB OF OneDrive Cloud Storage</li>
              <li>2GB RAM</li>
              <li>Thinner, Lighter Design</li>
              <li>Fast, Durable And Mobile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedImageIndex = ref(0);

const images = ref([
  {
    thumbnailUrl: "/hero-image-1.png",
    url: "/hero-image-1.png",
  },
  {
    thumbnailUrl: "/hero-image-2.png",
    url: "/hero-image-2.png",
  },
  {
    thumbnailUrl: "/hero-image-3.png",
    url: "/hero-image-3.png",
  },
]);

const selectImage = (index) => {
  selectedImageIndex.value = index; // Update the selected image index
};
</script>

<style scoped>
.gallery-container {
  /* height: 100vh; */
}

.thumbnails {
  overflow-y: auto;
  padding: 10px;
}

.thumbnail {
  width: 120px;
  height: 100px;
  object-fit: contain;
  width: 100%;
  border: 2px solid transparent;
}

.large-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.large-img {
  max-width: 100%;
  max-height: 100%;
}
</style>
