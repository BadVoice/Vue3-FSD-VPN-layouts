<script setup lang="ts">
import { BaseButton } from '@/shared/ui'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
const breakpoints = useBreakpoints()
</script>
<template>
  <div class="flex items-center justify-end">
    <BaseButton
      :link="true"
      to="#"
      v-if="breakpoints.isSm"
      :size="breakpoints.isLg ? 'medium' : 'small'"
      variant="primary"
      class="rounded-2xl ml-6 duration-300"
      text="Попробовать vpn"
    ></BaseButton>
    <BaseButton
      v-if="breakpoints.isSm"
      variant="secondary"
      :size="breakpoints.isLg ? 'medium' : 'small'"
      text="Войти"
      class="rounded-2xl ml-9"
    ></BaseButton>
  </div>
</template>
