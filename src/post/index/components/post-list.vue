<template>
  <div :class="postListClasses">
    <PostListItem v-for="post in posts" :item="post" :key="post.id" />
  </div>
</template>

<script>
import { getStorage } from '@/app/app.service';
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import PostListItem from './post-list-item';

export default defineComponent({
  async created() {
    await this.getPosts();

    // 内容列表布局
    const layout = getStorage('post-list-layout');

    if (layout) {
      this.setLayout(layout);
    } else {
      this.setLayout('flow');
    }
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
      layout: 'post/index/layout',
    }),

    postListClasses() {
      return ['post-list', this.layout];
    },
  },

  methods: {
    ...mapActions({
      getPosts: 'post/index/getPosts',
    }),

    ...mapMutations({
      setLayout: 'post/index/setLayout',
    }),
  },

  components: {
    PostListItem,
  },
});
</script>

<style>
@import './styles/post-list.css';
</style>
