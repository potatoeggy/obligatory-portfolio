<script setup lang="ts"></script>

<template>
  <h1 id="about">About</h1>
  <div class="left-right">
    <div class="content-general">
      <p>
        I'm a student studying computer engineering at the University of
        Waterloo.
      </p>
      <p>
        I make software because I like automating things I already do to make my
        life easier.
      </p>
      <p>
        Alternatively, it's to promote free and open source software, which I
        firmly believe should be all software.
      </p>
      <p>Yada yada yada passion.</p>
    </div>
    <div class="top-down">
      <div class="content-general">
        In my spare time, you can find me reading and writing all sorts of
        stories, playing games, and attempting to spend time with my friends :)
      </div>
      <div class="content-general">This month's soundtrack:</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 3rem;
  font-family: "Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica Neue", sans-serif;
  overflow-wrap: break-word;
  font-weight: 900;
  padding-top: 5%;
  padding-bottom: 2%;
}

.left-right {
  display: flex;
  width: 100%;
  gap: 3rem;
}

.top-down {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 3rem;
  height: 100%;
  width: 100%;
}

.content-general {
  background: #ffffff99;
  flex-grow: 1;
  padding: 1rem;
  box-shadow: 0 0 1rem 0.75rem #ffffff99;
  width: 100%;
  font-size: 1.5rem;
  height: 100%;
}

p + p {
  padding-top: 1rem;
}
</style>
