<script setup lang="ts">
import BigBrushUrl from "~~/assets/img/brush-small.svg?url";
</script>

<template>
  <div class="wrapper">
    <div class="left-right">
      <div>
        <h1 class="font-showcase main-title">
          <span>Obligatory</span> <span>Portfolio</span> <span>Website!</span>
        </h1>
        <h2>Hi, I'm Daniel!</h2>

        <p>You want animations? You want gradients? You're getting them.</p>
        <p>
          While you're here, why don't you check out
          <a class="highlight" href="https://eggworld.me">my real website?</a>
        </p>
      </div>
      <!--<FeaturedProject :project="{ name: 'Mandown' }" />-->
    </div>
    <!--<Carousel />-->
    <!--<ScreenBrush />-->
    <img class="brushdivider" :src="BigBrushUrl" />
  </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 3 {
  @keyframes bounce-in-#{$i} {
    0% {
      opacity: 0;
      transform: translateY(4rem);
    }

    70% {
      opacity: 1;
    }

    80% {
      transform: translateY(-1rem);
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }
  h1.main-title > span:nth-child(#{$i}) {
    opacity: 0;
    transition: 1s ease all;
    animation-name: bounce-in-#{$i};
    animation-duration: 0.75s;
    animation-delay: $i * 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;
  }
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: black;
  font-family: "Poppins", sans-serif;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #555;
}

p {
  font-size: 1rem;
  font-weight: 500;
  color: #555;
}

.left-right {
  display: flex;
  justify-content: space-between;
}

p a {
  text-decoration: underline;
  text-decoration-skip-ink: all;
  text-decoration-thickness: 0.1rem;
}

.brushdivider {
  position: absolute;
  width: 100%;
  left: 1rem;
  bottom: -40%;
}

.highlight {
  transition: all 0.15s ease-out;
  background: none;
  display: inline-block;
  &:hover,
  &:focus {
    // transform: rotate(-1deg);
    background: linear-gradient(
        104deg,
        transparent 1%,
        rgb(48, 197, 255) 4%,
        rgba(48, 197, 255, 0.5) 6%,
        rgba(48, 197, 255, 0.1) 93%,
        rgba(48, 197, 255, 0.7) 96%,
        transparent 97%
      ),
      linear-gradient(
        183deg,
        rgba(48, 197, 255, 0) 0%,
        rgba(48, 197, 255, 0.3) 7.9%,
        rgba(48, 197, 255, 0) 15%
      );

    border-radius: 0.2rem;
    text-shadow: 0 0 0 rgba(48, 197, 255, 0.7), 0.4rem -0.7rem 0.6rem #fff,
      -0.2rem -0.5rem 1.2rem rgba(255, 255, 255, 1);
  }
}
</style>
