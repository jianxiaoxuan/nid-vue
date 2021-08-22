<template>
  <div :class="['page-header', { shadow }]">
    <div class="container">
      <AppToolbar />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbar from '@/app/toolbar/app-toolbar.vue';

export default defineComponent({
  name: 'PageHeader',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      shadow: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 已创建
   */
  created() {
    // 监听窗口滚动事件
    if (window) {
      window.addEventListener('scroll', this.onScrollWindow);
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    // 取消监听窗口滚动事件
    if (window) {
      window.removeEventListener('scroll', this.onScrollWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    onScrollWindow() {
      if (document) {
        const { scrollTop } = document.documentElement;
        this.shadow = scrollTop > 120 ? true : false;
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    AppToolbar,
  },
});
</script>

<style scoped></style>
