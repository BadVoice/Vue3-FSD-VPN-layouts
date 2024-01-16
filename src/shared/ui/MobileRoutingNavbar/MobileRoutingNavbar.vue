<script setup lang="ts">
import { useRoute } from 'vue-router'
import { MobileNavlinksMock } from '@/shared/ui/MobileRoutingNavbar/__mocks__/mobileNavlinksMock'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
import { type MobileNavlinksProps } from './types'
const route = useRoute()

const activePage = (path: string) => {
  return route.path === path
}
const breakpoints = useBreakpoints()

withDefaults(defineProps<Partial<MobileNavlinksProps>>(), {
  variant: 'primary',
  to: '/'
})
</script>
<template>
  <nav class="flex w-full">
    <ul
      class="min-[280px]:flex min-[280px]:items-start flex-col items-start justify-center items-center py-7 gap-5 bg-primary-1 text-white hidden"
    >
      <li
        :class="[
          textSize === 'small' ? 'text-2xl cursor-default' : '',
          textSize === 'medium' ? 'text-3xl cursor-default' : ''
        ]"
      >
        Меню
      </li>
      <li v-for="{ id, title, to } in MobileNavlinksMock" :key="id">
        <router-link
          :to="to"
          class="hover:text-primary1Hover transition-all duration-200"
          :class="{ 'text-xl text-white': activePage(to) }"
        >
          {{ title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
