<script setup lang="ts">
import { useRoute } from 'vue-router'
import { navlinksMock } from '../RoutingNavbar/__mocks__/navlinksMock'
import { useBreakpoints } from '@/shared/lib/composables/useBreakpoints/useBreakPoints'
const route = useRoute()

const activePage = (path: string) => {
  return route.path === path
}
const breakpoints = useBreakpoints()
</script>
<template>
  <nav class="m-auto">
    <ul class="md:flex justify-center items-center py-7 gap-11 bg-primary-1 text-white hidden">
      <li v-for="{ id, title, to } in navlinksMock" :key="id">
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
