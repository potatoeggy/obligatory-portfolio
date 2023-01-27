<script setup lang="ts">
import SvgEggLogo from "~~/assets/icons/egg.svg?url";

onBeforeMount(() => {
  function handleScroll(this: HTMLElement, ev: Event) {
    // the only thing that scrolls is NOT WINDOW
    // it's div#hardbg
    const el = document.getElementById("nav");
    if (el) {
      el.className = this.scrollTop > 0 ? "scrolled" : "";
    }
  }
  const prop: HTMLElement | null = document.getElementById("hardbg");
  prop?.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav id="nav">
    <div class="flex items-center gap-4">
      <a href="/"><img :src="SvgEggLogo" /></a>
    </div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="/resume.pdf">Resume</a></li>
      <li><a href="https://eggworld.me">Real Website</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  justify-content: space-between;
  font-family: "Poppins";
  font-size: 1.25rem;
  transition: all 0.15s ease-out;

  &.scrolled {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(1rem);
  }

  ul {
    display: flex;
    gap: 1.5rem;
    li {
      padding: 0.3rem 0.6rem;
      transition: all 0.15s ease-out;
      background: none;
      display: inline-block;
      &:hover,
      &:focus {
        transform: rotate(-2deg);
        background: linear-gradient(
            104deg,
            transparent 1%,
            rgb(255, 165, 123) 4%,
            rgba(255, 165, 123, 0.5) 6%,
            rgba(255, 165, 123, 0.1) 93%,
            rgba(255, 165, 123, 0.7) 96%,
            transparent 97%
          ),
          linear-gradient(
            183deg,
            rgba(255, 165, 123, 0) 0%,
            rgba(255, 165, 123, 0.3) 7.9%,
            rgba(255, 165, 123, 0) 15%
          );

        border-radius: 0.2rem;
        text-shadow: 0 0 0 rgba(255, 165, 123, 0.7), 0.4rem -0.7rem 0.6rem #fff,
          -0.2rem -0.5rem 1.2rem rgba(255, 255, 255, 1);
      }
    }
  }
}

.hyperquirky {
  font-family: "Comic Sans", "Raleway", sans-serif;
}

img {
  height: 3rem;
  transition: all 0.15s ease-out;
  &:hover,
  &:focus {
    transform: rotate(-5deg);
  }
}
</style>
