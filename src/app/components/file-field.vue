<template>
  <div class="field">
    <label :for="name" :class="['button', 'outline', size]">{{ text }}</label>
    <input
      type="file"
      name="name"
      :id="name"
      :accept="fileType"
      class="input file hide"
      @change="$emit('change', $event.target.files)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileField',

  /**
   * 属性
   */
  props: {
    text: {
      type: String,
    },

    size: {
      type: String,
    },

    name: {
      type: String,
    },

    fileType: {
      type: String,
    },
  },

  /**
   * 事件
   */
  emits: ['change'],

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
