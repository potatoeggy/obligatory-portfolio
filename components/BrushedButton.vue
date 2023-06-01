<template>
  <button type="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 0.3rem 0.6rem;
  font-size: 1.25rem;
  background: #ffeeee88;
  padding: 0.75rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 2px gray;
  transition: all 0.2s ease;

  &:hover {
    rotate: -2deg;
    background: linear-gradient(
        104deg,
        transparent 1%,
        rgb(255, 133, 247) 4%,
        rgba(255, 133, 247, 0.5) 6%,
        rgba(255, 133, 247, 0.1) 93%,
        rgba(255, 133, 247, 0.7) 96%,
        transparent 97%
      ),
      linear-gradient(
        183deg,
        rgba(255, 133, 247, 0) 0%,
        rgba(255, 133, 247, 0.3) 7.9%,
        rgba(255, 133, 247, 0) 15%
      );

    border-radius: 0.2rem;
    text-shadow: 0 0 0 rgba(255, 133, 247, 0.7), 0.4rem -0.7rem 0.6rem #fff,
      -0.2rem -0.5rem 1.2rem rgba(255, 255, 255, 1);
  }
}
</style>
