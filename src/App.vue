<template>
  <metainfo>
    <template #base="{ content }">{{ content }} </template>
    <template #title="{ content, metainfo }">
      {{ content }} - {{ metainfo.description }}
    </template>
  </metainfo>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "App",
  setup() {
    useMeta({
      charset: "utf8",
      og: {
        locale: "en_US",
        type: "website",
        site_name: "VueSeoFriendlySpa",
      },
      htmlAttrs: {
        amp: true,
        lang: ["en"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Twitter Title",
        site: "star-history.com",
        creator: "bytebase",
        description: "123",
        image: "https://star-history.com/star-history.webp",
      },
    });
  },
});
</script>
