<template>
  <div :class="fileCreateMediaClasses">
    <img class="image" :src="previewImage" @load="onLoadimage" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'FileCreateMedia',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      loaded: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      previewImage: 'file/create/previewImage',
    }),

    fileCreateMediaClasses() {
      return ['file-create-media', { loading: !this.loaded }];
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
    onLoadimage() {
      this.loaded = true;
    },
  },

  /**
   * 使用组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/file-create-media.css';
</style>
