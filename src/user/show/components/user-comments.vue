<template>
  <div class="user-comments">
    <CommentList :filter="filter" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CommentList from '@/comment/index/components/comment-list';

export default defineComponent({
  name: 'UserComments',

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
  computed: {},

  /**
   * 已创建
   */
  created() {
    //
  },

  /**
   * 组件方法
   */
  methods: {},

  /**
   * 使用组件
   */
  components: {
    CommentList,
  },
});
</script>

<style scoped>
@import './styles/user-comments.css';
</style>
