<script setup lang="ts">
import { MobileRoutingNavbar } from '@/shared/ui/'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
import DropdownNavbarProfileCard from '../DropdownNavbarProfileCard/DropdownNavbarProfileCard.vue'
const breakpoints = useBreakpoints()
import { type Props } from './types'

const props = defineProps<Props>()
</script>

<template>
  <div
    v-if="props.open"
    class="w-full justify-between px-[30px] flex items-center bg-bgSectionSecondary flex-col"
  >
    <MobileRoutingNavbar
      v-if="!breakpoints.isXXl"
      :textSize="breakpoints.isXxs ? 'small' : 'medium'"
    />
    <DropdownNavbarProfileCard v-if="breakpoints.isXxs || breakpoints.isXs" />
  </div>
</template>
