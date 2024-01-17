<script setup lang="ts">
import HeaderSectionLayer from '../HeaderSectionLayer/HeaderSectionLayer.vue'
import { BaseButton } from '@/shared/ui/'
import { withDefaults, defineProps } from 'vue'
import type { Props } from './types'

const propsWithDefaults = withDefaults(defineProps<Props>(), {
  topTitle: 'Tvoy VPN',
  title: 'Профиссиональный',
  titleGradient: 'VPN-сервис всего лишь за 100р',
  subTitle: 'Оставайтесь в безопасности и пользуйтесь любыми сайтами без ограничений'
})
</script>

<template>
  <HeaderSectionLayer>
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
      {{ propsWithDefaults.subTitle }}
    </template>
  </HeaderSectionLayer>
</template>
