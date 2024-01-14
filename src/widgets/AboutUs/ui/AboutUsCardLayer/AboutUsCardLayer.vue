<script setup lang="ts"></script>

<template>
  <div class="mt-[40px]">
    <div
      class="flex flex-col justify-center border border-white/[0.05] border-solid rounded-[18px] p-[40px] min-w-[361px] bg-[#0C1022]"
    >
      <slot name="icon" />
      <div class="mt-[90px]">
        <h3 class="text-[24px] text-white mb-[15px] font-stolzl">
          <slot name="titleContent" />
        </h3>
        <span class="text-[18px] text-[#7F84A5] leading-6 font-onest font-weight-400">
          <slot name="textContent" />
          <!-- >С помощью нашего VPN вы сможете использовать Instagram, Facebook, Wikipedia и др. -->
        </span>
      </div>
    </div>
  </div>
</template>
