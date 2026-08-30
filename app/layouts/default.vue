<script setup lang="ts">
const route = useRoute()
const links = [
  {
    name: 'Proyectos',
    to: '/',
  },
  {
    name: 'Caso de estudio',
    to: '/caso-estudio',
  },
]
</script>

<template>
  <div class="text-white bg-gray-900 min-h-screen flex flex-col">
    <nav class="border-b border-gray-600 px-4 flex justify-center gap-4">
      <Tab
        v-for="link in links" :key="link.to"
        class="hover:bg-gray-700"
        :class="{ 'bg-gray-700': route.path === link.to }"
        :to="link.to"
      >
        {{ link.name }}
      </Tab>
    </nav>
    <slot />
    <footer class="container py-4 mx-auto text-center text-gray-400">
      Bootcamp de fundamentos de ciberseguridad
    </footer>
  </div>
</template>
