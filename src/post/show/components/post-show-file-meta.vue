<template>
  <div class="post-show-file-meta">
    <PostShowFileMetaKit :kit="kit" />
    <PostShowFileMetaSpecs :specs="specs" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import PostShowFileMetaKit from './post-show-file-meta-kit.vue';
import PostShowFileMetaSpecs from './post-show-file-meta-specs.vue';

export default defineComponent({
  name: 'PostShowFileMeta',

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
    return {};
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      loading: 'file/show/loading',
      kit: 'file/show/kit',
      specs: 'file/show/specs',
    }),
  },

  /**
   * 已创建
   */
  created() {
    this.getFileById(this.post.file.id);
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      getFileById: 'file/show/getFileById',
    }),
  },

  /**
   * 使用组件
   */
  components: {
    PostShowFileMetaKit,
    PostShowFileMetaSpecs,
  },
});
</script>

<style scoped>
@import './styles/post-show-file-meta.css';
</style>
