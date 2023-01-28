<script setup lang="ts">
// TODO: parallax the lines on scroll
// TODO: random background motions
</script>

<template>
  <div class="green parallax-2back" />
  <div class="blue parallax-back animated" />
  <div class="yellow animated" />
  <div class="yellow2 parallax-back animated" />
  <div class="blue2 parallax-2back animated" />
</template>

<style scoped lang="scss">
$animation-duration: 10s;

div {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: blur(2rem);
  width: 100vw;
  height: 100%;

  &.animated {
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: $animation-duration;
  }
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
  border-bottom-right-radius: 100%;

  &.animated {
    @keyframes green-animation {
      0% {
        border-top: 1rem solid green;
        border-bottom: 0rem solid green;
      }
      50% {
        border-top-right-radius: 0%;
        border-top-left-radius: 0%;
        translate: 0 100vh;
        border-top: 1rem solid green;
        border-bottom: 0rem solid green;
        height: 0;
      }
      51% {
        border-top: 0rem solid green;
        border-bottom: 1rem solid green;
        height: 0;
      }

      100% {
        border-bottom: 1rem solid green;
        border-top: 0rem solid green;
      }
    }

    animation-name: green-animation;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
}

div.blue {
  border-bottom: 1rem solid skyblue;
  translate: -10rem -10rem;
  rotate: 30deg;
  border-bottom-right-radius: 100%;

  &.animated {
    @keyframes blue-animation {
      to {
        translate: 0 -20rem;
      }
    }
    animation-name: blue-animation;
    animation-delay: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}

div.blue2 {
  border-bottom: 1rem solid skyblue;
  translate: -10rem 10rem;
  rotate: -30deg;
  border-bottom-left-radius: 100%;

  &.animated {
    @keyframes blue2-animation {
      to {
        translate: -10 -10rem;
      }
    }
    animation-name: blue2-animation;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
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
  border-bottom: 2rem solid palegoldenrod;
  border-bottom-right-radius: 100%;
  height: 120%;
  width: 120%;

  &.animated {
    @keyframes yellow-animation {
      to {
        rotate: 90deg;
        translate: 20rem 0;
      }
    }
    animation-name: yellow-animation;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
}

div.yellow2 {
  border-right: 4rem solid palegoldenrod;
  border-bottom: 4rem solid palegoldenrod;
  border-bottom-right-radius: 100%;
  translate: 5rem 0;
  rotate: -10deg;
  height: 120%;
  width: 150%;

  &.animated {
    @keyframes yellow2-animation {
      to {
        rotate: -90deg;
        translate: -10rem 0;
      }
    }
    animation-name: yellow2-animation;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}
</style>
