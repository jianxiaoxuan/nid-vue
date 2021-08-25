<template>
  <div class="post-show-skeleton">
    <div class="post-show-media skeleton"></div>
    <div class="section meta actions">
      <div class="post-show-file-meta">
        <div class="post-show-file-meta-item skeleton">
          <div class="icon"></div>
          <div class="text long"></div>
        </div>
        <div class="post-show-file-meta-item skeleton">
          <div class="icon"></div>
          <div class="text"></div>
        </div>
      </div>
      <div class="post-show-actions skeleton">
        <div class="action"></div>
        <div class="action"></div>
      </div>
    </div>
    <div class="post-show-header skeleton">
      <div class="content">
        <div class="text"></div>
        <div class="meta"></div>
      </div>
      <div class="thumbnail"></div>
    </div>
    <div class="post-show-content skeleton"></div>
    <div class="post-show-tags skeleton">
      <div class="tag"></div>
      <div class="tag"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostShowSkeleton',

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
@import './styles/post-show-skeleton.css';
</style>
