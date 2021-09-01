<template>
  <div class="post-create">
    <TextField placeholder="标题" v-model="title" />
    <TextareaField
      placeholder="描述"
      class="bordered"
      :rows="1"
      v-model="content"
    />
    <button class="button large" @click="onClickSubmitButton">
      {{ submitButtonText }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextField from '@/app/components/text-field';
import TextareaField from '@/app/components/textarea-field';

export default defineComponent({
  name: 'PostCreate',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      title: '',
      content: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    submitButtonText() {
      return '发布';
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
  methods: {
    onClickSubmitButton() {
      console.log(this.title, this.content);
    },
  },

  /**
   * 使用组件
   */
  components: {
    TextField,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/post-create.css';
</style>
