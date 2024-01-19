<script setup lang="ts">
import CloseBurgerBtnIcon from '@/shared/ui/Icons/CloseBurgerBtnIcon.vue'
import OpenBurherBtnIcon from '@/shared/ui/Icons/OpenBurgerBtnIcon.vue'
import { type Props } from './types'

withDefaults(defineProps<Partial<Props>>(), {
  state: true
})
</script>

<template>
  <div class="flex items-center">
    <OpenBurherBtnIcon v-if="state == true" class="cursor-pointer" />
    <CloseBurgerBtnIcon v-if="state == false" class="cursor-pointer" />
  </div>
</template>
