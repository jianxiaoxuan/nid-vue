<template>
  <div class="user-liked">
    <PostList :sort="sort" :filter="filter" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PostList from '@/post/index/components/post-list.vue';

export default defineComponent({
  name: 'UserLiked',

  /**
   * 属性
   */
  props: {
    sort: {
      type: String,
    },

    filter: {
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
    PostList,
  },
});
</script>

<style scoped></style>
