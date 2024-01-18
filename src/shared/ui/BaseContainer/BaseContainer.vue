<script setup lang="ts">
import { type Props } from './types'

defineProps<Partial<Props>>()
</script>

<template>
  <div
    class="flex flex-wrap"
    :class="[
      size === 'big' ? 'mx-auto  w-[1218px]' : '',
      size === 'medium' ? 'mx-auto w-[736px]' : '',
      size === 'small' ? 'mx-auto w-[341px]' : ''
    ]"
  >
    <slot name="default"></slot>
  </div>
</template>

<style scoped></style>
