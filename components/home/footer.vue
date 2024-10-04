<template>
    <footer class="py-4 px-4 md:px-6 bg-primary-600">
        <div class="max-w-screen-xl gap-4 block space-y-4 md:space-y-0 md:flex text-sm justify-between text-white">
            <p class="">&copy; {{ year }}. All rights reserved</p>
            <p class="font-semibold">Spark Xplorer</p>
            <div class="flex items-center gap-3">
                <a v-for="(social, i) in socials" :key="i" :href="social.link" target="_blank" rel="noreferrer"
                    class="w-6 h-6 grid place-items-center hover:bg-primary-600/50">
                    <img :src="social.src" :alt="social.alt" class="">
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LinkedInLogo from "~/assets/images/icons/footer/linkedin.svg"
import YoutubeLogo from "~/assets/images/icons/footer/youtube.svg"
import TiktokLogo from "~/assets/images/icons/footer/tiktok.svg"
import InstagramLogo from "~/assets/images/icons/footer/instagram.svg"
import FacebookLogo from "~/assets/images/icons/footer/facebook.svg"

const year = computed(() => new Date().getFullYear())
const socials = [
    {
        src: LinkedInLogo,
        alt: 'linkedin logo',
        link: '#'
    },
    {
        src: YoutubeLogo,
        alt: 'youtube logo',
        link: '#'
    },
    {
        src: TiktokLogo,
        alt: 'tiktok logo',
        link: '#'
    },
    {
        src: InstagramLogo,
        alt: 'instagram logo',
        link: '#'
    },
    {
        src: FacebookLogo,
        alt: 'facebook logo',
        link: '#'
    },
]
</script>

<style></style>