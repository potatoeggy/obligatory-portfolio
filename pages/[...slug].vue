<script setup lang="ts">
import type { BlogParsedContent, StoryParsedContent } from "@/shared/types";
import { calcReadingTime } from "@/shared/metadata";

type GeneralParsedContent = BlogParsedContent;

const route = useRoute();

// we're not using ContentDoc because i need control
const doc = await queryContent<GeneralParsedContent>(route.path).findOne();
const type = "blog";

const descText =
  type === "blog"
    ? `${calcReadingTime(doc).words.total} words`
    : `${calcReadingTime(doc).minutes} min read`;
useTitle(doc.title, doc.description);

const captionText = "Blog post";
</script>

<template>
  <div class="title-box prose max-w-full">
    <div>
      <p class="m-0 uppercase font-mono text-sm" v-if="captionText !== ''">
        {{ captionText }}
      </p>
      <h1 class="m-0">{{ doc.title }}</h1>
    </div>
  </div>
  <div class="body-bg">
    <p class="my-2"><Date :doc="doc" /> · {{ descText }}</p>
    <div class="flex flex-wrap">
      <Tag
        v-for="(tag, index) in doc.tags"
        :dest="`/tags/${type}/${tag}`"
        :key="index"
      >
        {{ tag }}
      </Tag>
    </div>
    <ContentRenderer :value="doc" tag="article" class="pt-0 w-full">
      <template #empty>
        <p>No description found.</p>
      </template>
      <template #not-found>
        <h1>404 - Not Found</h1>
        <p>
          Thanks for dropping by! But the page you're looking for can't be
          found.
        </p>
      </template>
    </ContentRenderer>
  </div>
</template>

<style scoped lang="scss">
.body-bg {
  background: white;
  padding: 2rem;
  padding-top: 0;
  box-shadow: 0 1rem 1rem 1rem white;
}

.title-box {
  background: darkslategray;
  padding: 2rem;
  padding-top: 0;
  color: white;
  box-shadow: 0 -1rem 1rem 1rem darkslategray;

  h1 {
    color: white;
  }
}

h1 {
  font-family: "Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica Neue", sans-serif;
  overflow-wrap: break-word;
  font-size: 2.5rem;
}
</style>
