<template>
  <div class="app-toolbar">
    <transition name="app-toolbar-item-layout">
      <div class="app-toolbar layout" v-if="showPostListLayoutSwitcher">
        <PostListLayoutIconSwitcher />
      </div>
    </transition>
    <div class="app-toolbar-item navigator" v-if="showPostShowNavigator">
      <PostShowNavigator />
    </div>
    <AppToolbarItemSearch />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import AppToolbarItemSearch from './components/app-toolbar-item-search.vue';
import PostListLayoutIconSwitcher from '@/post/index/components/post-list-layout-switcher.vue';
import PostShowNavigator from '@/post/show/components/post-show-navigator.vue';

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
  computed: {
    ...mapGetters({
      showPostListLayoutSwitcher: 'toolbar/showPostListLayoutSwitcher',
      showPostShowNavigator: 'toolbar/showPostShowNavigator',
    }),
  },

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
    PostShowNavigator,
  },
});
</script>

<style scoped>
@import './styles/app-toolbar.css';
</style>
