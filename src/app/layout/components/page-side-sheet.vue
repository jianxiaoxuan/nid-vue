<template>
  <transition name="page-side-sheet">
    <div class="page-side-sheet" v-if="sideSheetComponent">
      <CloseButton @click="onClickCloseButton" />
      <component :is="sideSheetComponent"></component>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import CloseButton from '@/app/components/close-button.vue';
import CommentSideSheet from '@/comment/components/comment-side-sheet.vue';

export default defineComponent({
  name: 'PageSideSheet',

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
      sideSheetComponent: 'layout/sideSheetComponent',
    }),
  },

  /**
   * 已创建
   */
  created() {
    if (window) {
      window.addEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    if (window) {
      window.removeEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      resetSideSheet: 'layout/resetSideSheet',
    }),

    onClickCloseButton() {
      this.resetSideSheet();
    },

    onKeyUpWindow(event) {
      if (event.key === 'Escape') {
        this.resetSideSheet();
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    CommentSideSheet,
    CloseButton,
  },
});
</script>

<style scoped>
@import './styles/page-side-sheet.css';
</style>
