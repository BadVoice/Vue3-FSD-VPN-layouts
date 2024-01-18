<script setup lang="ts">
import { AboutUsDeviceIcon, AboutUsWifiIcon, AboutUsWorldIcon } from '@/shared/ui/'
import AboutUsCard from '../AboutUsCard/AboutUsCard.vue'
import { type Props } from './types'
defineProps<Partial<Props>>()

const items = <Array<any>>[
  {
    id: 1,
    icon: AboutUsWorldIcon,
    titleContent: 'Доступ ко всем мировым ресурсам',
    textContent: 'С помощью нашего VPN вы сможете использовать Instagram, Facebook, Wikipedia и др.'
  },
  {
    id: 2,
    icon: AboutUsDeviceIcon,
    titleContent: 'Неограниченное количество устройств',
    textContent:
      'Подпиской можно поделиться с друзьями, использовать на любом количестве устройств.'
  },
  {
    id: 3,
    icon: AboutUsWifiIcon,
    titleContent: 'Любое количество трафика',
    textContent: 'Пользуйтесь подпиской без ограничений на трафик, скачивайте фильмы, музыку.'
  }
]
</script>
<template>
  <div
    class="flex flex-wrap mt-[40px]"
    :class="[
      size === 'big' ? ' gap-[30px]' : '',
      size === 'medium' ? 'gap-[20px]' : '',
      size === 'small' ? 'gap-[20px]' : ''
    ]"
  >
    <AboutUsCard
      v-for="item in items"
      :key="item.id"
      :icon="item.icon"
      :titleContent="item.titleContent"
      :textContent="item.textContent"
    />
  </div>
</template>
