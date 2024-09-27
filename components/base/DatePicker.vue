<template>
  <el-form-item :error="errorMessage">
    <div class="w-full custom-base-date-picker">
      <div v-if="label" class="mb-2 text-sm font-medium">{{ label }}</div>
      <el-date-picker
        class="custom-base-date-picker"
        v-model="internalValue"
        :type="type"
        :placeholder="placeholder"
        size="large"
        :style="{ width }"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
        @change="handleChange"
      />
    </div>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useField } from "vee-validate";

const props = defineProps<{
  name: string;
  type: string;
  placeholder: string;
  label: string;
  modelValue: string | null;
  size?: string;
  width?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | null): void;
}>();

const { value: field, errorMessage } = useField(props.name);

const internalValue = ref(props.modelValue);

// Watch for changes to the prop 'modelValue' and update internalValue
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== internalValue.value) {
      internalValue.value = newValue;
    }
  }
);

// Handle date picker change
const handleChange = (value: string | null) => {
  emit("update:modelValue", value);
  field.value = value;
};
</script>

<style>
.custom-base-date-picker .el-input__wrapper {
  border-radius: 123px !important;
  width: 100%;
  border: 1px solid #475569;
  box-shadow: none;
  color: #475569;
  font-weight: 500;
}

.custom-base-date-picker .el-date-editor {
  width: 100%;
}
</style>
