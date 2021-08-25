<template>
  <div class="post-show-navigator">
    <button
      class="button basic"
      @click="onClickBackButton"
      :disabled="!canNavigateBack"
    >
      <AppIcon name="arrow_back" />
    </button>
    <button
      class="button basic"
      @click="onClickForwardButton"
      :disabled="!canNavigateForward"
    >
      <AppIcon name="arrow_forward" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import AppIcon from '@/app/components/app-icon.vue';

export default defineComponent({
  name: 'PostShowNavigator',

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
      canNavigateBack: 'post/show/canNavigateBack',
      canNavigateForward: 'post/show/canNavigateForward',
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
    ...mapActions({
      goGetPrevPost: 'post/show/goGetPrevPost',
      goGetNextPost: 'post/show/goGetNextPost',
      pushMessage: 'notification/pushMessage',
    }),

    onClickBackButton() {
      this.goGetPrevPost();
    },

    onClickForwardButton() {
      this.goGetNextPost();
    },

    onKeyUpWindow(event) {
      switch (event.key) {
        case 'ArrowLeft':
          if (this.canNavigateBack) {
            this.goGetPrevPost();
          } else {
            this.pushMessage({ content: '前面没有内容了' });
          }
          break;
        case 'ArrowRight':
          if (this.canNavigateForward) {
            this.goGetNextPost();
          } else {
            this.pushMessage({ content: '后面没有内容了' });
          }
          break;
      }
    },
  },

  /**
   * 使用组件
   */
  components: {
    AppIcon,
  },
});
</script>

<style scoped>
@import './styles/post-show-navigator.css';
</style>
