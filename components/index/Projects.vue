<script setup lang="ts">
import projects from "~~/data/projects";
</script>
<template>
  <div class="contain">
    <p class="pb-12 text-xl">
      What you are seeing now is the culmination of the centuries-old design
      principle known as "random bullshit go".
    </p>

    <ul>
      <li class="projectcard" v-for="(proj, i) in projects" :key="i">
        <ProjectCard :project="proj" :reverse="i % 2 === 0" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
// yeah just don't use the old cards
// make a new one that is pic on the left
// data on the right
// using the new watercolor design
// shade the image

// then code / retrospective buttons
div.contain {
  width: 80%;
}
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
