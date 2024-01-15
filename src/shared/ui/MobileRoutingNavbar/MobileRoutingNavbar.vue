<script setup lang="ts">
import { useRoute } from 'vue-router'
import { MobileNavlinksMock } from '@/shared/ui/MobileRoutingNavbar/__mocks__/mobileNavlinksMock'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
const route = useRoute()

const activePage = (path: string) => {
  return route.path === path
}
const breakpoints = useBreakpoints()
</script>
<template>
  <nav class="flex w-full">
    <ul
      class="min-[320px]:flex min-[320px]:items-start flex-col items-start justify-center items-center py-7 gap-11 bg-primary-1 text-white hidden"
    >
      <li v-for="{ id, title, to } in MobileNavlinksMock" :key="id">
        <router-link
          :to="to"
          class="hover:text-primary1Hover transition-all duration-200"
          :class="{ 'text-white': activePage(to) }"
        >
          {{ title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
