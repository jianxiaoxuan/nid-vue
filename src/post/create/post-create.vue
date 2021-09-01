<template>
  <div class="post-create">
    <TextField placeholder="标题" />
    <TextareaField placeholder="描述" class="bordered" :rows="1" />
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
  components: {
    TextField,
    TextareaField,
  },
});
</script>

<style scoped>
@import './styles/post-create.css';
</style>
