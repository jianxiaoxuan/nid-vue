<template>
  <i :class="appLogoClasses" :style="appLogoStyles"></i>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLogo',

  /**
   * 属性
   */
  props: {
    name: {
      type: String,
      default: 'w32',
    },

    size: {
      type: [String, Number],
      default: 32,
    },

    color: {
      type: String,
      default: '#000',
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
    appLogoClasses() {
      return ['app-logo', this.name];
    },

    appLogoStyles() {
      return { fontSize: this.size + 'px', color: this.color };
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
@import './styles/app-logo.css';
</style>
