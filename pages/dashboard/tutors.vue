<template>
  <div class="iframe-container">
    <iframe src="https://www.tutor.com/" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Hide scrollbars */
  border: none;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

</style>
