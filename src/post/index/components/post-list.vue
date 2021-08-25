<template>
  <div :class="postListClasses">
    <PostListItem v-for="post in posts" :item="post" :key="post.id" />
    <template v-if="loading">
      <PostListItemSkeleton v-for="number in 20" :key="number" />
    </template>
  </div>
</template>

<script>
import { getStorage } from '@/app/app.service';
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import PostListItem from './post-list-item';
import PostListItemSkeleton from './post-list-item-skeleton.vue';

export default defineComponent({
  /**
   * 属性
   */
  props: {
    sort: {
      type: String,
    },

    filter: {
      type: Object,
    },
  },

  async created() {
    await this.getPosts({ sort: this.sort });

    // 内容列表布局
    const layout = getStorage('post-list-layout');

    if (layout) {
      this.setLayout(layout);
    } else {
      this.setLayout('flow');
    }

    if (window) {
      window.addEventListener('scroll', this.onScrollWindow);
      window.scrollTo({ top: 0 });
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    if (window) {
      window.removeEventListener('scroll', this.onScrollWindow);
    }
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
      layout: 'post/index/layout',
      hasMore: 'post/index/hasMore',
    }),

    postListClasses() {
      return ['post-list', this.layout];
    },
  },

  data() {
    return {
      prevScrollTop: 0,
    };
  },

  methods: {
    ...mapActions({
      getPosts: 'post/index/getPosts',
    }),

    ...mapMutations({
      setLayout: 'post/index/setLayout',
    }),

    onScrollWindow() {
      if (document) {
        const {
          scrollTop,
          scrollHeight,
          clientHeight,
        } = document.documentElement;

        const height = clientHeight + scrollTop + 200;
        const touchDown = scrollHeight - height < 0;
        const scrollDown = scrollTop > this.prevScrollTop;

        if (touchDown && scrollDown && !this.loading && this.hasMore) {
          this.getPosts({ sort: this.sort });
        }

        this.prevScrollTop = scrollTop;
      }
    },
  },

  components: {
    PostListItem,
    PostListItemSkeleton,
  },
});
</script>

<style>
@import './styles/post-list.css';
</style>
