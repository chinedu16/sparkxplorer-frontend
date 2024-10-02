<template>
  <HomeHeader />
  <section class="bg-primary-600/90 relative">
    <div class="bg-cover bg-no-repeat max-w-lg absolute right-0 w-full top-0 bottom-0"
      :style="{ backgroundImage: `url(${LayeredLogo})` }"></div>
    <div
      class="max-w-5xl w-full mx-auto grid pt-16 px-5 md:px-0 md:pt-24 text-primary-100 place-items-center relative z-[1]">
      <h1 class="text-3xl sm:text-5xl text-center mb-4 font-bold max-w-2xl">
        Unlock Academic Success with Spark Xplorer
      </h1>
      <p class="font-bold sm:text-xl mb-8 max-w-xl text-center">
        Empowering K-12 students to excel academically And
        secure scholarships to top US universities.
      </p>
      <nuxt-link href="/auth/signup"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary p-2.5 text-sm md:text-base w-full border border-primary-600 text-primary-600 bg-primary-100 hover:bg-primary-100/50 max-w-xs focus-visible:ring-offset-2">Join
        Now &rarr;</nuxt-link>
      <div class="mt-8 relative">
        <img :src="TutorsCard" alt="Hero Image" class="absolute top-0 hidden md:block left-8">
        <img :src="ScholarCard" alt="Hero Image" class="absolute top-8 right-12 hidden md:block">
        <img :src="SessionCard" alt="Hero Image" width="200"
          class="hidden lg:block absolute bottom-12 right-0 xl:-right-16">
        <img :src="HeroImage" alt="Hero Image" class="">
      </div>
    </div>
  </section>
  <section id="programs" class="bg-primary-100 space-y-8 py-8 px-4 grid place-items-center">
    <span class="max-w-4xl block font-bold text-center mx-auto">
      Spark Xplorers is an after-school practice and tutoring program designed to help K-12 students achieve A-honor
      status using US-based curricula supported by On-Demand Tutoring and personalized learning.
    </span>
    <div class="bg-white max-w-5xl p-6 rounded-md grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
      <div v-for="(feature, i) in features" :key="i" class="space-y-3">
        <img :src="feature.icon" :alt="feature.title" class="w-20" />
        <h2 class="font-semibold">{{ feature.title }}</h2>
        <p class="text-sm">{{ feature.text }}</p>
      </div>
    </div>
    <nuxt-link href="/auth/signup"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-primary-100 transition-colors mt-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary p-2.5 text-sm md:text-base w-full border text-primary-100 bg-primary-600 hover:bg-primary-600/90 max-w-xs focus-visible:ring-offset-2">Sign
      up &rarr;</nuxt-link>
  </section>
  <section id="key-features" class="py-12 md:grid md:grid-cols-5 gap-4">
    <div class="col-span-3 flex flex-col justify-center gap-y-8">
      <div class="w-full lg:w-5/6 space-y-5 px-4 lg:px-0 ml-auto">
        <h1 class="font-bold text-primary-600 text-xl">KEY FEATURES</h1>
        <div v-for="(feature, i) in keyFeatures" :key="i" class="flex gap-4 items-center">
          <span
            class="w-6 lg:w-8 h-6 lg:h-8 rounded-full text-white bg-gradient-to-r from-[#00C4CC] text-sm shrink-0 flex items-center justify-center to-primary">{{
              i +
              1 }}</span>
          <p class="text-sm lg:text-base"><span class="font-semibold text-primary-600">{{ feature.title }}</span>{{
            feature.text }}</p>
        </div>
        <div class="flex justify-center py-2">
          <nuxt-link href="/auth/signup"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm md:text-base p-2.5 w-full border text-primary-100 bg-primary-600 hover:bg-primary-600/90 max-w-xs focus-visible:ring-offset-2">Join
            Now &rarr;</nuxt-link>
        </div>
      </div>
    </div>
    <div class="col-span-2 max-w-md pt-4 md:pt-0 mx-auto">
      <img :src="KeyFeatures" alt="Spark xplorer dashboard image" class="">
    </div>
  </section>
  <section id="package" class="py-12 bg-primary-100 px-4">
    <div class="grid place-items-center mx-auto sm:grid-cols-2 gap-6 max-w-3xl">
      <div class="space-y-4">
        <h1 class="text-2xl font-bold text-primary-600">The Right Plan for Your Kid</h1>
        <p class="text-sm text-primary-foreground">
          Choose a plan that fits your pace with our flexible eLearning
          Practice Sessions. Affordable pricing to level up your skills at
          your convenience.
        </p>
        <div class="bg-white p-4 rounded-2xl space-y-4">
          <div class="flex gap-2 items-center">
            <span class="w-5 h-5 rounded-full bg-primary-600 grid text-primary-100 place-items-center">
              <el-icon color="#fff" size="12">
                <Check />
              </el-icon>
            </span>
            <p class="text-sm">Free 1 month trial for new user</p>
          </div>
          <div class="flex gap-2 items-center">
            <span class="w-5 h-5 rounded-full bg-primary-600 grid text-primary-100 place-items-center">
              <el-icon color="#fff" size="12">
                <Check />
              </el-icon>
            </span>
            <p class="text-sm">Cancel anytime you want</p>
          </div>
        </div>
        <nuxt-link href="/auth/signup"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm md:text-base p-2.5 w-full border text-primary-100 bg-primary-600 hover:bg-primary-600/90 focus-visible:ring-offset-2">Sign
          Up &rarr;</nuxt-link>
      </div>
      <div class="">
        <HomeAccordion />
      </div>
    </div>
  </section>
  <section class="py-16 px-4 relative">
    <div class="bg-cover bg-no-repeat max-w-lg absolute right-0 w-full top-0 bottom-0"
      :style="{ backgroundImage: `url(${ColoredLayeredLogo})` }"></div>
    <div class="max-w-5xl mx-auto">
      <HomeCarousel />
    </div>
  </section>
  <section class="max-w-5xl py-12 px-4 mx-auto">
    <h1 class="font-bold text-2xl">Frequently Asked Questions</h1>
    <div class="flex gap-4 pt-8">
      <div class="w-64 h-fit sm:flex shrink-0 hidden">
        <img :src="FAQImage" alt="FAQs Image" class="">
      </div>
      <HomeFaqs />
    </div>
  </section>
  <section class="py-16 px-4 md:px-6 bg-primary-100 text-[#696984]">
    <div class="max-w-screen-xl mx-auto">
      <h1 class="text-primary-600 font-bold text-center text-2xl mb-4">Lastest News and Resources</h1>
      <p class="text-center mb-4">See the developments that have occurred to TOTC in the world</p>
      <div class="grid md:grid-cols-5 gap-8 mt-16">
        <div class="md:col-span-2 space-y-4">
          <img :src="NewsImage" alt="featured news article image" class="rounded-xl">
          <span
            class="bg-primary-600 rounded-full uppercase inline-block text-xs font-medium text-white px-4 py-1.5">news</span>
          <h3 class="text-medium text-primary-foreground">Class adds $30 million to its balance sheet for a
            Zoom-friendly
            edtech solution</h3>
          <p class="text-sm">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates
            exclusively...</p>
          <NuxtLink to="#" class="text-sm hover:text-primary-600 block underline">Read More</NuxtLink>
        </div>
        <div class="md:col-span-3 space-y-5">
          <HomeNewsList />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary-100 mt-16 px-4 md:px-6">
    <div class="max-w-5xl mx-auto grid gap-8 md:grid-cols-5">
      <div class="col-span-3 py-12 max-w-xl mx-auto md:max-w-none">
        <h1 class="font-bold text-2xl mb-7 max-w-[34rem]">
          Subscribe to get information, latest news and other interesting offer abour Spark Xplorer
        </h1>
        <el-form class="w-full flex gap-3">
          <base-input name="email" type="email" placeholder="Email Address" v-model:value="formData.email"
            class="flex-1" />

          <base-button styles="font-medium text-sm" size="large" :loading="loading" @click="handleSubscribeSubmit"
            type="primary">
            Subscribe &rarr;
          </base-button>
        </el-form>
      </div>
      <div class="col-span-2 -mt-10 relative hidden md:block">
        <div class="absolute bottom-0 right-0 w-80 lg:w-[25rem]">
          <img :src="SubscribeImage" alt="two peolpe in a meeting" class="">
        </div>
      </div>
    </div>
  </section>
  <section id="contact-us" class="py-12 px-4 md:px-6 relative">
    <div class="bg-cover bg-no-repeat max-w-lg absolute right-0 w-full top-0 bottom-0"
      :style="{ backgroundImage: `url(${ColoredLayeredLogo})` }"></div>
    <div class="mx-auto max-w-3xl">
      <h1 class="text-primary-600 font-bold text-center text-2xl mb-4">Get in Touch</h1>
      <p class="text-center">Let&apos;s make something new, different and more meaningful or make thing more visual or
        conceptual</p>
      <HomeContactUs />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { Check } from '@element-plus/icons-vue'
