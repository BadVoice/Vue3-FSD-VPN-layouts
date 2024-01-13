<script setup lang="ts">
import { BaseButton } from '@/shared/ui/'
import { RoutingNavbar } from '@/shared/ui/'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
import { HeaderLogo } from '@/widgets/Header/ui'

const breakpoints = useBreakpoints()
</script>

<template>
  <div class="w-full m-auto px-[30px] flex items-center">
    <HeaderLogo />
    <RoutingNavbar />
    <div class="flex gap-6">
      <BaseButton
        :link="true"
        v-if="breakpoints.isSm"
        :size="breakpoints.isLg ? 'medium' : 'small'"
        variant="primary"
        class="rounded-2xl duration-300"
        text="Попробовать vpn"
      ></BaseButton>
      <BaseButton
        v-if="breakpoints.isSm"
        variant="secondary"
        :size="breakpoints.isLg ? 'medium' : 'small'"
        text="Войти"
        class="rounded-2xl"
      ></BaseButton>
    </div>
  </div>
</template>
