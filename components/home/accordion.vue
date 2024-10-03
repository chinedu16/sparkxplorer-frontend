<template>
  <div class="space-y-6">
    <div v-for="item in items" :key="item.id"
      :class="[active === item.id ? 'bg-primary-600 text-white' : 'bg-white', 'rounded-2xl']">
      <button :class="['p-4 font-semibold text-lg w-full flex items-center justify-between']"
        @click="active = item.id">{{ item.title }}
        <span
          :class="['w-5 h-5 rounded-full bg-primary-600/5 grid text-primary-600 place-items-center transition-transform', { 'rotate-180 text-white': active === item.id }]">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15">
            <path fill="currentColor" fill-rule="evenodd"
              d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707"
              clip-rule="evenodd" />
          </svg>
        </span></button>
      <div v-show="active === item.id" class="grid overflow-hidden transition-all duration-1000"
        :class="active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
        <p class="px-4 pb-4 text-sm">{{ item.content }}</p>
        <div class="flex items-center px-4 pb-4 gap-3">
          <span class="font-bold">{{ item.monthlyCost }} <small class="text-primary-100 font-normal">/
              month</small></span> |
          <span class="font-bold">{{ item.yearlyCost }} <small class="text-primary-100 font-normal">/
              year</small></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(1)
const items = [
  {
    id: 1,
    title: 'Practice Sessions',
    content: 'Custom Pricing for eLearning Practice Sessions: Learn at Your Pace. Tailored Pricing for eLearning Practice Sessions.',
    monthlyCost: '$68',
    yearlyCost: '$816',
  },
  {
    id: 2,
    title: 'Tutoring Packages',
    content: 'Custom Pricing for eLearning Practice Sessions: Learn at Your Pace. Tailored Pricing for eLearning Practice Sessions.',
    monthlyCost: '$90',
    yearlyCost: '$1080',
  },
  {
    id: 3,
    title: 'Test Preparation',
    content: 'Custom Pricing for eLearning Practice Sessions: Learn at Your Pace. Tailored Pricing for eLearning Practice Sessions.',
    monthlyCost: '$150',
    yearlyCost: '$1800',
  },
]
</script>
