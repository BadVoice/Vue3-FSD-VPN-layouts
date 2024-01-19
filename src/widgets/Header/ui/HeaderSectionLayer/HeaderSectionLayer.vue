<script setup lang="ts">
</script>

<template>
<div class="flex flex-col gap-[25px]">
<h3 class="font-stolzl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary2 to-primary1 text-[40px] leading-[48px]"><slot name="topTitle"></slot></h3>
<h1 class="font-stolzl text-[54px] leading-[71px] font-medium text-white"><slot name="title"></slot></h1>
<h1 class="text-[54px] leading-[71px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary2 to-primary1"><slot name="titleGradient"></slot></h1>
<p  class="pb-[25px] text-white leading-[28px] text-[20px]"><slot name="subTitle"></slot></p>
</div>
</template>
