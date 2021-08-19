<template>
  <div class="user-show">UserShow {{ userId }}</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserShow',

  /**
   * 属性
   */
  props: {
    userId: String,
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

<style scoped></style>
