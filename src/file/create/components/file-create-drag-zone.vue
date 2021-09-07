<template>
  <div class="file-create-drag-zone">
    <FileField
      name="file"
      @change="onChangeFile"
      fileType="image/*"
      :text="fileFieldText"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import FileField from '@/app/components/file-field';

export default defineComponent({
  name: 'FileCreateDragZone',

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

    fileFieldText() {
      return '选择文件';
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
    onChangeFile(files) {
      this.$emit('change', files);
    },
  },

  /**
   * 使用组件
   */
  components: {
    FileField,
  },
});
</script>

<style scoped>
@import './styles/file-create-drag-zone.css';
</style>
