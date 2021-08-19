<template>
  <div :class="['page', theme]">
    <page-header />
    <page-aside />
    <div class="page-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import PageHeader from './components/page-header.vue';
import PageAside from './components/page-aside.vue';
import { getStorage } from '../app.service';

export default defineComponent({
  name: 'AppLayout',

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
  },

  /**
   * 已创建
   */
  created() {
    // 主题
    const theme = getStorage('theme');

    if (theme) {
      this.setTheme(theme);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      setTheme: 'layout/setTheme',
    }),
  },

  /**
   * 使用组件
   */
  components: {
    PageHeader,
    PageAside,
  },
});
</script>

<style scoped></style>
