<template>
  <div class="app-notification">AppNotification</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNotification',

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
  components: {},
});
</script>

<style scoped>
.app-notification {
  position: fixed;
  bottom: 64px;
  right: 64px;
}
</style>
