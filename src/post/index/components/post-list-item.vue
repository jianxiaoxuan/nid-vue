<template>
  <div :class="postListItemClasses">
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

  computed: {
    postListItemClasses() {
      return ['post-list-item', this.item.file.orientation];
    },
  },

  components: {
    PostListItemMedia,
  },
});
</script>

<style scoped>
@import './styles/post-list-item.css';
</style>
