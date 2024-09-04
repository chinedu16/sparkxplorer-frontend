<template>
  <div class="number-input-container">
    <button
      @click="decrement"
      class="w-10 flex bg-gray-one justify-center items-center h-10 btn-decrement"
    >
      -
    </button>
    <input
      type="text"
      v-model="value"
      @input="onInput"
      class="number-input w-20 h-10"
    />
    <button
      @click="increment"
      class="w-10 bg-gray-one flex justify-center items-center h-10 btn-increment"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref<number>(0);

const increment = () => {
  value.value++;
};

const decrement = () => {
  if (value.value > 0) {
    value.value--;
  }
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newValue = parseInt(target.value, 10);
  if (!isNaN(newValue)) {
    value.value = newValue;
  } else {
    value.value = 0;
  }
};
</script>

<style scoped>
.number-input-container {
  display: flex;
  align-items: center;
}

.btn-decrement,
.btn-increment {
  /* background-color: #007bff; */
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
}

.btn-decrement:hover,
.btn-increment:hover {
  /* background-color: #0056b3; */
}

.number-input {
  text-align: center;
  font-size: 18px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
