<script setup lang="ts">
import { defineProps } from 'vue'
import AboutUsCardLayer from '../AboutUsCardLayer/AboutUsCardLayer.vue'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
const breakpoints = useBreakpoints()
const props = defineProps({
  icon: {
    type: Object,
    default: ''
  },
  titleContent: {
    type: String,
    default: ''
  },
  textContent: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <AboutUsCardLayer
    :size="
      breakpoints.isXXl ? 'big' : breakpoints.isLg ? 'medium' : breakpoints.isSm ? 'small' : 'small'
    "
  >
    <template #icon>
      <div
        class="relative border border-white/[0.05] border-solid rounded-[18px]"
        :class="breakpoints.isLg ? 'w-[100px] h-[100px]' : 'w-[70px] h-[70px]'"
      >
        <component
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          :is="props.icon"
          :size="
            breakpoints.isXXl
              ? 'big'
              : breakpoints.isLg
                ? 'medium'
                : breakpoints.isSm
                  ? 'small'
                  : 'small'
          "
        />
      </div>
    </template>
    <template #titleContent>
      {{ titleContent }}
    </template>
    <template #textContent>
      {{ textContent }}
    </template>
  </AboutUsCardLayer>
</template>
