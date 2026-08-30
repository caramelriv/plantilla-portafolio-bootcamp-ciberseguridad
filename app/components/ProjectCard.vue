<script setup lang="ts">
interface Props {
  project: {
    title: string
    url: string
    icon: string
    iconAlt: string
    color: string
  }
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    download
    external
    :to="project.url" target="_blank" class="border border-white px-4 py-6 relative group"
  >
    <!-- Color -->
    <div
      aria-hidden="true"
      :style="{ backgroundColor: project.color }"
      class="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-60 transition-all ease duration-200"
    />
    <!-- Content -->
    <article>
      <img
        v-if="project.icon"
        :src="project.icon"
        width="16px"
        height="16px"
        class="w-10 invert brightness-0 absolute top-4 right-4"
        :alt="project.iconAlt"
        loading="eager"
      >
      <h2 class="absolute bottom-4 left-4 uppercase text-sm group-hover:underline transition-all ease duration-200">
        {{ project.title }}
      </h2>
    </article>
  </NuxtLink>
</template>
