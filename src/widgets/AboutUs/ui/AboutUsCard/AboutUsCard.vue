<script setup lang="ts">
import { defineProps } from 'vue'
import AboutUsCardLayer from '../AboutUsCardLayer/AboutUsCardLayer.vue'

const props = defineProps({
  icon: {
    type: Object,
    default: ''
  },
  titleContent: {
    type: String,
    default: ''
  },
  textContent: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div>
    <AboutUsCardLayer>
      <template #icon>
        <div>
          <component
            class="border border-white/[0.05] border-solid rounded-[18px] w-[100px] h-[100px]"
            :is="props.icon"
          />
        </div>
      </template>
      <template #titleContent>
        {{ titleContent }}
      </template>
      <template #textContent>
        {{ textContent }}
      </template>
    </AboutUsCardLayer>
  </div>
</template>
