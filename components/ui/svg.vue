<template>
  <svg xmlns="http://www.w3.org/2000/svg" v-bind="$attrs" aria-hidden :width="width || size" :height="height || size"
    class="select-none inline-block text-current shrink-0 leading-none" fill="none">
    <slot />
  </svg>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    size: {
      type: [String, Number],
      default: 24, // Default size of the icon
    },
    width: {
      type: [String, Number],
    },
    height: {
      type: [String, Number],
    },
  },
  setup(props, { attrs }) {
    // Destructure props to use in template
    const { size, width, height } = toRefs(props);

    return {
      width,
      height,
      size,
      attrs,
    };
  },
});
</script>
