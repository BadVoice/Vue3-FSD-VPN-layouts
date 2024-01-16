<script setup lang="ts">
import type { Props } from './types'
import DropdownNavbarProfileLayer from '../DropdownNavbarProfileLayer/DropdownNavbarProfileLayer.vue'
import { ProfileIcon } from '@/shared/ui/'

const props = defineProps<Props>()
</script>

<template>
  <DropdownNavbarProfileLayer>
    <template #iconContent>
      <div
        class="relative bg-blackStroke border border-white/[0.05] border-solid rounded-[18px] w-[50px] h-[50px]"
      >
        <component
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          :is="props.icon"
        />
      </div>
    </template>
    <template #textContent>
      {{ props.textContent }}
    </template>
    <template #userEmailContent>
      {{ props.userEmailContent }}
    </template>
  </DropdownNavbarProfileLayer>
</template>
