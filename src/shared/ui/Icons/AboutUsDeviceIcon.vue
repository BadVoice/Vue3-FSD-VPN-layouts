<script setup lang="ts">
import { type Adaptive } from './types'
defineProps<Partial<Adaptive>>()
</script>

<template>
  <svg
    :class="[
      size === 'big' ? ' ' : '',
      size === 'medium' ? '' : '',
      size === 'small' ? 'scale-[0.7]' : ''
    ]"
    width="124"
    height="118"
    viewBox="0 0 124 118"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3121_4779)">
      <path
        d="M81.4444 52.0555H70.3333C69.5966 52.0555 68.8901 52.3482 68.3691 52.8691C67.8482 53.3901 67.5555 54.0966 67.5555 54.8333V75.6667C67.5555 76.4034 67.8482 77.1099 68.3691 77.6308C68.8901 78.1518 69.5966 78.4444 70.3333 78.4444H81.4444C82.1811 78.4444 82.8877 78.1518 83.4086 77.6308C83.9296 77.1099 84.2222 76.4034 84.2222 75.6667V54.8333C84.2222 54.0966 83.9296 53.3901 83.4086 52.8691C82.8877 52.3482 82.1811 52.0555 81.4444 52.0555ZM81.4444 54.8333V72.8889H70.3333V54.8333H81.4444Z"
        fill="url(#paint0_linear_3121_4779)"
      />
    </g>
    <g filter="url(#filter1_d_3121_4779)">
      <path
        d="M75.8889 39.5555H42.5555C41.8188 39.5555 41.1123 39.8482 40.5914 40.3691C40.0704 40.8901 39.7778 41.5966 39.7778 42.3333V64.5555C39.7778 65.2923 40.0704 65.9988 40.5914 66.5197C41.1123 67.0407 41.8188 67.3333 42.5555 67.3333H53.6667V70.1111H49.9444C49.5189 70.0627 49.0911 70.18 48.7498 70.4386C48.4084 70.6972 48.1797 71.0773 48.1111 71.5C48.1797 71.9227 48.4084 72.3028 48.7498 72.5614C49.0911 72.82 49.5189 72.9372 49.9444 72.8889H64.6667V72.375H64.7778V64.5555H42.5555V42.3333H75.8889V49.2778H78.6667V42.3333C78.6667 41.5966 78.374 40.8901 77.8531 40.3691C77.3321 39.8482 76.6256 39.5555 75.8889 39.5555Z"
        fill="url(#paint1_linear_3121_4779)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3121_4779"
        x="28.2555"
        y="12.7555"
        width="95.2667"
        height="104.989"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="19.65" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.588235 0 0 0 0 0.596078 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3121_4779" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3121_4779"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_3121_4779"
        x="0.477772"
        y="0.255543"
        width="117.489"
        height="111.944"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="19.65" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.588235 0 0 0 0 0.596078 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3121_4779" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3121_4779"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3121_4779"
        x1="84.2222"
        y1="52.0555"
        x2="66.1121"
        y2="52.8377"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B5A9FF" />
        <stop offset="1" stop-color="#6E81FE" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3121_4779"
        x1="78.6667"
        y1="39.5555"
        x2="36.5984"
        y2="42.9105"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B5A9FF" />
        <stop offset="1" stop-color="#6E81FE" />
      </linearGradient>
    </defs>
  </svg>
</template>
