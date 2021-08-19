<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import AppLayout from '@/app/layout/app-layout.vue';

export default {
  data() {
    return {
      layout: 'AppLayout',
    };
  },

  components: {
    AppLayout,
  },
};
</script>

<style>
@import './styles/normalize.css';
@import './styles/app.css';
@import './styles/page.css';
</style>
