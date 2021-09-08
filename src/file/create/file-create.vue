<template>
  <div class="file-create">
    <FileCreateMedia />
    <FileCreateDragZone @change="onChangeDragZone" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import FileCreateDragZone from '@/file/create/components/file-create-drag-zone';
import FileCreateMedia from '@/file/create/components/file-create-media';

export default defineComponent({
  name: 'FileCreate',

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
   * 事件
   */
  emits: ['change'],

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({}),
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
    ...mapMutations({}),
    ...mapActions({}),

    onChangeDragZone(files) {
      this.$emit('change', files);
    },
  },

  /**
   * 使用组件
   */
  components: {
    FileCreateMedia,
    FileCreateDragZone,
  },
});
</script>

<style scoped>
@import './styles/file-create.css';
</style>
