<template>
  <div class="comment-list">
    <CommentListItem
      v-for="comment in comments"
      :key="comment.id"
      :item="comment"
    />
    <template v-if="loading">
      <CommentListItemSkeleton v-for="number in 20" :key="number" />
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import CommentListItem from './comment-list-item.vue';
import CommentListItemSkeleton from '@/comment/index/components/comment-list-item-skeleton';

export default defineComponent({
  name: 'CommentList',

  /**
   * 属性
   */
  props: {
    filter: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      loading: 'comment/index/loading',
      comments: 'comment/index/comments',
      hasMore: 'comment/index/hasMore',
      sideSheetTouchdown: 'layout/sideSheetTouchdown',
    }),
  },

  /**
   * 已创建
   */
  async created() {
    await this.getComments({ filter: this.filter });
    // console.log(this.comments);
    // console.log(this.filter);
  },

  watch: {
    filter() {
      this.getComments({ filter: this.filter });
    },

    sideSheetTouchdown(newValue) {
      if (newValue && this.hasMore && !this.loading) {
        try {
          this.getComments({ filter: this.filter });
        } catch (error) {
          this.pushMessage({ content: error.data.message });
        }
      }
    },
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      getComments: 'comment/index/getComments',
      pushMessage: 'notification/pushMessage',
    }),
  },

  /**
   * 使用组件
   */
  components: {
    CommentListItemSkeleton,
    CommentListItem,
  },
});
</script>

<style scoped>
@import './styles/comment-list.css';
</style>
