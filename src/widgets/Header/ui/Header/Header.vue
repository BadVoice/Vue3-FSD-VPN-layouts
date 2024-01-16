<script setup lang="ts">
import { BaseButton } from '@/shared/ui/'
import { RoutingNavbar } from '@/shared/ui/'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
import { HeaderLogo } from '@/widgets/Header/ui'
import { HeaderBurgerBtn } from '@/widgets/Header/ui/'
import { DropdownNavbar } from '@/widgets/DropdownNavbar/ui/DropdownNavbar/index'
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
    class="w-full justify-between min-h-[80px] m-auto px-[30px] flex items-center bg-bgSectionPrimary"
  >
    <HeaderLogo />
    <RoutingNavbar v-if="breakpoints.isXXl" />
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
</template>
