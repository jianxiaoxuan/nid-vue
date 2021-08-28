<template>
  <div class="textarea-field field">
    <textarea
      class="input textarea"
      :value="modulValue"
      :placeholder="placeholder"
      @input="$emit('update:modulValue', $event.target.value)"
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
  },

  /**
   * 事件
   */
  emits: ['update:modelValue'],

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
@import './styles/textarea-field.css';
</style>
