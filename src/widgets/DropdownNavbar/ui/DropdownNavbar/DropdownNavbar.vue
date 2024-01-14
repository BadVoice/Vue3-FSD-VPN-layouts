<script setup lang="ts">
import { BaseButton } from '@/shared/ui/'
import { MobileRoutingNavbar } from '@/shared/ui/'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
const breakpoints = useBreakpoints()
import { type Props } from './types'

const props = defineProps<Props>()
</script>

<template>
  <div
    v-if="props.open"
    class="w-full justify-between px-[30px] flex items-center bg-[#0F142B] flex-col"
  >
    <MobileRoutingNavbar />
    <div class="flex gap-6 align-center"></div>
  </div>
</template>
