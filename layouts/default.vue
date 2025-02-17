<template>
    <div>
      <Header v-if="!hideHeader" />
      <NuxtPage />
    </div>
  </template>

  <script setup>
  import Header from '~/components/header.vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const hideHeader = computed(() => route.path === '/login');
  </script>

