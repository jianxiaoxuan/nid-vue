<template>
  <div class="app-sidebar">
    <AppSidebarItemBrand />
    <AppSidebarItemUser />
    <AppSidebarItemPopular />
    <AppSidebarItemAdd />
    <AppSidebarItemTheme />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppSidebarItemBrand from './components/app-sidebar-item-brand.vue';
import AppSidebarItemPopular from './components/app-sidebar-item-popular.vue';
import AppSidebarItemAdd from './components/app-sidebar-item-add.vue';
import AppSidebarItemTheme from './components/app-sidebar-item-theme.vue';
import AppSidebarItemUser from './components/app-sidebar-item-user.vue';

export default defineComponent({
  name: 'AppSidebar',

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
    AppSidebarItemBrand,
    AppSidebarItemPopular,
    AppSidebarItemAdd,
    AppSidebarItemTheme,
    AppSidebarItemUser,
  },
});
</script>

<style scoped>
@import './styles/app-sidebar.css';
</style>
