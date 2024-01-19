<script setup lang="ts">
import HeaderSectionLayer from '../HeaderSectionLayer/HeaderSectionLayer.vue'
import { defineProps } from 'vue'
import type { Props } from './types'

const propsWithDefaults = defineProps<Props>()
</script>

<template>
  <HeaderSectionLayer class="bg-pr">
    <template #topTitle>
      {{ propsWithDefaults.topTitle }}
    </template>
    <template #title>
      {{ propsWithDefaults.title }}
    </template>
    <template #titleGradient>
      {{ propsWithDefaults.titleGradient }}
    </template>
    <template #subTitle>
      {{  propsWithDefaults.subTitle }}
    </template>
  </HeaderSectionLayer>
</template>
