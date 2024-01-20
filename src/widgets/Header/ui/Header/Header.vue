<script setup lang="ts">
import { BaseButton } from '@/shared/ui/'
import { RoutingNavbar } from '@/shared/ui/'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
import { HeaderLogo } from '@/widgets/Header/ui'
import { HeaderBurgerBtn } from '@/widgets/Header/ui/'
import { HeaderSection } from '@/widgets/Header/ui/'
import { DropdownNavbar } from '@/widgets/DropdownNavbar/ui/DropdownNavbar/index'
import { BaseContainer } from '@/shared/ui/'

import { computed, ref, watch } from 'vue'

const breakpoints = useBreakpoints()

const open = ref(false)

const showMenu = () => {
  open.value = !open.value
}

watch(open, () => {
  console.log(open.value)
})
</script>

<template>
  <div
    :class="breakpoints.isMd ? 'bg-blackBlack2' : 'bg-blackBlack2'"
    class="w-full justify-between min-h-[80px] m-auto px-[30px] flex items-center"
  >
    <div
      class="absolute top-[-10%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[125px] overflow-hidden border-[#948BFF] rounded-[50%] border-[180px] opacity-[50%] bg-[#948BFF] z-[1] h-[250px] w-[250px] rotate-[45deg] bg-[#948BFF]"
    ></div>
    <HeaderLogo />
    <RoutingNavbar v-if="breakpoints.isXXl" class="z-[2]" />
    <div class="flex gap-6 align-center">
      <BaseButton
        :link="true"
        v-if="breakpoints.isSm"
        :size="breakpoints.isLg ? 'medium' : 'medium'"
        variant="primary"
        class="rounded-2xl duration-300"
        text="Попробовать vpn"
      ></BaseButton>
      <BaseButton
        v-if="breakpoints.isSm"
        variant="secondary"
        :size="breakpoints.isLg ? 'medium' : 'medium'"
        text="Войти"
        class="rounded-2xl"
      ></BaseButton>
      <HeaderBurgerBtn :state="open" @click="showMenu" v-if="!breakpoints.isXXl" />
    </div>
  </div>
  <Transition
    enter-active-class="transition ease-in"
    enter-from-class="-translate-y-0"
    enter-to-class="translate-y-0"
    leave-active-class="transition ease-out"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-0"
  >
    <DropdownNavbar :open="open" />
  </Transition>

  <div class="bg-blackBlack2 pt-[177px] pb-[275px]">
    <BaseContainer
      class="flex flex-col"
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
      <HeaderSection
        :topTitle="'Tvoy VPN'"
        :title="'Профессиональный'"
        :titleGradient="'VPN-сервис всего лишь за 100р'"
        :subTitle="'Оставайтесь в безопасности и пользуйтесь любыми сайтами без ограничений'"
      ></HeaderSection>
      <div class="flex flex-row gap-[20px]">
        <BaseButton
          :link="true"
          :size="breakpoints.isLg ? 'medium' : 'medium'"
          variant="primary"
          class="rounded-2xl duration-300"
          text="Попробовать vpn"
        ></BaseButton>
        <BaseButton
          :link="true"
          :size="breakpoints.isLg ? 'medium' : 'medium'"
          variant="secondary"
          class="rounded-2xl duration-300"
          text="Попробовать vpn"
        ></BaseButton>
      </div>
    </BaseContainer>
  </div>
</template>
