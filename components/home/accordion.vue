<template>
  <div class="space-y-6">
    <div v-for="item in items" :key="item.id"
      :class="[active === item.id ? 'bg-primary text-white' : 'bg-white', 'rounded-2xl']">
      <button :class="['p-4 font-semibold text-lg w-full flex items-center justify-between']"
        @click="active = item.id">{{ item.title }}
        <span
          :class="['w-5 h-5 rounded-full bg-primary/5 grid text-primary place-items-center transition-transform', { 'rotate-180 text-white': active === item.id }]">
          <ChevronDown size="12" />
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
import { ChevronDown } from 'lucide-vue-next'

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
