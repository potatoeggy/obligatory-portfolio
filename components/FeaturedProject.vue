<script setup lang="ts">
import { type Project } from "~~/data/projects";
const props = defineProps<{ project: Project }>();
</script>

<template>
  <div class="border-edge">
    <div class="projbar">
      {{ project.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.border-edge {
  $round: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(165deg, #4f76ff, #c69dff);
  border-radius: $round;
  padding: 0.2rem;

  .projbar {
    $border-size: 0.5rem;
    height: 100%;
    width: 100%;
    display: flex;
    background: white;
    border-radius: calc($round - 0.2rem);
    padding: 1rem;
  }
}
</style>
