<template>
  <div class="post-show-file-meta-kit">
    <div class="icon">
      <AppIcon name="camera_alt" />
    </div>
    <div class="content">
      <div class="kit" v-for="(item, index) in kit" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'PostShowFileMetaKit',

  /**
   * 属性
   */
  props: {
    kit: {
      type: Array,
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
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/post-show-file-meta-kit.css';
</style>
