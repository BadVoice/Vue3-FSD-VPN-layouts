<script setup lang="ts">
import { AboutUsDeviceIcon, AboutUsWifiIcon, AboutUsWorldIcon } from '@/shared/ui/'
import AboutUsCard from '../AboutUsCard/AboutUsCard.vue'

const items = [
  {
    id: 1,
    icon: AboutUsWorldIcon,
    titleContent: 'Доступ ко всем мировым ресрсам',
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
  <div class="flex justify-Between flex-row gap-[30px]">
    <AboutUsCard
      v-for="item in items"
      :key="item.id"
      :icon="item.icon"
      :titleContent="item.titleContent"
      :textContent="item.textContent"
    />
  </div>
</template>
