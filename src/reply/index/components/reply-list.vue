<template>
  <div class="reply-list">
    <ReplyListItem
      v-for="reply in list"
      :key="reply.id"
      :item="reply"
      :comment="comment"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ReplyListItem from './reply-list-item.vue';

export default defineComponent({
  name: 'ReplyList',

  /**
   * 属性
   */
  props: {
    list: {
      type: Array,
    },

    comment: {
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
  components: {
    ReplyListItem,
  },
});
</script>

<style scoped>
@import './styles/reply-list.css';
</style>
