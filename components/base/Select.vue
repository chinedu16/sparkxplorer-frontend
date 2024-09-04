<template>
  <el-form-item :error="errorMessage">
    <div class="mb-2 text-sm font-medium">{{ label }}</div>
    <el-select
      class="custom-base-select"
      v-model="internalValue"
      :placeholder="placeholder"
      :size="size"
      :style="{ width }"
      @change="handleChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useField } from "vee-validate";

interface Option {
  value: string;
  label: string;
}

const props = defineProps<{
  name: string;
  options: Option[];
  placeholder: string;
  label: string;
  modelValue: string;
  size?: string;
  width?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { value: field, errorMessage } = useField(props.name);

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  }
);

const handleChange = (value: string) => {
  emit("update:modelValue", value);
  field.value = value;
};
</script>

<style>
.custom-base-select .el-select__wrapper {
  border-radius: 123px !important;
  height: 45px;
  border: 1px solid #475569;
  box-shadow: none;
  color: #475569;
  font-weight: 500;
}
</style>
