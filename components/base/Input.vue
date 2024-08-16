<template>
  <el-form-item :error="errorMessage">
    <div class="mb-2 text-sm font-medium">{{ label }}</div>
    <el-input
      v-model="internalValue"
      :type="type"
      :placeholder="placeholder"
      :class="['custom-input', inputClass, variantClass]"
      size="large"
    >
      <!-- Prefix Icon -->
      <template v-if="iconPrefix" #prefix>
        <img :src="`/icons/${iconPrefix}.svg`" alt="prefix-icon" class="icon-prefix" />
      </template>
      
      <!-- Suffix Icon -->
      <template v-if="iconSuffix" #suffix>
        <img :src="`/icons/${iconSuffix}.svg`" alt="suffix-icon" class="icon-suffix" />
      </template>
    </el-input>
  </el-form-item>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { ref, watch, computed } from "vue";

// Define props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String as () => "text" | "email" | "password" | "number",
    required: true,
  },
  iconPrefix: {
    type: String,
    required: false,
  },
  iconSuffix: {
    type: String,
    required: false,
  },
  inputClass: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "default",
  },
});

// Vee-validate field
const { value, errorMessage } = useField(props.name);

const internalValue = ref<string | number | undefined>(value.value as string | number);

watch(internalValue, (newVal) => {
  value.value = newVal;
});

watch(value, (newVal) => {
  internalValue.value = newVal as string | number;
});

const variantClass = computed(() => {
  if (props.variant === 'transparent') {
    return 'bg-transparent border-blue-500';
  }
  return '';
});
</script>

<style>
.custom-input .el-input__wrapper {
  border-radius: 123px !important;
  height: 45px;
  border: 1px solid #475569;
  box-shadow: none;
  color: #475569;
  font-weight: 500;
}

.icon-prefix,
.icon-suffix {
  width: 20px;
  height: 20px;
}

/* Transparent variant styling */
.custom-input.bg-transparent .el-input__wrapper {
  background-color: transparent !important;
  border-color: #3b82f6 !important;
}
</style>
