<script setup lang="ts">
import { BrandLogoIcon } from '@/shared/ui/'
import HeaderLogoLayout from '../HeaderLogoLayout/HeaderLogoLayout.vue'

import { type HeaderLogoProps } from './types'

withDefaults(defineProps<Partial<HeaderLogoProps>>(), {
  variant: 'primary',
  to: '/'
})

defineEmits(['click'])
</script>

<template>
  <div class="flex items-center">
    <BrandLogoIcon class="mr-[12px]" />
    <HeaderLogoLayout>
      <template #textContent>
        <a :href="to" class="text-white cursor-pointer">Tvoy VPN</a>
      </template>
    </HeaderLogoLayout>
  </div>
</template>
