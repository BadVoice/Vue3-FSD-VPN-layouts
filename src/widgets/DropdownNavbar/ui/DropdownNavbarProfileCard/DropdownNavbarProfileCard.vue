<script setup lang="ts">
import { DropdownProfileIcon } from '@/shared/ui/'
import DropdownNavbarProfile from '../DropdownNavbarProfile/DropdownNavbarProfile.vue'
import type { Props } from './types'

const item = {
  id: 1,
  icon: DropdownProfileIcon,
  textContent: 'Личный кабинет',
  userEmailContent: 'hello@gmail.com'
}

withDefaults(defineProps<Partial<Props>>(), {
  variant: 'gray'
})
</script>
<template>
  <div class="flex justify-between w-full gap-[30px] py-[300px] pb-[50px]">
    <DropdownNavbarProfile
      :key="item.id"
      :icon="item.icon"
      :textContent="item.textContent"
      :userEmailContent="item.userEmailContent"
      :variant="variant"
    />
  </div>
</template>
