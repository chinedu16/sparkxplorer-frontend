<template>
  <div class="bg-gray-100 text-gray-one py-1 px-3 rounded-full text-xs font-semibold justify-between flex">
    <div class="flex justify-between w-full">
      <button
        v-for="(item, index) in items"
        :key="index"
        :class="['tab-button', { active: activeTab === index }]"
        @click="setActiveTab(index)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(0);

const setActiveTab = (index) => {
  activeTab.value = index;
};
</script>

<style scoped>
.tabs {
  display: flex;
}

.tab-button {
}

.tab-button.active {
  background-color: white;
  border-radius: 30px;
  font-size: 12px;
  padding: 4px 10px;
  color: #1E293B;
  font-weight: 800;
}
</style>
