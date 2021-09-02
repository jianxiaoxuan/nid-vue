<template>
  <div class="field">
    <input
      class="input text"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInputText"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextField',

  /**
   * 属性
   */
  props: {
    modelValue: {
      type: String,
    },

    type: {
      type: String,
      default: 'text',
    },

    placeholder: {
      type: String,
    },
  },

  /**
   * 事件
   */
  emits: ['update:modelValue', 'dirty'],

  /**
   * 数据
   */
  data() {
    return {
      value: '',
    };
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
  methods: {
    onInputText(event) {
      const value = event.target.value.trim();

      if (this.value !== value) {
        this.$emit('dirty');
      }

      this.value = value;

      this.$emit('update:modelValue', event.target.value.trim());
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped></style>
