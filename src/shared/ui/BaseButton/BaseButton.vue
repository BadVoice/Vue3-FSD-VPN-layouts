<script setup lang="ts">
import { type Props } from './types'

withDefaults(defineProps<Partial<Props>>(), {
  variant: 'primary',
  to: '/'
})

defineEmits(['click'])
</script>

<template>
  <button
    :disabled="disabled"
    @click="method"
    class="flex items-center justify-center transition"
    :class="[
      size === 'small' ? 'p-2 text-xs' : '',
      size === 'medium' ? 'px-[32px] py-[16px] leading-6 text-lg font-normal' : '',
      size === 'big' ? ' px-32 h-16 text-xl' : '',
      variant === 'primary'
        ? 'group bg-gradient-to-r from-primary2 to-primary1 hover:from-primary2Hover hover:to-primary1Hover'
        : '',
      variant === 'secondary' ? 'group border border-primary1 ' : '',
      variant === 'link' ? '' : ''
    ]"
  >
    <span
      class="whitespace-nowrap"
      :class="[variant === 'primary' ? 'group-hover:text-slate-950' : '']"
      >{{ text }}</span
    >
  </button>
</template>
