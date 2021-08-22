<template>
  <div class="post-list-item">
    <PostListItemMedia :item="item" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PostListItemMedia from './post-list-item-media.vue';

export default defineComponent({
  props: {
    item: Object,
  },

  components: {
    PostListItemMedia,
  },
});
</script>
