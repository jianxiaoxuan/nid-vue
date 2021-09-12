<template>
  <div class="file-create-status">
    <div class="upload-progress">
      <div class="content">
        <div class="text" :style="{ width: textWidth }">
          {{ uploadProgress }}
        </div>
        <div class="symbol">%</div>
      </div>
      <div class="overlay" :style="{ width: overlayWidth }"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'FileCreateStatus',

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
      uploadProgress: 'file/create/uploadProgress',
    }),

    overlayWidth() {
      return `${100 - this.uploadProgress}%`;
    },

    textWidth() {
      return this.uploadProgress > 9 ? '120px' : '60px';
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
@import './styles/file-create-status.css';
</style>
