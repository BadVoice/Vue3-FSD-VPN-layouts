<script setup lang="ts">
import type { PropType } from 'vue'
import AboutUsBenefitsTextCard from '../AboutUsBenefitsTextCard/AboutUsBenefitsTextCard.vue'
defineProps({
  title: String,
  icon: Object,
  text: {
    type: Array as PropType<string[] | undefined>,
    default: undefined
  },
  variant: String
})
</script>
<template>
  <div class="flex flex-col min-w-[514px]">
    <div class="pb-[41px]">
      <h2 class="font-stolzl font-weight-400 text-[40px] text-white">{{ title }}</h2>
    </div>
    <div class="flex flex-col gap-[18px]">
      <AboutUsBenefitsTextCard
        v-for="(item, index) in text"
        :key="index"
        :text="item"
        :icon="icon"
        :variant="variant"
      />
    </div>
  </div>
</template>
