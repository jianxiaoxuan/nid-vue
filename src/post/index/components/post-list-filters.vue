<template>
  <div class="post-list-filters">
    <div
      class="post-list-filter"
      v-for="(filter, index) in filters"
      :key="index"
    >
      <div class="title">{{ filter.title }}</div>
      <div class="value">{{ filter.value }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostListFiters',

  /**
   * 属性
   */
  props: {
    filters: {
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
  components: {},
});
</script>

<style scoped>
@import './styles/post-list-filters.css';
</style>
