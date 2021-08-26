<template>
  <div :class="postListItemMediaClasses">
    <router-link class="link" :to="itemLinkTo">
      <img class="image" :src="item.file.size.medium" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostListItemMedia',

  /**
   * 属性
   */
  props: {
    item: {
      type: Object,
    },

    aspectRatio: {
      type: String,
      default: '3-2',
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
    itemLinkTo() {
      return { name: 'postShow', params: { postId: this.item.id } };
    },

    postListItemMediaClasses() {
      return [
        'post-list-item-media',
        this.item.file.orientation,
        `aspect-ratio-${this.aspectRatio}`,
      ];
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
@import './styles/post-list-item-media.css';
</style>
