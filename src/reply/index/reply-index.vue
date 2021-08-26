<template>
  <div class="reply-index">
    <ReplyList :list="replies" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import ReplyList from './components/reply-list.vue';

export default defineComponent({
  name: 'ReplyIndex',

  /**
   * 属性
   */
  props: {
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
  computed: {
    ...mapGetters({
      loading: 'reply/index/loading',
      replies: 'reply/index/replies',
    }),
  },

  /**
   * 已创建
   */
  created() {
    this.getReplies(this.comment.id);
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      getReplies: 'reply/index/getReplies',
    }),
  },

  /**
   * 使用组件
   */
  components: {
    ReplyList,
  },
});
</script>

<style scoped>
@import './styles/reply-index.css';
</style>
