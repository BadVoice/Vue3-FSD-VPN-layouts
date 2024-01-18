<script setup lang="ts">
import AboutUsBenefitsTextCard from '../AboutUsBenefitsTextCard/AboutUsBenefitsTextCard.vue'
import { type Props } from './types'
defineProps<Partial<Props>>()
</script>
<template>
  <div
    class="flex h-auto"
    :class="[
      size === 'big' ? ' flex-col w-[514px]' : '',
      size === 'medium' ? 'flex-col w-[306px]' : '',
      size === 'small' ? ' flex-col w-[281px]' : ''
    ]"
  >
    <div
      :class="[
        size === 'big' ? ' pb-[41px]' : '',
        size === 'medium' ? 'pb-[41px]' : '',
        size === 'small' ? ' pb-[20px]' : ''
      ]"
    >
      <h2
        class="font-stolzl leading-[132%] text-[40px] text-white"
        :class="[
          size === 'big' ? ' text-[40px]' : '',
          size === 'medium' ? 'text-[40px]' : '',
          size === 'small' ? ' text-[26px]' : ''
        ]"
      >
        {{ title }}
      </h2>
    </div>
    <div
      class="flex flex-col"
      :class="[
        size === 'big' ? ' gap-[20px]' : '',
        size === 'medium' ? 'gap-[20px]' : '',
        size === 'small' ? ' gap-[18px]' : ''
      ]"
    >
      <AboutUsBenefitsTextCard
        v-for="(item, index) in text"
        :key="index"
        :text="item.toString()"
        :icon="icon"
        :variant="variant ? variant.toString() : undefined"
      />
    </div>
  </div>
</template>