import HeroImage from '~/assets/images/illustrations/home/hero.png'
import ScholarCard from '~/assets/images/illustrations/home/scholars.png'
import SessionCard from '~/assets/images/illustrations/home/sessions.png'
import TutorsCard from '~/assets/images/illustrations/home/tutors.png'
import LayeredLogo from '~/assets/images/illustrations/home/layer-logo.png'
import ColoredLayeredLogo from '~/assets/images/illustrations/home/colored-layer-logo.png'
import Pathways from '~/assets/images/illustrations/home/pathways.png'
import Prep from '~/assets/images/illustrations/home/prep.png'
import Practice from '~/assets/images/illustrations/home/practice.png'
import Tutoring from '~/assets/images/illustrations/home/tutoring.png'
import KeyFeatures from '~/assets/images/illustrations/home/key-features.png'
import FAQImage from '~/assets/images/illustrations/home/faqs.png'
import NewsImage from '~/assets/images/illustrations/home/blog-1.png'
import SubscribeImage from '~/assets/images/illustrations/home/subscribe.png'

useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  }
});

definePageMeta({
  layout: 'home'
})

const loading = ref(false);
const formData = ref({
  email: "",
});

const features = [
  { icon: Practice, title: 'After-School Practice', text: 'Overview of how students engage with the Spark Xplorers platform for daily practice using IXL.com, with continuous tracking of their performance and progress.' },
  { icon: Tutoring, title: 'Tutoring Services', text: 'Detailed description of the on-demand tutoring through Tutor.com, with benefits like 24/7 access, wide subject variety, and expert tutoring in core subjects.' },
  {
    icon: Prep, title: 'Test Prep and Assessment Skill Plans', text: 'Spark Xplorers offers preparation tutorials for a variety of tests'
  },
  { icon: Pathways, title: 'Learning Pathways', text: 'Explanation of how personalized learning plans are developed based on individual student progress, ensuring they stay on track and reach their academic goals.' }
]

const keyFeatures = [
  {
    title: 'Expert Tutoring: ',
    text: 'Access over 4,000 expert  tutors in 250+ subjects, from Math to Social Studies, through  Tutor.com.'
  },
  {
    title: 'Peer-to-Peer Tutoring: ',
    text: 'Foster collaborative  learning through peer-to-peer tutoring, allowing students to learn from and support each other.'
  },
  {
    title: 'Personalized Learning Pathways: ',
    text: 'Each student gets a custom learning plan tailored to their academic needs.'
  },
  {
    title: 'Real-Time Performance Tracking: ',
    text: "Monitor your child's progress with real - time analytics and personalized feedback."
  },
  {
    title: 'Test Prep and Assessment Skill Plans: ',
    text: 'Prepare for a wide range of exams and assessments with practice tutorials and live tutoring support for tests like the SAT®, ACT®, GED®, PSAT®, STAAR, TSI Assessment 2.0, and many more.'
  },
  {
    title: 'Motivational Rewards System: ',
    text: 'Students are rewarded for  meeting goals, keeping learning fun and engaging.'
  },
]

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: formData.value,
});

const handleSubscribeSubmit = handleSubmit(async (values) => {
  console.log(values)
})
</script>

<style scoped></style>