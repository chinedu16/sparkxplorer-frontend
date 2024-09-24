<template>
    <div class="grid grid-cols-4 gap-8">
        <div class="rounded-3xl border shadow-lg p-6" v-for="i in 4">
            <div class="bg-purple-one flex items-center justify-center rounded-full h-10 w-10">
                <img src="@/assets/images/icons/questions.svg" alt="">
            </div>
            <h3 class="mt-6 mb-3 text-gray-one text-sm font-bold">Answered Questions</h3>
            <div class="flex items-center justify-between">
                <span class="font-black text-3xl">6562</span>
                <div class="flex text-red-500 font-semibold">
                    <img src="../../assets/images/icons/graph-up.svg" alt="">
                    <span>-88%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>