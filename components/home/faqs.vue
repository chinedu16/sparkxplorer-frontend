<template>
  <el-collapse v-model="active" accordion class="lg:hidden">
    <el-collapse-item v-for="faq in faqs" :key="faq.id" :name="faq.id">
      <template #title>
        <span class="font-medium text-base text-left">{{ faq.question }}</span>
      </template>
      <p class="text-sm px-8">{{ faqs[Number(active) - 1].answer }}</p>
    </el-collapse-item>
  </el-collapse>
  <div class="hidden lg:flex">
    <div class="w-96 bg-white h-fit">
      <button type="button" v-for="faq in faqs" :key="faq.id"
        :class="['flex gap-2 px-2 py-3 no-wrap hover:bg-primary-light w-full mb-1 transition-colors', { 'bg-primary-light': active === faq.id }]"
        @click="setActive(faq.id)">
        <span :class="['w-3 h-3 mt-1.5 rounded-full', active === faq.id ? 'bg-primary' : 'bg-primary-light']"></span>
        <p class="flex-1 text-left">{{ faq.question }}</p>
        <ChevronRight class="w-4 h-4" />
      </button>
    </div>
    <div class="-ml-12 w-96 rounded-xl bg-primary-light -z-[1] -mt-8 -mb-4 py-8 pr-5 pl-16">
      <h2 class="font-semibold mb-5">{{ faqs[Number(active) - 1].question }}</h2>
      <p class="text-sm">{{ faqs[Number(active) - 1].answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

const active = ref('1')

const setActive = (id: string) => {
  active.value = id
}

const faqs = [
  {
    id: '1',
    question: 'What is Spark Xplorer about?',
    answer: 'Spark Xplorers is an after-school practice and tutoring program designed to help K-12 students achieve A-honor status using US-based curricula supported by On-Demand Tutoring and personalized learning.'
  },
  {
    id: '2',
    question: 'Is Spark Xplorer Free',
    answer: 'Spark Xplorers is an after-school practice and tutoring program designed to help K-12 students achieve A-honor status using US-based curricula supported by On-Demand Tutoring and personalized learning.'
  },
  {
    id: '3',
    question: 'Enroll Now Page: Sign Up for Spark Xplorers dfddfdfdfdfdfdfdf',
    answer: 'Spark Xplorers is an after-school practice and tutoring program designed to help K-12 students achieve A-honor status using US-based curricula supported by On-Demand Tutoring and personalized learning.'
  },
  {
    id: '4',
    question: 'Enroll Now Page: Sign Up for Spark Xplorers dfddfdfdfdfdfdfdf',
    answer: 'Spark Xplorers is an after-school practice and tutoring program designed to help K-12 students achieve A-honor status using US-based curricula supported by On-Demand Tutoring and personalized learning.'
  },
  {
    id: '5',
    question: 'Enroll Now Page: Sign Up for Spark Xplorers dfddfdfdfdfdfdfdf',
    answer: 'Spark Xplorers is an after-school practice and tutoring program designed to help K-12 students achieve A-honor status using US-based curricula supported by On-Demand Tutoring and personalized learning.'
  },
]
</script>