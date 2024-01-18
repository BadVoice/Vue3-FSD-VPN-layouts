<script setup lang="ts">
import { BaseContainer } from '@/shared/ui/'
import { AboutUsCardList } from '@/widgets/AboutUs/ui'
import { AboutUsBenefits } from '@/widgets/AboutUs/ui'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'

const breakpoints = useBreakpoints()
</script>

<template>
  <div class="bg-bgSectionSecondary py-[100px]">
    <BaseContainer
      :size="
        breakpoints.isXXl
          ? 'big'
          : breakpoints.isLg
            ? 'medium'
            : breakpoints.isSm
              ? 'small'
              : 'small'
      "
    >
      <h2
        class="text-white font-weight-400 font-stolzl"
        :class="breakpoints.isLg ? 'text-4xl' : 'text-3xl'"
      >
        О нашем
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-primary2 to-primary1"
          :class="breakpoints.isLg ? 'text-4xl' : 'text-3xl'"
        >
          VPN-сервисе</span
        >
      </h2>
      <AboutUsCardList
        :size="
          breakpoints.isXXl
            ? 'big'
            : breakpoints.isLg
              ? 'medium'
              : breakpoints.isSm
                ? 'small'
                : 'small'
        "
      />

      <AboutUsBenefits
        class="mt-[100px]"
        :size="
          breakpoints.isXXl
            ? 'big'
            : breakpoints.isLg
              ? 'medium'
              : breakpoints.isSm
                ? 'small'
                : 'small'
        "
      />
    </BaseContainer>
  </div>
</template>
