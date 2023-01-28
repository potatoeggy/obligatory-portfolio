<template>
  <Navbar />
  <div class="bg" id="hardbg">
    <DiffusedBackground />
    <main>
      <div class="enveloper">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.bg {
  /* required for background blur */
  position: absolute;
  left: 0;
  right: 0;
  z-index: 0;
  /* required for parallax */
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  background: linear-gradient(to bottom, #ffe5e500, #ffcccc55, #ffeeee),
    linear-gradient(90deg, #e6e6ff, #ccccff, #eeeeff);
}

.enveloper {
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
}
</style>
