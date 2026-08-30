<script setup lang="ts">
import { PORTFOLIO_DATA } from '@/constants/portafolio'

const { name, description, title, projects } = PORTFOLIO_DATA

useSeoMeta({
  title: `${name} | ${title}`,
  ogTitle: `${name} | ${title}`,
  description,
})
</script>

<template>
  <div class="py-20 px-4 container mx-auto flex flex-col flex-1 justify-center items-center h-full">
    <h2 class="text-center text-3xl md:text-4xl md:max-w-xl font-semibold my-4">
      {{ name }}
    </h2>

    <p class="max-w-xs mx-auto text-center mt-4 mb-12 md:max-w-xl text-gray-300">
      {{ description }}
    </p>

    <h1 class="text-lg md:text-xl font-semibold text-center mb-8">
      {{ title }}
    </h1>

    <section class="grid gap-4 md:grid-cols-2 w-xs md:w-xl">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.url"
        :project="project"
        class="w-full aspect-2/1"
        :class="index === projects.length - 1 && projects.length % 2 !== 0
          ? 'md:col-span-2 md:aspect-4/1'
          : ''"
      />
    </section>
  </div>
</template>
