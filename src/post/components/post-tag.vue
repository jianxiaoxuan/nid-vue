<template>
  <div class="post-tag">
    <div class="text">
      <router-link class="link" :to="tagNameLinkTo">
        {{ tag.name }}
      </router-link>
    </div>
    <div class="action" v-if="useDeleteButton">
      <button class="button basic" @click="onClickDeleteButton">
        <AppIcon name="close" size="14" color="#656565" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon';

export default defineComponent({
  name: 'PostTag',

  /**
   * 属性
   */
  props: {
    tag: {
      type: Object,
    },

    useDeleteButton: {
      type: Boolean,
      default: false,
    },
  },

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 事件
   */
  emits: ['delete'],

  /**
   * 计算属性
   */
  computed: {
    tagNameLinkTo() {
      return { name: 'postIndexPopular', query: { tag: this.tag.name } };
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
    onClickDeleteButton() {
      this.$emit('delete', this.tag.id);
    },
  },

  /**
   * 使用组件
   */
  components: {
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/post-tag.css';
</style>
