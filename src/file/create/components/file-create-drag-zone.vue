<template>
  <div
    :class="fileCreateDragZoneClasses"
    @dragover.prevent
    @drop.prevent="onDropDragZone"
    @dragenter="onDragEnterDragZone"
    @dragleave="onDragLeaveDragZone"
  >
    <FileField
      name="file"
      @change="onChangeFile"
      fileType="image/*"
      :text="fileFieldText"
    />
    <div class="description">直接把图像文件拖放到这里</div>
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
    return {
      isOverlay: false,
    };
  },

  /**
   * 事件
   */
  emits: ['change'],

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      previewImage: 'file/create/previewImage',
    }),

    fileFieldText() {
      return '选择文件';
    },

    fileCreateDragZoneClasses() {
      return [
        'file-create-drag-zone',
        { overlay: this.isOverlay },
        { active: this.previewImage },
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
  methods: {
    onChangeFile(files) {
      this.$emit('change', files);
    },

    onDropDragZone(event) {
      this.isOverlay = false;
      this.$emit('change', event.dataTransfer.files);
    },

    onDragEnterDragZone() {
      this.isOverlay = true;
    },

    onDragLeaveDragZone() {
      this.isOverlay = false;
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
