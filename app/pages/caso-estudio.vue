<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('content').path('/caso-estudio').first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})
</script>

<template>
  <main class="container px-4 py-20 mx-auto max-w-[75ch] prose dark:prose-invert">
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>
