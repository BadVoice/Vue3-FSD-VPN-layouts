<script setup lang="ts"></script>

<template>
  <div class="flex items-center gap-[17px]">
    <div class="w-[50px] h-[50px]">
      <slot name="iconContent"> </slot>
    </div>
    <div class="flex flex-col">
      <a class="cursor-pointer text-white"><slot name="userEmailContent"> </slot></a>
      <a class="cursor-pointer text-blackGray text-base hover:text-primary1Hover duration-300"
        ><slot name="textContent"> </slot
      ></a>
    </div>
  </div>
</template>
