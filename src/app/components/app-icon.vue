<template>
  <i :class="appIconClasses" :style="appIconStyles">{{ name }}</i>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppIcon',

  /**
   * 属性
   */
  props: {
    name: {
      type: String,
      default: 'favorite',
    },

    color: {
      type: String,
      default: '#000',
    },

    size: {
      type: [Number, String],
      default: 24,
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
  computed: {
    appIconClasses() {
      return ['app-icon'];
    },

    appIconStyles() {
      return {
        color: this.color,
        fontSize: this.size + 'px',
        width: this.size + 'px',
      };
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
  methods: {},

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/app-icon.css';
</style>
