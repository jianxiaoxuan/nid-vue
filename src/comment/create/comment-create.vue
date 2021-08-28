<template>
  <div class="comment-create">
    <TextareaField />
    CommentCreate
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextareaField from '@/app/components/textarea-field';

export default defineComponent({
  name: 'CommentCreate',

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
  computed: {
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
  methods: {
  },

  /**
   * 使用组件
   */
  components: {
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/comment-create.css';
</style>
