<template>
  <div class="comment-list-item skeleton">
    <div class="thumbnail"></div>
    <div class="content">
      <div class="comment-list-item-meta skeleton"></div>
      <div class="comment-list-item-content skeleton"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentListItemSkeleton',

  /**
   * 属性
   */
  props: {},

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
  components: {},
});
</script>

<style scoped>
@import './styles/comment-list-item-skeleton.css';
</style>
