<script setup lang="ts">
import { BaseContainer } from '@/shared/ui/'
import { AboutUsCardList } from '@/widgets/AboutUs/ui'
import { AboutUsBenefits } from '@/widgets/AboutUs/ui'
</script>

<template>
  <div class="bg-bgSectionSecondary">
    <BaseContainer class="py-[100px]">
      <h2 class="text-4xl text-white font-weight-400 font-onest">
        О нашем
        <span
          class="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary2 to-primary1"
        >
          VPN-сервисе</span
        >
      </h2>
      <AboutUsCardList />

      <AboutUsBenefits class="mt-[100px]" />
    </BaseContainer>
  </div>
</template>
