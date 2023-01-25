<script setup lang="ts">
import { projects } from "~~/data/projects";
</script>

<template>
  <ul>
    <li v-for="(project, index) in projects" :key="index">
      <CarouselItem :project="project" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  width: 100%;
  height: 10rem;
  justify-content: space-between;
}
</style>
