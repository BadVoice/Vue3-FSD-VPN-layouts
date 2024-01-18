<script setup lang="ts">
import AboutUsBenefitsCardLayer from '../AboutUsBenefitsCardLayer/AboutUsBenefitsCardLayer.vue'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'

const breakpoints = useBreakpoints()
defineProps({
  icon: Object,
  text: String,
  variant: String
})
</script>
<template>
  <AboutUsBenefitsCardLayer
    :variant="variant"
    :size="
      breakpoints.isXXl ? 'big' : breakpoints.isLg ? 'medium' : breakpoints.isSm ? 'small' : 'small'
    "
  >
    <template #icon>
      <component class="w-[26px]" :is="icon" />
    </template>
    <template #text>
      {{ text }}
    </template>
  </AboutUsBenefitsCardLayer>
</template>
