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
import { mapGetters } from 'vuex';
import PageHeader from './components/page-header.vue';
import PageAside from './components/page-aside.vue';

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
    PageHeader,
    PageAside,
  },
});
</script>

<style scoped></style>
