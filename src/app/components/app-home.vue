<template>
  <component :is="home"></component>
</template>

<script>
import PostIndex from '@/post/index/post-index.vue';

export default {
  data() {
    return {
      home: 'PostIndex',
    };
  },

  components: {
    PostIndex,
  },
};
</script>
