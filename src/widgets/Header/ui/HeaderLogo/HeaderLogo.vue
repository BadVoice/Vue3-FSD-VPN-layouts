<script setup lang="ts">
import { BrandLogoIcon } from '@/shared/ui/'
import HeaderLogoLayout from '../HeaderLogoLayout/HeaderLogoLayout.vue'
</script>

<template>
  <BrandLogoIcon />
  <HeaderLogoLayout>
    <template #textContent>
      <h2 class="">Tvoy VPN</h2>
    </template>
  </HeaderLogoLayout>
</template>
