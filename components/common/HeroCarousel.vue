<script setup>
const heroSlides = ref([
  {
    id: 1,
    title: "Equipping a young mind with the tools to innovate.",
    subtitle:
      "A gently used laptop with a bag for privileged undergraduate students. Price include shipment, repairs, and a protective bag.",
    imgUrl: "/hero-image-1.png",
    btn1Text: "Become a Spark Champion",
    btn1Url: "/#beneficiaries",
    btn2Text: "Become a Spark Beneficiary",
    btn2Url: "/beneficiaries",
  },
  {
    id: 2,
    title: "Transform TechLab for Bright Future",
    subtitle:
      "Sponsor a complete tech lab setup for less privileged schools, equipping these schools with 50 computers, projectors, PA systems, furniture and a power generator.",
    imgUrl: "/hero-image-2.png",
    btn1Text: "Sponsor",
    btn1Url: "/pimp-tech-lab",
    btn2Text: "Become a Spark Champion",
    btn2Url: "/",
  },
  {
    id: 3,
    title: "Empowering Minds Through IT Training",
    subtitle:
      "This is A 3-month IT Fundamentals training program for 50 students per cohort, including 5 laptops for the best IT participants.",
    imgUrl: "/hero-image-3.png",
    btn1Text: "Sponsor",
    btn1Url: "/",
    btn2Text: "Become a Spark Champion",
    btn2Url: "/",
  },
]);
</script>

<template>
  <div>
    <Swiper
      :height="1000"
      :navigation="true"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in heroSlides"
        :key="idx"
        class="bg-blue-three px-5 flex-col text-white"
      >
        <div
          class="lg:flex items-center max-w-screen-2xl mx-auto w-full justify-between lg:space-x-20"
        >
          <div class="lg:w-1/2">
            <h1 class="text-2xl lg:text-5xl" style="text-shadow: 2px 6px 4px #00000040">
              {{ slide.title }}
            </h1>
            <p class="mt-6 font-normal lg:text-xl">{{ slide.subtitle }}</p>
            <div class="lg:space-x-5 mt-7 lg:flex items-center md:space-x-3 space-y-4 md:space-y-0">
              <button
                class="px-10 text-sm lg:text-lg shadow-button rounded-md bg-blue-two border-blue-two h-10 lg:h-16 border-2"
              >
                <nuxt-link :to="slide.btn1Url">{{ slide.btn1Text }}</nuxt-link>
              </button>
              <button
                class="px-10 text-sm lg:text-lg shadow-button text-blue-two  h-10 lg:h-16 rounded-md bg-yellow-three"
              >
                <nuxt-link :to="slide.btn2Url">{{ slide.btn2Text }}</nuxt-link>
              </button>
            </div>
          </div>
          <div class="md:3/6 lg:w-1/2 mt-10 lg:mt-0">
            <img class="w-full md:w-3/6 lg:w-full" :src="slide.imgUrl" alt="" />
          </div>
        </div>
        <div class="max-w-screen-2xl flex space-x-20 mx-auto w-full">
          <div>
            <img class="w-7 h-7" src="@/assets/images/icons/champions-white.svg" alt="" />
            <h4 class="mt-1 lg:text-3xl">200+</h4>
            <p class="font-extralight text-sm lg:text-base">Spark Champions</p>
          </div>
          <div>
            <img class="w-7 h-7" src="@/assets/images/icons/user-white.svg" alt="" />
            <h4 class="mt-1 lg:text-3xl">350+</h4>
            <p class="font-extralight text-sm lg:text-base">Spark Beneficiaries </p>
          </div>
          <div>
            <img class="w-7 h-7" src="@/assets/images/icons/laptop-white.svg" alt="" />
            <h4 class="mt-1 lg:text-3xl">500+</h4>
            <p class="font-extralight text-sm lg:text-base">Laptop Ordered</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;

  font-size: 18px;
  height: 1000px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
