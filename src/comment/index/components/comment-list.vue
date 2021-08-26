<template>
  <div class="comment-list">CommentList</div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({
  name: 'CommentList',

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
    ...mapGetters({
      loading: 'comment/index/loading',
      comments: 'comment/index/comments',
    }),
  },

  /**
   * 已创建
   */
  async created() {
    await this.getComments();
    console.log(this.comments);
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      getComments: 'comment/index/getComments',
    }),
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/comment-list.css';
</style>
