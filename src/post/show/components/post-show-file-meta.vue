<template>
  <div class="post-show-file-meta">PostShowFileMeta</div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

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
  components: {},
});
</script>

<style scoped>
@import './styles/post-show-file-meta.css';
</style>
