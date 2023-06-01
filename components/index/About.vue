<script setup lang="ts"></script>

<template>
  <div class="left-right">
    <div class="content-general" v-motion-slide-visible-left>
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
      <div class="content-general" v-motion-slide-visible-top>
        In my spare time, you can find me reading and writing all sorts of
        stories, playing games, and attempting to spend time with my friends :)
      </div>
      <div class="content-general" v-motion-slide-visible-bottom>
        Once again, I must encourage you to visit
        <a class="brush-highlight underline" href="https://eggworld.me"
          >my actual website</a
        >.
        <ul class="list-disc px-8">
          <li>It has actual content</li>
          <li>It doesn't implode if you turn off JavaScript</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-right {
  display: flex;
  width: 80%;
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

a {
  text-decoration: underline;
  text-decoration-skip-ink: all;
  text-decoration-thickness: 0.1rem;
}
</style>
