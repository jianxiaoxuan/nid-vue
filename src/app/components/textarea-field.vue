<template>
  <div class="textarea-field field">
    <textarea
      class="input textarea"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      @input="onInputTextarea"
      @change="onChangeTextarea"
    >
    </textarea>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextareaField',

  /**
   * 属性
   */
  props: {
    modelValue: {
      type: String,
    },

    placeholder: {
      type: String,
    },

    rows: {
      type: Number,
      default: 2,
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
    onInputTextarea(event) {
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

<style scoped>
@import './styles/textarea-field.css';
</style>
