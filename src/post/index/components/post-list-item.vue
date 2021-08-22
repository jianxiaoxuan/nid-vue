<template>
  <div :class="postListItemClasses">
    <PostListItemMedia :item="item" />
    <PostListItemContent :item="item" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import PostListItemMedia from './post-list-item-media.vue';
import PostListItemContent from './post-list-item-content.vue';

export default defineComponent({
  props: {
    item: Object,
  },

  computed: {
    ...mapGetters({
      layout: 'post/index/layout',
    }),

    postListItemClasses() {
      return ['post-list-item', this.item.file.orientation, this.layout];
    },
  },

  components: {
    PostListItemMedia,
    PostListItemContent,
  },
});
</script>

<style scoped>
@import './styles/post-list-item.css';
</style>
