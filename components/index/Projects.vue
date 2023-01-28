<script setup lang="ts">
import projects from "~~/data/projects";
</script>
<template>
  <p>
    What you are seeing now is the culmination of the centuries-old design
    principle known as "random bullshit go".
  </p>

  <ul>
    <li class="projectcard" v-for="(proj, i) in projects" :key="i">
      <ProjectCard :project="proj" :reverse="i % 2 === 0" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
// yeah just don't use the old cards
// make a new one that is pic on the left
// data on the right
// using the new watercolor design
// shade the image

// then code / retrospective buttons
ul {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.projectcard {
  display: flex;

  .description {
    //width: 100%;
    min-width: 30%;
  }
}
</style>
