<template>
  <div class="reply-list-item-content">
    {{ item.content }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReplyListItemContent',

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },
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

<style scoped>
@import './styles/reply-list-item-content.css';
</style>
