<script setup lang="ts">
import { BaseContainer } from '@/shared/ui/'
import { AboutUsCardList } from '@/widgets/AboutUs/ui'
</script>

<template>
  <div class="bg-bgSectionSecondary">
    <BaseContainer>
      <h2 class="pt-[100px] text-4xl text-white">О нашем VPN-сервисе</h2>
      <AboutUsCardList />
    </BaseContainer>
  </div>
</template>
