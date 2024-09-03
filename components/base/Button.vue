<template>
  <div :class="containerClass">
    <el-button
      :type="type"
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

const buttonHeight = computed(() => {
  switch (props.size) {
    case "small":
      return "32px";
    case "medium":
      return "40px";
    case "large":
      return "48px";
    default:
      return "48px";
  }
});

const buttonStyle = computed(() => ({
  backgroundColor: props.bgColor,
  color: props.textColor,
  borderColor: props.borderColor || props.bgColor, // Use borderColor if provided, otherwise use bgColor
  height: buttonHeight.value,
}));

const buttonClass = computed(() => `${props.styles} custom-button`);
</script>

<style scoped>
.custom-button {
  border-radius: 123px !important;
  box-shadow: none;
  font-weight: 700;
  font-size: 16px;
}
</style>
