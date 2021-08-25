<template>
  <div :class="postShowMediaClasses">
    <img class="image" :src="post.file.size.large" @load="onLoadImage" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostShowMedia',

  /**
   * 属性
   */
  props: {
    post: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      loading: true,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    postShowMediaClasses() {
      return ['post-show-media', { loading: this.loading }];
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
    onLoadImage() {
      this.loading = false;
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/post-show-media.css';
</style>
