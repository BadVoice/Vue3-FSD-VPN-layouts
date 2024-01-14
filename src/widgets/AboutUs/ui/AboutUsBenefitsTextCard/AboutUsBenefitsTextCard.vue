<script setup lang="ts">
import AboutUsBenefitsCardLayer from '../AboutUsBenefitsCardLayer/AboutUsBenefitsCardLayer.vue'
defineProps({
  icon: Object,
  text: String,
  variant: String
})
</script>
<template>
  <AboutUsBenefitsCardLayer :variant="variant">
    <template #icon>
      <component :is="icon" />
    </template>
    <template #text>
      {{ text }}
    </template>
  </AboutUsBenefitsCardLayer>
</template>
