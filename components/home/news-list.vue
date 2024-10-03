<template>
    <div v-for="(item, i) in news" :key="i" class="flex gap-5">
        <div class="w-[112px] lg:w-[168px] h-20 lg:h-[120px] rounded-xl relative">
            <img :src="item.image" :alt="item.title">
            <span
                class="bg-primary-600 whitespace-nowrap rounded-full bottom-2 right-2 absolute uppercase text-xs font-medium text-white px-2 py-1"><small>{{
                    item.tag
                    }}</small></span>
        </div>
        <div class="space-y-4 flex-1">
            <h3 class="text-medium text-primary-foreground">{{ item.title }}</h3>
            <p class="text-sm">{{ item.title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import News1Image from '~/assets/images/illustrations/home/press-release.png'
import News2Image from '~/assets/images/illustrations/home/blog-2.png'
import News3Image from '~/assets/images/illustrations/home/blog-3.png'

const news = [
    {
        title: 'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
        tag: 'press release',
        image: News1Image,
        body: 'Class Technologies Inc., the company that created Class,...'
    },
    {
        title: 'Zoom’s earliest investors are betting millions on a better Zoom for schools',
        tag: 'news',
        image: News2Image,
        body: 'Zoom was never created to be a consumer product. Nonetheless, the...'
    },
    {
        title: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
        tag: 'news',
        image: News3Image,
        body: 'This year, investors have reaped big financial returns from betting on Zoom...'
    },
]
</script>

<style></style>