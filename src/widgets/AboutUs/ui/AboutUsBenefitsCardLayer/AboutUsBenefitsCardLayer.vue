<script setup lang="ts">
import { type Props } from './types'
defineProps<Partial<Props>>()
</script>
<template>
  <div class="flex flex-row items-center gap-[19px]">
    <div
      class="flex items-center justify-center rounded-[32px] border border-white/[0.05] border-solid w-[26px] h-[26px]"
      :class="[
        variant === 'primary' ? 'bg-gradient-to-r from-primary1/[0.15] to-primary2/[0.15] ' : '',
        variant === 'error' ? 'bg-[#EF3D4733]' : ''
      ]"
    >
      <slot name="icon" />
    </div>

    <span
      class="font-onest leading-[140%] text-white"
      :class="[
        size === 'big' ? ' text-[20px]' : '',
        size === 'medium' ? 'text-[20px] ' : '',
        size === 'small' ? 'text-[16px] ' : ''
      ]"
      ><slot name="text" />
    </span>
  </div>
</template>
