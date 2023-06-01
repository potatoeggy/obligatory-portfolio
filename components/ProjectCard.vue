<script setup lang="ts">
import type { Project } from "@/data/projects";
import SvgGithub from "~~/assets/icons/github.svg?url";
import SvgSplatter from "~~/assets/img/splatter.svg?url";

const props = defineProps<{
  project: Project;
  reverse?: boolean;
}>();

const imgUrl = props.project.img
  ? `url(/images/projects/${props.project.img})`
  : "none";
</script>

<template>
  <!-- TODO: add a <noscript> that forces css visible-->
  <div
    :class="['wrapper', { reverse }]"
    v-motion-slide-visible-right="reverse"
    v-motion-slide-visible-left="!reverse"
  >
    <img
      :src="project.img ? `/images/projects/${project.img}` : SvgSplatter"
      class="max-h-72 p-4 img-mask"
    />
    <div class="content flex flex-col justify-between">
      <div>
        <a class="brush-highlight p-1" :href="project.href">
          <h3 class="flex gap-2 items-center">
            <span>{{ project.name }}</span>
            <img :src="SvgGithub" alt="GitHub" class="h-8 w-8" />
          </h3>
        </a>
        <p class="text-gray-500 pb-2 pl-1">{{ project.license }}</p>
      </div>

      <div class="flex-grow pb-4 text-lg pl-2">
        <p>{{ project.description }}</p>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center font-semibold gap-2">
          Languages
          <span class="flex gap-2 items-center justify-around">
            <img
              class="h-5 w-5 m-0"
              :src="`/images/langs/${lang}.svg`"
              v-for="(lang, index) in project.langs"
              :key="index"
            />
          </span>
        </div>
        <div
          class="flex items-center font-semibold gap-2"
          v-if="project.madeWith"
        >
          Made with
          <span class="flex gap-2 items-center justify-around">
            <img
              class="h-5 w-5 m-0"
              :src="`/images/langs/${lang}.svg`"
              v-for="(lang, index) in project.langs"
              :key="index"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img.img-mask {
  mask-image: url("assets/img/splatter.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}
a.brush-highlight {
  &:hover {
    rotate: -5deg;
  }
}
.wrapper {
  display: flex;
  width: 100%;

  &.reverse {
    flex-direction: row-reverse;
  }

  img {
    flex-grow: 1;
    width: 100%;
  }
}

.content {
  width: 100%;
  background: #ffffff99;
  box-shadow: 0 0 1rem 1rem #fff9;
  border-top-left-radius: 10%;
  border-bottom-right-radius: 10%;
  padding: 1rem;
}

h3 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.6;
}
</style>

<!--
    <template>
  <a :href="project.href" class="no-underline project-anchor">
    <div class="card flex items-center justify-between">
      <div class="card-text h-full px-4 py-2">
        <div class="h-full flex flex-col justify-between">
          <div>
            <h3 class="m-0">{{ project.name }}</h3>
            <div class="flex gap-1 items-center flex-nowrap">
              <img
                class="h-5 w-5 m-0"
                :src="`/images/langs/${lang}.svg`"
                v-for="(lang, index) in project.langs"
                :key="index"
              />
              <span
                class="text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap"
                >· {{ project.license ?? "no license" }}</span
              >
            </div>
          </div>
          <div class="flex flex-col justify-between grow">
            <p
              class="desc-text text-gray-600 dark:text-gray-200 mt-3 mb-0 text-left text-sm"
            >
              {{ project.description }}
            </p>
            <p
              class="desc-text text-gray-600 dark:text-gray-200 text-left text-sm m-0 whitespace-nowrap"
            >
              {{ project.longDescription }}
            </p>
          </div>
        </div>
      </div>
      <div class="card-img h-full p-4 flex" :style="{ '--imgurl': imgUrl }" />
    </div>
  </a>
</template> -->

<style scoped>
.project-anchor {
  display: inline-block;
  width: 100%;
}

.card {
  border: 0.2rem solid pink;
  background: white;
  border-radius: 1.5rem 0 1.5rem 0;
  height: 12rem;
  line-height: 1.25;
  transition: all 0.2s ease;
  box-shadow: 0 0.1rem 0.5rem 0 gray;
}

html.dark .card {
  border: 0.2rem solid rgb(126, 93, 98);
  background: #444;
  box-shadow: 0 0.1rem 0.5rem 0 black;
}

.card:hover,
.card:active {
  transform: scale(1.03);
}

.card-text {
  width: 25%;
  background: white;
  border-radius: 1.5rem 0 0 0;
  transition: width 0.2s ease;
}

html.dark .card-text {
  background: #444;
}

.card-img {
  width: 75%;
  background: var(--imgurl);
  background-color: rgb(255, 237, 241);
  background-position: right 90% top 15%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 0 1.5rem 100%;
  transition: width 0.2s ease;
}

html.dark .card-img {
  background-color: rgb(180, 136, 143);
}

.desc-text {
  width: 139%;
  /* 140% is too close */
  transition: width 0.2s ease;
}

a.unclickable {
  pointer-events: none;
}

@media screen and (max-width: 720px) {
  .card-text {
    width: 30%;
  }

  .card-img {
    width: 70%;
  }

  .desc-text {
    width: 135%;
  }
}

@media screen and (max-width: 540px) {
  .card-text {
    width: 45%;
  }

  .card-img {
    width: 55%;
  }

  .desc-text {
    width: 120%;
    font-size: 0.72rem;
  }
}
</style>
