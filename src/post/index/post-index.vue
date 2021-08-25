<template>
  <PostListFilters v-if="filterItems.length" :filters="filterItems" />
  <PostList :sort="sort" :filter="filter" />
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import PostList from './components/post-list';
import PostListFilters from './components/post-list-filters.vue';

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

  title() {
    let title;

    if (this.$route.name === 'postIndexPopular') {
      title = '热门';
    } else {
      title = '最近';
    }
    return title;
  },

  computed: {
    ...mapGetters({
      filterItems: 'post/index/filterItems',
    }),
  },

  components: {
    PostList,
    PostListFilters,
  },
});
</script>
