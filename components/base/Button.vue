<template>
  <div :class="containerClass">
    <el-button
      :type="type"
      :size="size"
      :circle="circle"
      native-type="submit"
      :disabled="disabled"
      :loading="loading"
      :class="buttonClass"
      :style="buttonStyle"
    >
      <slot />
    </el-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "medium",
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: "#4F46E5", // Default background color
  },
  textColor: {
    type: String,
    default: "#FFFFFF", // Default text color
  },
  borderColor: {
    type: String,
    default: "", // Optional border color
  },
  containerStyle: {
    type: String,
    default: "text-white", // Default container class
  },
  styles: {
    type: String,
    default: "", // Additional styles
  },
});

const containerClass = computed(() => props.containerStyle);

const buttonStyle = computed(() => ({
  backgroundColor: props.bgColor,
  color: props.textColor,
  borderColor: props.borderColor || props.bgColor, // Use borderColor if provided, otherwise use bgColor
}));

const buttonClass = computed(() => `${props.styles} custom-button`);
</script>

<style scoped>
.custom-button {
  border-radius: 123px !important;
  height: 48px;
  box-shadow: none;
  font-weight: 700;
}
</style>
