<template>
  <div class="user-menu">
    <CloseButton @click="$emit('close')" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CloseButton from '@/app/components/close-button.vue';

export default defineComponent({
  name: 'UserMenu',

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
   * 事件
   */
  emits: ['close'],

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 已创建
   */
  created() {
    if (window) {
      window.addEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    if (window) {
      window.removeEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    onKeyUpWindow(event) {
      if (event.key === 'Escape') {
        this.$emit('close');
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    CloseButton,
  },
});
</script>

<style scoped>
@import './styles/user-menu.css';
</style>
