<template>
  <div class="app-sidebar-item theme bottom">
    <AppIcon class="pointer" :name="themeIcon" @click="onClickThemeIcon" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'AppSidebarItemTheme',

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
      theme: 'layout/theme',
    }),

    themeIcon() {
      return this.theme === 'dark' ? 'wb_sunny' : 'wb_incandescent';
    },
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
  methods: {
    ...mapMutations({
      setTheme: 'layout/setTheme',
    }),

    onClickThemeIcon() {
      const theme = this.theme === 'dark' ? 'light' : 'dark';
      this.setTheme(theme);
    },
  },

  /**
   * 使用组件
   */
  components: {
    AppIcon,
  },
});
</script>

<style scoped></style>
