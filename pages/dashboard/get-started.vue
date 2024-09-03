<template>
  <div class="flex justify-center items-center w-full mt-40">
    <div class="w-7/12">
      <h1 class="font-black text-3xl text-center">
        Hello David, Let’s Finish Setting Up Your Account! ☀️
      </h1>
      <div class="demo-collapse my-8 border">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Getting Started" name="1">
            <div>
                
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <base-button
        styles="w-full font-bold bg-white text-primary"
        type="primary"
        bgColor="#FFFFFF"
        textColor="#4F46E5"
        borderColor="#4F46E5"
      >
        I will do these later
      </base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>

<style scoped></style>
