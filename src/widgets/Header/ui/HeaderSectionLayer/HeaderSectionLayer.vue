<script setup lang="ts"></script>

<template>
  <div class="flex flex-col">
    <h3><slot name="topTitle"></slot></h3>
    <h1><slot name="title"></slot></h1>
    <h1><slot name="titleGradient"></slot></h1>
    <p><slot name="subTitle"></slot></p>
  </div>
</template>
