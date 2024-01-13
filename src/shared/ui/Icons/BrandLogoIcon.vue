<script setup lang="ts">
import { type BrandLogoProps } from './types'

withDefaults(defineProps<Partial<BrandLogoProps>>(), {
  to: '/'
})

defineEmits(['click'])
</script>

<template>
  <a :href="to">
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="53" viewBox="0 0 54 53" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.08372 14.7036C6.02499 17.716 7.07401 18.2059 10.9452 18.3763L14.1097 18.5156V29.7603V41.0053H17.0309H19.952V29.7223V18.4394H25.4698C28.5045 18.4394 30.9875 18.3249 30.9875 18.1853C30.9875 17.1397 28.1692 14.2343 26.2812 13.3333C24.6671 12.5631 24.5947 12.5588 12.8209 12.5559L0.983418 12.5526L3.08372 14.7036ZM48.8389 13.2326C46.4777 14.3082 45.4446 15.6186 41.4468 22.6075C39.3631 26.2508 37.5812 29.2311 37.4874 29.2305C37.3936 29.2295 36.0982 27.0955 34.6094 24.4883L31.9018 19.7475H28.5133H25.1244L25.5405 20.5109C28.0238 25.0662 37.3267 41.0053 37.502 41.0053C37.6285 41.0053 41.206 34.9347 45.4517 27.5148C49.6977 20.0952 53.382 13.693 53.6393 13.2885C54.1051 12.5552 54.0999 12.5526 52.2031 12.5598C50.997 12.5644 49.7643 12.8107 48.8389 13.2326Z"
        fill="url(#paint0_linear_2156_1368)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2156_1368"
          x1="53.8955"
          y1="12.5526"
          x2="-2.78985"
          y2="19.761"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B5A9FF" />
          <stop offset="1" stop-color="#6E81FE" />
        </linearGradient>
      </defs>
    </svg>
  </a>
</template>
