<script setup lang="ts">
defineProps({
  variant: String
})
</script>
<template>
  <div class="flex flex-row items-center gap-[15px]">
    <div
      class="flex items-center justify-center rounded-[32px] border border-white/[0.05] border-solid w-[24px] h-[24px]"
      :class="[
        variant === 'primary' ? 'bg-gradient-to-r from-primary1/[0.15] to-primary2/[0.15] ' : '',
        variant === 'error' ? 'bg-[#EF3D4733]' : ''
      ]"
    >
      <slot name="icon" />
    </div>

    <span class="text-[20px] font-onest font-weight-400 text-white"><slot name="text" /> </span>
  </div>
</template>
