<script setup lang="ts">
import { type Props } from './types'
defineProps<Partial<Props>>()
</script>

<template>
  <div
    class="flex flex-col border border-white/[0.05] border-solid rounded-[18px] bg-[#0C1022]"
    :class="[
      size === 'big' ? ' p-[40px] w-[386px] h-[417px]' : '',
      size === 'medium' ? ' p-[40px] w-[358px] h-[417px]' : '',
      size === 'small' ? ' p-[30px] w-[341px] h-[279px]' : ''
    ]"
  >
    <slot name="icon" />
    <div class="flex flex-col mt-auto">
      <h3
        class="text-white mb-[15px] font-stolzl"
        :class="[
          size === 'big' ? ' text-[24px] ' : '',
          size === 'medium' ? ' text-[24px] ' : '',
          size === 'small' ? ' text-[18px] ' : ''
        ]"
      >
        <slot name="titleContent" />
      </h3>
      <span
        class="text-[18px] text-[#7F84A5] font-onest font-weight-400"
        :class="[
          size === 'big' ? ' text-[18px] leading-6' : '',
          size === 'medium' ? ' text-[18px] leading-6' : '',
          size === 'small' ? ' text-[16px] leading-5' : ''
        ]"
      >
        <slot name="textContent" />
        <!-- >С помощью нашего VPN вы сможете использовать Instagram, Facebook, Wikipedia и др. -->
      </span>
    </div>
  </div>
</template>
