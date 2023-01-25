<script setup lang="ts">
// TODO: parallax the lines on scroll
</script>

<template>
  <div class="green parallax-2back" />
  <div class="blue parallax-back" />
  <div class="yellow" />
</template>

<style scoped lang="scss">
div {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(2rem);
  width: 100vw;
  height: 100%;
}

.parallax-2back {
  transform: translateZ(-2px) scale(3);
}

.parallax-back {
  /* https://keithclark.co.uk/articles/pure-css-parallax-websites/ */
  /* scale = 1 + (translateZ * -1) / perspective */
  /* perspective is 1px */
  transform: translateZ(-1px) scale(2);
}

.parallax-front {
  transform: translateZ(0);
}
div.green {
  border-top: 1rem solid green;
  border-top-left-radius: 100%;
}

div.blue {
  border-bottom: 1rem solid skyblue;
  translate: -10rem -10rem;
  rotate: 30deg;
  border-bottom-right-radius: 100%;
}

div.orange {
  border-right: 0.75rem solid orange;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 25%;
  translate: -10rem 0;
}

div.yellow {
  border-left: 2rem solid palegoldenrod;
  border-top-left-radius: 60%;
  translate: 10rem 0;
  border-bottom-left-radius: 100%;
  rotate: 30deg;
}
</style>
