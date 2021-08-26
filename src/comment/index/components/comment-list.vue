<template>
  <div class="comment-list">
    <CommentListItem
      v-for="comment in comments"
      :key="comment.id"
      :item="comment"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import CommentListItem from './comment-list-item.vue';

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
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      getComments: 'comment/index/getComments',
    }),
  },

  /**
   * 使用组件
   */
  components: {
    CommentListItem,
  },
});
</script>

<style scoped>
@import './styles/comment-list.css';
</style>
