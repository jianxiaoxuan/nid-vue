<template>
  <div class="comment-list-item-content">
    <div class="content">
      {{ item.content }}
    </div>
    <div class="meta" v-if="item.post">
      <router-link class="link" :to="postTitleLinkTo">
        # {{ item.post.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentListItemContent',

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
  computed: {
    postTitleLinkTo() {
      return {
        name: 'postShow',
        params: {
          postId: this.item.post.id,
        },
      };
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
  methods: {},

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/comment-list-item-content.css';
</style>
