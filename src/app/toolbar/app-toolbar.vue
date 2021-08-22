<template>
  <div class="app-toolbar">
    <div class="app-toolbar layout">
      <PostListLayoutIconSwitcher />
    </div>
    <AppToolbarItemSearch />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbarItemSearch from './components/app-toolbar-item-search.vue';
import PostListLayoutIconSwitcher from '@/post/index/components/post-list-layout-switcher.vue';

export default defineComponent({
  name: 'AppToolbar',

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
  components: {
    AppToolbarItemSearch,
    PostListLayoutIconSwitcher,
  },
});
</script>

<style scoped>
@import './styles/app-toolbar.css';
</style>
