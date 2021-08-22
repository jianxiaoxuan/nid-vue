<template>
  <i :class="postListLayoutIconClasses" @click="$emit('click', name)"></i>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'PostListLayoutIcon',

  /**
   * 属性
   */
  props: {
    name: {
      type: String,
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
      theme: 'layout/theme',
      layout: 'post/index/layout',
    }),

    postListLayoutIconClasses() {
      return [
        'post-list-layout-icon',
        this.name,
        this.theme,
        { active: this.isActive(this.name) },
      ];
    },
  },

  /**
   * 计算属性
   */
  emits: ['click'],

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
    isActive(name) {
      return this.layout === name;
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/post-list-layout-icon.css';
</style>
